import { Link } from 'react-router-dom'

function Informations() {
    return(
        <div className="info-alz">
            <div className="alz">
            <h1>
            Qu’est-ce que la maladie d’Alzheimer? 
            </h1>
            <h5>
            La vie peut prendre un virage inattendu lorsqu’un proche ou un ami reçoit un diagnostic de maladie chronique comme la maladie d’Alzheimer ou une maladie apparentée, la sclérose en plaques ou la maladie de Parkinson. Le diagnostic est venu confirmer 
            vos inquiétudes, et vous tentez maintenant de déterminer comment aider cet être cher.</h5>
            <p>Alzheimer est un type de démence qui provoque des troubles de la mémoire, de la pensée et du comportement,
                Les symptômes apparaissent généralement lentement et s’aggravent au fil du temps, devenant assez graves et interférant avec les tâches quotidiennes.</p>
            <h5>Les symptômes apparaissent généralement lentement et s’aggravent au fil du temps, devenant assez graves et interférant avec les tâches quotidiennes.</h5>
            <p>un terme général désignant des pertes de mémoire et d’autres capacités intellectuelles assez graves pour interférer avec la vie quotidienne. La maladie d’Alzheimer représente 50 à 80 % des cas de démence.</p>
        </div>
        
       <h3> les 3 differents phases de la maladie d'Alzheimer</h3>
       <div className='stade'>

        <Link to='/Stage1' >  <button className="st-btn"><a href='#'>Phase 1</a></button> </Link>
        <Link to='/Stage2' >  <button className="st-btn">  <a href='#'> Phase 2 </a></button></Link>
        <Link to='/Stage3' >    <button className="st-btn">  <a href='#'> Phase 3 </a> </button></Link>
       </div>
        
        </div>
    )
}
export default Informations