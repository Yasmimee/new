import { LOAD, REGISTER, LOGIN, FAIL , CURRENT, LOGOUT, CLEARERRORS} from '../types/UserTypes'

const initState={
    user:null,
    load:false,
    auth: localStorage.getItem('token') ? true : false, 
    errors:null,
}
// const initialState = {
//     token: localStorage.getItem('token'),
//     isAuthenticated: // or just !!localStorage.getItem('token')
//     isLoading: false,
//     isRegistered: false

const UserReducer=(State= initState, action)=>{
    switch (action.type) {
        case LOAD:

            return {...State, load:true, auth: null}

        case REGISTER:
            localStorage.setItem("token", action.payload.token)
            return {...State, load:false, user: action.payload.user, auth:true
            }
        case FAIL:
            return{
                ...State,errors: action.payload.errors, load: false
            }
        case CURRENT:
            return{...State, auth:true, user:action.payload}
            
        case LOGIN:
                localStorage.setItem("token", action.payload.token)
                return{
                    ...State, load:false, auth:true, user:action.payload.found
                }
        case LOGOUT:
            localStorage.removeItem("token")
            return{...State, user:null, errors:null, auth:false}
        case CLEARERRORS:
            return{...State,errors:null}
    
        default:
            return State
    }
}


export default UserReducer