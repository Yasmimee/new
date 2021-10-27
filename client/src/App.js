// Components
import Navbar from './Components/navbar';
import Home from './Components/Home';
import { Route } from 'react-router';
import Signin from './Components/SignInSignUp/Signin';
import Signup from './Components/SignInSignUp/signup';
import Info from './Components/info';
import About from './Components/about';
import Lost from './Components/Lost/lost'
import S1 from './Components/stages/stage1';
import S2 from './Components/stages/stage2';
import S3 from './Components/stages/stage3';
import User from './Components/stages/user';
import List from './Components/Lost/lostList';
import Footer from './Components/Footer';
import PostList from './Components/Post/postList'
import Post from './Components/Post/post';

import FlipCard from './Components/Games/FlipCard';


//CSS
import './app.css';
import './CSS/Forum.css'
import './CSS/Home.css'
import './CSS/Info.css'
import './CSS/Nav.css'
import './CSS/SignInUp.css'
import './CSS/User.css'
import './CSS/Lost.css'
import './CSS/About.css'
import './CSS/Footer.css'
import './CSS/FlipCard.css'
import './CSS/stage.css'





function App() {

  return (
    <div className="App">
     <Navbar/>
     
     <Route exact path='/' component={Home}/>
     <Route exact path='/Signin' component={Signin}/>
     <Route exact path='/Signup' component={Signup}/>
     <Route exact path= '/Info' component={Info}/>
     <Route exact path= '/About' component={About}/>
     <Route exact path= '/Lost' component={List}/>
     <Route exact path='/Stage1' component={S1}/>
     <Route exact path= '/Stage2' component={S2}/>
     <Route exact path= '/Stage3' component={S3}/>
     <Route exact path='/addlost' component={Lost}/>
      <Route exact path='/forum'component={PostList} /> 
      <Route path='/addpost' component={Post}/>
      <Route path='/flipcard' component={FlipCard}/>
      
      {/* <Private path='/forum'/> */}
    <Footer/>
    </div>
  );
}

export default App;
