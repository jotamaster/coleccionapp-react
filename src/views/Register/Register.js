import React,{Component} from 'react'
import { Switch,BrowserRouter as Router,Route,Link } from 'react-router-dom';
import {Grid,Hidden,CardContent,Button,CardActions,TextField,FormControlLabel,Card,Typography} from '@material-ui/core'
import {ChevronRight} from '@material-ui/icons';

class Register extends Component{
    state = {
        nombre : '',
        apellido : '',
        correo: '',
        clave: ''
    }
    register = ()=>{
        this.props.onRegister(this.state.nombre,this.state.apellido,this.state.correo,this.state.clave)
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
                                type="text"
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
                                            onClick={()=>this.register()} variant="raised" >
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