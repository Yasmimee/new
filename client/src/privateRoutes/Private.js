
import { Redirect, Route } from "react-router"

function Private({component, ...res}) {
    const token= localStorage.getItem("token") 
      
       return(
           <div>

               { token ? <Route component={component} {...res} /> : <Redirect to ='/Signin'/> }
           </div>
       )

    
}
export default Private