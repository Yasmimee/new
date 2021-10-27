import axios from 'axios'
import {useState} from 'react'
import { useDispatch} from 'react-redux'
import { add,addnewLost } from '../../Redux/actions/lostActions'
import {Link, useHistory} from 'react-router-dom'
function Lost() {

    const [name, setName]= useState("")
    const [age, setAge] = useState(0)
    const [description, setDesc] = useState("")
    const [Picture, setPicture] =useState()
 const dispatch = useDispatch()

const history=useHistory()
    const handleSubmit=(e)=>{
        e.preventDefault()
     dispatch(add({name,age,description,Picture},history))
    }


    return(
        <div className='lost'>
            <h1>
            signaler une personne disparue
            </h1>
            <form onSubmit={handleSubmit} className='form'  encType="multipart/form-data" >
            {/* <label>Name </label> */}
            <input type="text" placeholder='Nom' value={name} onChange={(e)=>setName(e.target.value)} required/> <br/><br/>
           {/* <label>Age </label> */}
            <input type='number' placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)} ></input><br/><br/>
            {/* <label>Description </label> */}
            <textarea value={description} placeholder='Description' onChange={(e)=>setDesc(e.target.value)} required /> <br/><br/>
            {/* <label>Picture</label>  */}
            <input type='file'  onChange={(e)=>setPicture(e.target.files[0])} required/><br/><br/>

          <Link to='/lost' > <button type="submit" className='st-btn' >Submit</button></Link>
            

        </form>
        </div>
        
    )
}
export default Lost