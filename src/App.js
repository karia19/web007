import React , {Component} from 'react';
import './App.css';
import NavBar from './component/Nav';

import Footer from './component/Footer'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import FirstPage from './component/Firstpage';

import Contact from './component/Contact';
import WebShop from './component/WebShop';
import Maalaukset from './component/Maalaukset'
import Grafiikka from './component/Grafiikka';
import Cv from './component/Cv';
import reactGa from 'react-ga';





class App extends Component {
  
  componentDidMount(){
    reactGa.initialize('UA-144482746-1')
    reactGa.pageview(window.location.pathname);
  }
  
  render() {
   
   

 
   

    return(
     <div className="container1">
       <Router>

       
        <NavBar />
        

        
           <Route exact path="/home" render={() => <FirstPage />} /> 
         
           <Route path="/home/cv" render = {(props) => <Cv {...props} fin={true} />} />
           <Route path="/home/contact" render = {() => <Contact />} />
           <Route path="/home/webshop" render = {() => <WebShop />} />

           <Route path="/home/maalaukset" render = {() => <Maalaukset />} />
           <Route path="/home/grafiikka" render = {() => <Grafiikka />} />

       
        <Footer />
       
       </Router>
        
   </div>
     
      
    )
  }
}

export default App;