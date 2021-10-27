import {Link} from 'react-router-dom'
function S2() {
    return(
        <div className="phase">
            <h2>Phase II</h2>
           
           
            <h4>Phase intermédiaire : Déficit cognitif modéré</h4>
            <div className='phase-p'>
            <p> Des troubles de la mémoire et du raisonnement sont perceptibles et les personnes ont désormais besoin d’aide pour les activités 
                quotidiennes. À ce stade, les personnes atteintes de la maladie d’Alzheimer peuvent :
            </p>
            <ul>
                <li>L’oubli de son propre passé</li>
                <li>des sautes d’humeur ou un effacement, notamment dans des situations socialement ou mentalement éprouvantes.</li>
                <li>être désorientées sur le plan temporo-spatial</li>
                <li>avoir besoin d’aide pour choisir des vêtements adaptés à la saison ou à une occasion particulière ;</li>
                <li>des sautes d’humeur ou un effacement, notamment dans des situations socialement ou mentalement éprouvantes.</li>
            </ul>
            </div>
            <Link to='/Flipcard'> <button className="st-btn">Play game</button></Link>

            <Link to='/info'> <button className="st-btn">back</button></Link>
        </div>
    )
}
export default S2