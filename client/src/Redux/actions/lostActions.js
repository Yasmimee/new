import axios from "axios"
import { GETLOST } from "../types/UserTypes"

export const Losts=()=> async (dispatch)=>{
    try {
        const res = await axios.get('api/lost/lostList')
        dispatch({type: GETLOST, payload: res.data})

    } catch (error) {
        console.log(error.response.data)
    }

}





export const add=({name,age,description,Picture},history)=>async(dispatch)=>{
    const config={
        headers:{
            Authorization: localStorage.getItem('token')
        }
    }
const data = new FormData()
data.append('name',name)
data.append('description',description)
data.append('age',age)
data.append('Picture',Picture)

    try {
        const res= await axios.post('/api/lost', data,config)
       
        dispatch(Losts())
        history.push('/lostList')
    } catch (error) {
        console.log(error.response)
    }}








// export const deleteLost = (id) => async (dispatch)=>{
//     try {
//         const res= await axios.delete(`api/lost/${id}`)
//         dispatch(Losts())
//     } catch (error) {
//         console.log(error)
//     }
// }

