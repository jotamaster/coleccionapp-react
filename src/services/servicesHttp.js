import axios from 'axios';
import { SERVER } from '../constants';

const TOKEN_TYPE = "Bearer "

const myApiConfig = (authorizarion = null)=> ({
    baseURL: `${SERVER.server}:${SERVER.port}/api/`,
    timeout: 10000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Authorization" : authorizarion ? TOKEN_TYPE+authorizarion : ''
    }
})

export function httpGet(endpoint,parameter = null,authorizarion = null){
    let param = parameter ? parameter : '';
    let route = endpoint+param;
    return axios.get(route,myApiConfig(authorizarion)).then(response => {
        return response
     }).catch(error=>{
        return error.response
     })
}

export function httpDelete(endpoint,parameter = null,authorizarion = null){
    let param = parameter ? parameter : '';
    let route = endpoint+param;
    return axios.delete(route,myApiConfig(authorizarion)).then(response => {
        return response
     }).catch(error=>{
        return error.response
     })
}

export function httpGetExternalApi(endpoint,parameter = null,authorizarion = null){
    let param = parameter ? parameter : '';
    let route = endpoint+param;
    return axios.get(route).then(response => {
        return response
     }).catch(error=>{
        return error.response
     })
}
export function httpPost(endpoint,payload,authorizarion = null){
    return axios.post(endpoint,payload,myApiConfig(authorizarion)).then(response => {
         return response
     }).catch(error=>{
        return error.response;
     })
}
export function httpPut(endpoint,payload,authorizarion = null){
    return axios.put(endpoint,payload,myApiConfig(authorizarion)).then(response => {
         return response
     }).catch(error=>{
        return error.response;
     })
}