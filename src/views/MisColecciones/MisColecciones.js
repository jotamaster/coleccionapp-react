import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Switch,Route,Redirect} from 'react-router-dom'
import { Button } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Toast,{toast} from 'react-toastify'
import DialogTitle from '@material-ui/core/DialogTitle';
import {httpPost,httpGet} from '../../services/servicesHttp'
import {ENDPOINTS } from '../../constants'
import CardColeccion from '../CardColeccion/CardColeccion'
import Coleccion from '../Coleccion/Coleccion'

const styles = theme => ({
  button : {
      position : 'fixed',
      right : 15,
      bottom : 15
      
 }
});

class MisColecciones extends Component {
    state = {
        open: false,
        name : '',
        detail : '',
        type : '',
        colecciones : []
    }
   componentDidMount(){
        this.fetchColecciones()
   }
   fetchColecciones = ()=>{
        const {access_token} = JSON.parse(localStorage.getItem('auth'));
        httpGet(ENDPOINTS.fetch_colecciones,null, access_token).then(response=>{
            if(response.status === 200){
                this.setState({colecciones : response.data})
            }
        })
   }
    onAddCollection = (e)=>{
        if(this.state.name == "" || this.state.detail =="" || this.state.type ==""){
            toast.warn("Por favor rellenar todos los campos");
        }else{
            const payload = {nombre: this.state.name, detalle : this.state.detail, tipo: this.state.type}
            const {access_token} = JSON.parse(localStorage.getItem('auth'));
            httpPost(ENDPOINTS.add_coleccion, payload, access_token).then(response => {
                if(response.status === 200){
                    toast.success(response.data.success);
                    this.fetchColecciones()
                    this.setState({open : false})
                }
            })
        }
       
    }
    render(){
        const { classes } = this.props;
        return (
           <div className={classes.root}>
                <div>
                    <Switch>
                        <Route path={this.props.match.path} exact render={(prop)=> (<CardColeccion {...prop} colecciones={this.state.colecciones}/>)} /> 
                        <Route path={this.props.match.path+"/:coleccionId"} render={(prop)=><Coleccion {...prop} colecciones={this.state.colecciones} />} />
                    </Switch>
                    <Dialog
                        open={this.state.open}
                        onClose={()=>this.setState({open : false})}
                        aria-labelledby="form-dialog-title"
                        >
                        <DialogTitle  id="form-dialog-title">Crear Colección</DialogTitle>
                        <DialogContent>
                            <TextField
                            autoFocus
                            value={this.state.name}
                            onChange= { e => this.setState({name:e.target.value})}
                            margin="dense"
                            id="name"
                            label="Nombre"
                            type="text"
                            fullWidth
                            />
                            <TextField
                            margin="dense"
                            value={this.state.detail}
                            onChange= { e => this.setState({detail:e.target.value})}
                            id="detail"
                            label="Descripción"
                            type="text"
                            fullWidth
                            />
                            <TextField
                            margin="dense"
                            value={this.state.type}
                            onChange= { e => this.setState({type:e.target.value})}
                            id="type"
                            label="Tipo"
                            type="text"
                            fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={()=>this.setState({open : false})} color="primary">
                            Cancelar
                            </Button>
                            <Button onClick={this.onAddCollection} color="primary">
                            Crear
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <Button 
                    onClick={()=>this.setState({open : true})}
                    variant="fab"
                    color="primary"
                    aria-label="add" 
                    className={classes.button}>
                    <AddIcon />
                </Button>
           </div>
        )
    }
}

export default withStyles(styles)(MisColecciones);