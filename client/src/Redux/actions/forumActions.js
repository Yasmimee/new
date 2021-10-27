
import axios from 'axios'
import { GETPOST, GETPOSTS} from '../types/forumTypes'




export const getPosts = () => async (dispatch) =>{
    const config={
        headers:{
            Authorization: localStorage.getItem('token')
        }
    }
    try {
        const res= await axios.get('/api/post',config);
        dispatch({
            type: GETPOSTS,
            payload: res.data.getAll
        });
    } catch (error) {
        console.log(error.response.data)
        ;
    }
};

export const Getpost = (id)=> async (dispatch) =>{
    const config={
        headers:{
            Authorization: localStorage.getItem('token')
        }
    }

   try {
    const res = await axios.get(`/api/post/${id}`, config)

    dispatch({
        type: GETPOST,
        payload: res.data.post
    });

    console.log(res.data.post)


   }   catch (error) {
    console.log(error)
}
}

export const AddPost =(text) =>async (dispatch) =>{
    const config={
        headers:{
            Authorization: localStorage.getItem('token')
        }
    }
    try {
      const  res= await axios.post('/api/post/posts',text,config)
        dispatch((getPosts()))
    } catch (error) {
        console.log(error)
    }
}

export const DeletePost = (id) => async (dispatch) =>{
    const config={
        headers:{
            Authorization: localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.delete(`/api/post/${id}`, config)
    dispatch((getPosts()))
    } catch (error) {
        console.log(error)
    }
}

export const EditPost = (id, AddPost) => async(dispatch) =>{
    const config={
        headers:{
            Authorization: localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.put(`/api/post/${id}`, AddPost ,config)
        dispatch(getPosts())
    } catch (error) {
        console.log(error)
    }

}

export const AddComment = (id,  text) => async(dispatch)=>{
    const config={
        headers:{
            Authorization: localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.post(`api/post/comment/${id}`,text,config)
        dispatch(getPosts())
    } catch (error) {
        console.log(error)
    }
}


// export const DeleteComment = (id, comment_id) =>async(dispatch)=>{
//     try {
//         const res = await axios.delete(`/comment/${id}/${comment_id}`)
//         dispatch((getPosts))
//     } catch (error) {
//         console.log(error)
//     }

// }
