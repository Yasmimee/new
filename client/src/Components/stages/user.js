import {Link } from 'react-router-dom'
function User() {
    return(
        <div className="user">
          <Link to='/Stage1'>  <button className="btn">Stage 1</button></Link>
           <Link to='/Stage2'> <button className="btn">Stage 2</button></Link>
          <Link to='/Stage3'>  <button className="btn">Stage 3</button></Link>
        </div>
    )
}
export default User