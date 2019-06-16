import React , {Component} from 'react';
import './App.css';
import NavBar from './component/Nav';
import { Container } from 'semantic-ui-react';
import Aboutme from './component/AboutMe';
import Contact from './component/Contact'
import Footer from './component/Footer'


class App extends Component {


  render() {

    return(
     <div className="container">
         <NavBar />
         <Aboutme />
         <Contact />
         <Footer />
   </div>
     
      
    )
  }
}


export default App;
