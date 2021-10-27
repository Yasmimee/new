import { useSelector,useDispatch } from "react-redux"
import { Losts } from "../../Redux/actions/lostActions"
import LostCard from './lostCard'
import { useEffect } from "react"
import { Link } from "react-router-dom"
function List() {
    useEffect(() => {
       dispatch(Losts())
       
    }, [])
     const dispatch = useDispatch()
   const losts = useSelector(state => state.LostReducer.losts)

    return(
       <div>
           <div className="add">
           <h4>Signaler la disparition d'une personne majeure</h4>
         <Link to='/addlost'> <a href="#"> <button className='st-btn'> Click here</button> </a></Link>
           </div>
           <div className='map1'>
           <h2>Personnes disparues : </h2>
           </div>
           <div className="map">
           {losts && losts.map(el=> <LostCard el={el}/>)}
           </div>
           

       </div> 
    )
}
export default List