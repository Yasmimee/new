import { DELETEPOST , GETPOSTS, GETPOST} from '../types/forumTypes'
import { EDITPOST } from '../types/UserTypes';


const initialState ={
    posts:[],
    post : null,
    loading : true,
    errors: {}
}

 function forumReducer (state = initialState, action){
    const { type, payload } = action ;
     switch(type){
         case GETPOSTS:
             return{...state, posts: payload, loading: false };
    

        case GETPOST:
            return {...state, post:payload, loading: false}

        
        case EDITPOST:
            return{...state, post:[action.payload] }
        default:
            return state;
     }
}
export default forumReducer