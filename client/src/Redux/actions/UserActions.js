import { LOAD, REGISTER, FAIL, LOGIN, LOGOUT, CURRENT, CLEARERRORS } from '../types/UserTypes'
import axios from 'axios'


export const register=(user,history)=> async (dispatch)=>{
    dispatch({type:LOAD})
    try {
        const res =await axios.post('api/contacts/Signup', user)
       
        dispatch({type:REGISTER, payload: res.data})
       
        history.push('/')
    } catch (error) {
        dispatch({type:FAIL, payload:error.response.data})
    }
}
export const login=(user, history)=> async  (dispatch)=>{
    dispatch({type:LOAD})
    try {
        const res= await axios.post('api/contacts/Signin', user)
        dispatch({type:LOGIN, payload: res.data})
        console.log(res.data)
        history.push('/')
    } catch (error) {
        dispatch({type:FAIL, payload:error.response.data})
      
    }
}
export const current=()=> async (dispatch)=>{
    const config={
        headers:{
            Authorization: localStorage.getItem('token')
        }
    }
    console.log(config)
    try {
        const res= await axios.get('/api/contacts/current', config)
        dispatch({type:CURRENT, payload: res.data.user})
        console.log(res.data.user)
    } catch (error) {
        console.log(error)
    }
}
export const logout=()=>{
    
    return{type:LOGOUT}
}
export const clearerrors=()=>{
    return {type: CLEARERRORS}
}