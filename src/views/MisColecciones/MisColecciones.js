import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Toast,{toast} from 'react-toastify'
import DialogTitle from '@material-ui/core/DialogTitle';
import {httpPost} from '../../services/servicesHttp'
import {ENDPOINTS } from '../../constants'

const styles = theme => ({
  button : {
      position : 'absolute',
      right : 15,
      bottom : 15
 }
});

class MisColecciones extends Component {
    state = {
        hidden: true,
        open: false,
        name : '',
        detail : '',
        type : ''
    }
    onAddCollection = (e)=>{
        const payload = {nombre: this.state.name, detalle : this.state.detail, tipo: this.state.type}
        const {access_token} = JSON.parse(localStorage.getItem('auth'));
        httpPost(ENDPOINTS.add_coleccion, payload, access_token).then(response => {

            if(response.status === 200){
                toast.success(response.data.success);
                this.setState({open : false})
            }

        })
       
    }
   componentDidMount(){
        this.setState({hidden : false})
   }
    render(){
        const { classes } = this.props;
        return (
           <div className={classes.root}>
                <div>
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