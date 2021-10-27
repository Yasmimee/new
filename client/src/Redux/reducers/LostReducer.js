
import { GETLOST } from "../types/UserTypes"
const initState={
   losts:[]
}

const LostReducer=(state= initState, action)=>{
   switch (action.type) {
       case GETLOST:
           
         return {...state, losts:action.payload.getLosts}
   
       default:
          return state
   }
}


export default LostReducer