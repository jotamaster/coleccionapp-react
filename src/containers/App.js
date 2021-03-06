import React from 'react'
import Theme from '../layouts/Theme'
import Login from '../views/Login/Login'
import Register from '../views/Register/Register'
import MisColecciones from '../views/MisColecciones/MisColecciones'
import { Switch,BrowserRouter as Router,Route,Redirect } from 'react-router-dom';
import {httpPost} from '../services/servicesHttp'
import {ENDPOINTS } from '../constants'
import {ToastContainer, toast} from 'react-toastify'

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
        if(input && password){
            httpPost(ENDPOINTS.authenticate,payload).then(response=>{
                const {data,status} = response;
                if(status === 200){
                    localStorage.setItem("auth",JSON.stringify({...data}))
                    this.setState({login : true})
                }else if(status === 403){
                    toast.warn(data.message)
                }
            })
        }else{
            toast.warn("Complete todos los campos")
        }
    }
    render(){
        const {login} = this.state;
        return (
            <Router>
                <div>
                    {login ? ( 
                    <Theme onCloseSession={this.onCloseSession}>
                        <div style={{marginTop : 64}}>
                            <Switch>
                                <Route path="/" exact component={()=><Redirect to="/colecciones" />} /> 
                                <Route path="/colecciones" component={MisColecciones}/> 
                            </Switch>
                        </div>
                    </Theme>) : (
                         <Switch>
                             <Route path="/" exact render={ ()=> <Login onLogin={this.onLogin}   />  } /> 
                             <Route path="/register" component={Register}/> 
                        </Switch>
                        )
                    }
                     <ToastContainer draggablePercent={80} autoClose={2000} pauseOnHover={false} position="top-right"  />
                </div>
            </Router>
        )
    }
}
export default App;