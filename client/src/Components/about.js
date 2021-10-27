
import React from 'react'
import { Card } from 'semantic-ui-react'
import Assoc from '../img/Tunisia.jpg'
import Car from '../img/car.jpg'
import resort from '../img/2.jpg'
import doctor from '../img/doctor.jpg'
import care from '../img/care.jpg'
function About ({}) {
    
    return(
      
        <div className="About">
        <h2>Trouvez de l’aide près de chez vous</h2>
        <h3>Nous ne pouvons pas vous dire quoi faire, mais nous pouvons mettre à votre disposition des ressources qui vous aideront à 
          prendre des décisions éclairées, pour vous comme pour la personne dont vous prenez soin.</h3>


         <div className='about-container'>
    <div className='grid'>
     {/* <a>
      <Icon name='user' />
     </a> */}
      <a href="https://alzheimertunisie.blogspot.com/"> <Card
        image={Assoc}
        header='Alzheimer Tunisie'
        meta='Association, à but non lucratif'
         description="+216 98 61 39 76"
    
       /></a>

    </div>
    <div className='grid'>
     {/* <a>
      <Icon name='user' />
     </a> */}
      <a href="carthagea.fr"> <Card
        image={Car}
        header='Carthagea'
        meta='Ehpad'
        description=" +216 31 521 749"
       /> </a>

    </div>
    <div className='grid'>
     {/* <a>
      <Icon name='user' />
     </a> */}
       <a href="http://www.resortmedical.net/"> <Card
        image={care}
         header=" RESORT MEDICAL"
        meta="maison de retraite"
        description="+216 26 25 06 68"
    
       /></a>

    </div>
    <div className='grid'>
     {/* <a>
      <Icon name='user' />
     </a> */}
       <Card
        image={care}
        header="Dar Baba"
        meta="Maison de retraite"
        description='+216 71 890 900'
    
       />

    </div>
  
    <div className='grid'>

      <a href="facebook.com/briki.hatem"> <Card
        image={doctor}
        header='Dr Hatem BRIKI'
        meta='Gériatre'
        description=" +216 71 981 485"
       /> </a>

    </div>
    <div className='grid'>

<a href="http://dr-slimbennessib.docvadis.fr/"> <Card
  image={doctor}
  header='Dr Slim Ben Nessib  '
  meta='Gériatre'
  description=" +216 97 444 200"
 /> </a>

</div>


</div>
      </div>
      
    )
}
export default About