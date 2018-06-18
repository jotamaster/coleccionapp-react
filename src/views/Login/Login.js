import React,{Component} from 'react'
import './Login.css'
import {Grid,Hidden,CardContent,Button,CardActions,TextField,Checkbox,FormControlLabel,Card,Typography} from '@material-ui/core'
import {ChevronRight} from '@material-ui/icons';


class Login extends Component {
    state = {
        input : '',
        password : ''
    }
    login = ()=>{
        this.props.onLogin(this.state.input,this.state.password)
    }
    render(){
        return (
            <div className="Auth">
                <Grid justify="center" alignItems="center" style={{height : '100vh'}} container spacing={0}>
                    <Card>
                        <form style={{padding : 25}} noValidate autoComplete="off">
                                <TextField
                                id="emailornick"
                                fullWidth
                                label="Correo Electrónico o Nick"
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
                                            style={{marginLeft : 'auto'}}
                                            onClick={()=>this.login()} variant="raised" color="primary">
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