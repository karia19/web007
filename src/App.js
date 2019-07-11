import React , {Component} from 'react';
import './App.css';
import NavBar from './component/Nav';

import Footer from './component/Footer'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import FirstPage from './component/Firstpage';

import Contact from './component/Contact';
import WebShop from './component/WebShop';
import Maalaukset from './component/Maalaukset'
import Grafiikka from './component/Grafiikka';

import ModalTest from './component/ModalTest';
import Cv from './component/Cv';




class App extends Component {
  
  render() {
   

    return(
     <div className="container">
       <Router>

       
        <NavBar />
        

        
           <Route exact path="/" render={() => <FirstPage />} /> 
           <Route path="/portfolio" render= {() => <ModalTest />} />
           <Route path="/cv" render = {() => <Cv />} />
           <Route path="/contact" render = {() => <Contact />} />
           <Route path="/webshop" render = {() => <WebShop />} />

           <Route path="/maalaukset" render = {() => <Maalaukset />} />
           <Route path="/grafiikka" render = {() => <Grafiikka />} />

           <Route path="/testi" component={() => {
             window.location.href = 'http://localhost:3003/react';
             return null
           }} />




  
         
           
          
       
        <Footer />
       
       </Router>
        
   </div>
     
      
    )
  }
}

export default App;