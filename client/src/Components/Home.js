import react from 'react'
import img from '../img/background1.jpg'
import img2 from '../img/old-person-playing.jpg'
import old from '../img/icons/old.png'
import cursor from '../img/icons/CURSOR.png'
import alz from '../img/icons/alz.png'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import img3 from '../img/img3.jpg'
function Home(){

    return(
        <div>


           <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={img3}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img}
      alt="Second slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            <div className="section-two">

              <h2>
              "L'Alzheimer ... C'est un mal qui vole les coeurs, les ames,et les souvenirs"
              </h2>
              <h4>Nicolas Sparks</h4>
            {/* <div class="wrapper">
    <div class="typing-demo">
      60 mille cas atteints d’Alzheimer enregistrés en Tunisie en 2018
    </div>
</div> */}

            </div>


            <div className="section-three">
                <div className="container">
                    <div className="col1">
                        <img src={alz}></img>
                        <h2>Qu’est-ce que la maladie 
                            d’Alzheimer?</h2>
                        <h3></h3>
                        <Link to='/info'><h4 className="cole1"><a href="#"  className="blanc">En savoir plus sur l'Alzheimer</a></h4></Link>
                    </div>
                    <div className="col2">
                        <img src={old}></img>
                        <h2>Rejoignez notre blog</h2>
                        <h3></h3>
                      <Link to='Signup'>  <h4 className="cole2"> <a href="#"  className="blanc">S'inscrire</a></h4></Link>
                    </div>

                    <div className="col3">
                        <img src={cursor}></img>
                        <h2>
                             Que Faire Lorsqu'un Proche est en Perte d'autonomie ?
                        </h2>
                        <h3></h3>
                       <Link to='about'> <h4 className="cole3"><a href=""  className="blanc"> Numéro utiles </a></h4></Link>
                    </div>
                </div>
                    
                    </div>



                

            </div>

        
    )
}
export default Home