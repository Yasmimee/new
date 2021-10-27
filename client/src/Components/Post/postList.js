import PostItem from "./PostItem";
import { getPosts } from "../../Redux/actions/forumActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from './post'

function List() {



    useEffect(() => {
     dispatch(getPosts())
        },
     [])
const  dispatch = useDispatch()  
const PostList = useSelector(state => state.ForumReducer.posts)  

     
    return(
        <div className="blog">
             <h4 className='postforum'> post a new subject</h4>
        <Post/>
            <h2 id="blog">Le Blog</h2>
            { PostList && PostList.map(el=> <PostItem el={el} />)      }
        </div>
    )
}
export default List