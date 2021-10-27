import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { AddPost } from "../../Redux/actions/forumActions"

function Post() {

    const [text, setText]=useState("")
    const [name, setName]=useState("")
    const [subject, setSubject]=useState("")
    
    const dispatch = useDispatch()
    const history=useHistory()

    return(


            <form className='form'>
              <div className="form-group">
                <div className="post-input">
{/* 
                <label type="text" > Name</label> */}
                <input type='text' placeholder="subject" value={subject} onChange={(e)=> setSubject(e.target.value)}/><br/><br/>
                <input type="text" placeholder="name" value={name} onChange={(e)=> setName(e.target.value)}/><br/><br/>
                <textarea type="text" placeholder="say something..." value={text} onChange={(e)=>setText(e.target.value)} required></textarea><br/><br/>
              
              
              <button type="submit" className="st-btn" onClick={()=> {dispatch(AddPost({text})); history.push('/forum')}} >

                Submit
              </button>
                </div>
              </div>

          </form>

    )
}
export default Post