import Moment from "react-moment"
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from "react-router"
import { DeletePost, AddComment, EditPost, Getpost} from "../../Redux/actions/forumActions"
import { useState ,useEffect} from "react"
import Edit from "./PostEdit"
import { current } from "../../Redux/actions/UserActions"


function PostItem({el}) {
     const dispatch = useDispatch()
     const history= useHistory()
     const [text, setText]=useState("")
    
     const auth =  useSelector(state=> state.UserReducer.auth)
     const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(AddComment(el._id, {text}));
    
    
     };


     useEffect(() => {
  //  dispatch(Getpost(el._id))
  dispatch(current())
     }, [])
     const reducerUser = useSelector(state => state.UserReducer.user)
     const dateToFormat = '1976-04-19T12:59-0500';

    return(
        
      <section className="dark">
      <div className="container-p">
       
        <article className="newPost">
         
          <div className="post-head">
            <h4>{el.subject}</h4>
            <h6 className="post-name">{el.name}</h6>
            <div className="post-body">
              <time dateTime="date-post">
                 <i className="date-post" /> <Moment format="YYYY/MM/DD"></Moment>
              </time>
            </div>
            <div className="post-text" />
            <p>{el.text}</p>
            
            {auth  &&  reducerUser?._id == el.user &&
<div className="auth">
             <button  className="st-btn" onClick={()=>{dispatch(DeletePost(el._id))}}>
               Delete Post
             </button> 
            <Edit  el={el} />
              </div>
            }
            
            
            </div>
            <form className="com" onSubmit={handleSubmit}>
              <textarea placeholder="say something..."  value={text} onChange={(e)=>setText(e.target.value)}   rows="2" cols="100" >
              </textarea>
              
              <button className='st-btn' type="submit" > add comment</button>
              <p >
                {el.comments.map(el=> el.text && el.text )}
              </p>
            </form>
        </article>
      </div></section>

    )
}
export default PostItem