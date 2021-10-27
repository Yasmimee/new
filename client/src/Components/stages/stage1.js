import {Link} from 'react-router-dom'

function S1() {
    return(
        <div className="phase">
            <h2>stage 1</h2>
           
        
        <h4> Phase initial : Déficit cognitif léger</h4>

        <div className='phase-p'>
        <p> cette periode dure a peu de 2 a 4 ans 
        Les amis, la famille et les collègues commencent à remarquer certains troubles. Lors d’un examen médical approfondi, les médecins sont capables de déceler des troubles de la 
        mémoire ou de la concentration. Les difficultés courantes au phase 3 comprennent :
        </p>
        <ul>
            <li>Des difficultés manifestes à trouver le bon mot ou nom</li>
            <li>Avoir manifestement plus de difficulté à effectuer des tâches dans un contexte social ou professionne</li>
            <li>diffuculte a assumiler des nouvelle infor</li>
            <li>Oublier quelque chose juste après l’avoir lu</li>
            <li>Perdre ou ranger au mauvais endroit un objet de valeur</li>
        </ul>

        </div>
        <Link to='/info'> <button className="st-btn">back</button></Link>
        </div>
    )
}
export default S1