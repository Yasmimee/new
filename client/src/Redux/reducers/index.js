import { combineReducers } from "redux";
import LostReducer from "./LostReducer";
import  UserReducer  from './UserReducers'
import ForumReducer from './forumReducer';
const rootReducer=combineReducers({UserReducer, LostReducer, ForumReducer})
export default rootReducer