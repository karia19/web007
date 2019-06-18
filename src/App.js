import React , {Component} from 'react';
import './App.css';
import NavBar from './component/Nav';

import Footer from './component/Footer'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import FirstPage from './component/Firstpage';
import Images1 from './component/Images1';

import TestLightbox from './component/LightBox'

import ModalTest from './component/ModalTest';

class App extends Component {


  render() {

    return(
     <div className="container">
       <Router>

       
        <NavBar />
        
        
        
           <Route exact path="/" render={() => <FirstPage />} /> 
           <Route path="/portfolio" render= {() => <ModalTest />} />
          
       
        <Footer />
       
       </Router>
        
   </div>
     
      
    )
  }
}


export default App;
