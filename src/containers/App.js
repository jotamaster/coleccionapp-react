import React from 'react'
import Theme from '../layouts/Theme'
import Login from '../views/Login/Login'
import Register from '../views/Register/Register'
import { Switch,BrowserRouter as Router,Route } from 'react-router-dom';
import {httpPost} from '../services/servicesHttp'
import {ENDPOINTS } from '../constants'

class App extends React.Component {
    state = {
        login : false,
        registro : false
    }
    componentWillMount(){
        if(localStorage.getItem("auth")){
            this.setState({login : true})
        }else{
            this.setState({login : false})
        }
    }
    onCloseSession = ()=>{
        localStorage.removeItem("auth")
        this.setState({login : false})
    }
    onLogin = (input,password)=>{
        const payload = {
            email : input,
            clave : password
        }
        httpPost(ENDPOINTS.authenticate,payload).then(response=>{
            const {data,status} = response;
            if(status === 200){
                localStorage.setItem("auth",JSON.stringify({...data}))
                this.setState({login : true})
            }
        })
    }

    onRegister = ()=>{
        this.setState({registro : true})
    }
    render(){
        const {login} = this.state;
        const {registro} = this.state;
        return (
            <Router>
                    {login ? ( 
                    <Theme onCloseSession={this.onCloseSession}>
                       
                    </Theme>) : (
                         <Switch>
                             <Route path="/" exact render={ ()=> <Login onLogin={this.onLogin}   />  } /> 
                             <Route path="/register"  component={Register}/> 
                        </Switch>
                        )
                    }
               
            </Router>
        )
    }
}
export default App;