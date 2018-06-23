import React,{Component} from 'react'
import './Login.css'
import {Grid,Button,CardActions,TextField,Card} from '@material-ui/core'
import { Link } from 'react-router-dom'
import {ChevronRight} from '@material-ui/icons';


class Login extends Component {
    state = {
        input : '',
        password : ''
    }
    login = ()=>{
        this.props.onLogin(this.state.input,this.state.password)
    }
    register = ()=>{
            this.props.onRegister()
    }
    render(){
        return (
            <div className="Auth">
                <Grid justify="center" alignItems="center" style={{height : '80vh'}} container spacing={0}>
                    <Card>
                        
                        <form style={{padding : 25}} noValidate autoComplete="off">
                        <div style={{backgroundColor:''}}>
                    
                        <img src={require('../../images/1icon-256x256.png')} style={{maxHeight: 100, marginLeft : 'auto', marginRight: 'auto',display: 'block'}}/>
                        </div>
                                <TextField
                                id="emailornick"
                                fullWidth
                                label="Correo Electrónico"
                                value={this.state.input}
                                onChange={e=>this.setState({input : e.target.value})}
                                margin="normal"
                                />
                                <TextField
                                fullWidth
                                id="password"
                                label="Contraseña"
                                type="password"
                                value={this.state.password}
                                onChange={e=>this.setState({password : e.target.value})}
                                margin="normal"
                                />
                             </form>
                                <CardActions>
                                    <Grid container justify="space-between">
                                        <Button 
                                            component={Link}
                                            to="register"
                                            style={{ color:'#fff',backgroundColor : '#1976D2 '}}
                                            variant="raised" >
                                                Registrarse
                                                
                                        </Button>
                                        <Button 
                                            style={{marginLeft : 'auto', color:'#fff',backgroundColor : '#1976D2 '}}
                                            onClick={()=>this.login()} variant="raised" >
                                                Ingresar
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
export default Login;