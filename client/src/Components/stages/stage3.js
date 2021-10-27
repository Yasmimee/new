import {Link} from 'react-router-dom'
function S3() {
    return(
        <div className="phase">
            <h2>stage 3</h2>
           
            <h4>la phase avancé:  Déficit cognitif très sévère</h4>
            <div className='phase-p'>
            <p>
            Au cours de la phase terminale de la maladie, la personne n’est plus capable d’interagir avec son entourage, d’avoir une conversation, ni de contrôler ses gestes. Elle peut encore prononcer des mots ou des phrases.

À ce stade, la personne requiert une aide importante pour les activités quotidiennes telles que manger ou aller aux toilettes. Elle peut ne plus être capable de sourire, de se tenir assise et de lever la tête. Ses réflexes deviennent anormaux. Ses muscles se raidissent.
 Elle commence à avoir des troubles de la déglutition.
            </p>
            
           </div>
         <Link to='/info'> <button className="st-btn">back</button></Link>
        </div>
    )
}
export default S3