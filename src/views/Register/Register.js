import React,{Component} from 'react'
import {Link } from 'react-router-dom';
import {toast} from 'react-toastify'
import {Grid,Hidden,CardContent,Button,CardActions,TextField,FormControlLabel,Card,Typography} from '@material-ui/core'
import {ChevronRight} from '@material-ui/icons';
import {httpPost} from '../../services/servicesHttp'
import {ENDPOINTS } from '../../constants'

class Register extends Component{
    state = {
        nombre : '',
        apellido : '',
        correo: '',
        clave: ''
    }
    onRegister = ()=>{
        const {nombre,apellido,correo,clave} = this.state;
        const payload = {
            nombre,
            apellido,
            email : correo,
            clave
        }
        if(nombre && apellido && correo && clave){
            httpPost(ENDPOINTS.register, payload).then(response => {
                if(response.status === 200){
                    toast.success("Se ha registrado exitosamente");
                    this.props.history.goBack()
                }
            })
        }else{
            toast.warn("Debe completar todos los campos");
        }
    }
    render(){
        return (
            <div className="Auth">
                <Grid justify="center" alignItems="center" style={{height : '80vh'}} container spacing={0}>
                    <Card>
                        
                        <form style={{padding : 25,maxWidth:400}} noValidate autoComplete="off">
                        <div style={{backgroundColor:''}}>
                    
                        <img src={require('../../images/1icon-256x256.png')} style={{maxHeight: 100, marginLeft : 'auto', marginRight: 'auto',display: 'block'}}/>
                        </div>
                                <TextField
                                id="nombre"
                                fullWidth
                                label="Nombre"
                                value={this.state.nombre}
                                onChange={e=>this.setState({nombre : e.target.value})}
                                margin="normal"
                                />
                                <TextField
                                fullWidth
                                id="apellido"
                                label="Apellido"
                                type="text"
                                value={this.state.apellido}
                                onChange={e=>this.setState({apellido : e.target.value})}
                                margin="normal"
                                />
                                <TextField
                                fullWidth
                                id="correo"
                                label="Correo"
                                type="email"
                                value={this.state.correo}
                                onChange={e=>this.setState({correo : e.target.value})}
                                margin="normal"
                                />
                                <TextField
                                fullWidth
                                id="clave"
                                label="Clave"
                                type="password"
                                value={this.state.clave}
                                onChange={e=>this.setState({clave : e.target.value})}
                                margin="normal"
                                />
                             </form>
                                <CardActions>
                                    <Grid container justify="space-between">
                                    <Button 
                                    component={Link}
                                    to="/"
                                            style={{ color:'#fff',backgroundColor : '#1976D2 '}}
                                        variant="raised" >
                                                Volver
                                                
                                        </Button>
                                        <Button 
                                            style={{marginLeft : 'auto', color:'#fff',backgroundColor : '#1976D2 '}}
                                            onClick={()=>this.onRegister()} variant="raised" >
                                                Registrarme
                                                <ChevronRight />
                                        </Button>
                                    </Grid>
                                </CardActions>
                            </Card>
                </Grid>
            </div>
        )
    }

}

export default Register;