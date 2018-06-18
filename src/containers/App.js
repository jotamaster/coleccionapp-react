import React from 'react'
import Theme from '../layouts/Theme'
import Login from '../views/Login/Login'
import { Switch,BrowserRouter as Router,Route } from 'react-router-dom';
import {httpPost} from '../services/servicesHttp'
import {ENDPOINTS } from '../constants'

class App extends React.Component {
    state = {
        login : false
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
    render(){
        const {login} = this.state;
        return (
            <Router>
                    {login ? ( 
                    <Theme>
                        <h1 style={{color : this.state.toggleColor}}>App</h1>
                        <button onClick={this.onCloseSession}>button</button>
                    </Theme>) : (
                         <Switch>
                             <Route path="/" exact render={()=> <Login onLogin={this.onLogin} />} />
                        </Switch>
                        )
                    }
               
            </Router>
        )
    }
}
export default App;