import React , {Component} from 'react';
import './App.css';
import NavBar from './component/Nav';

import Footer from './component/Footer'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import FirstPage from './component/Firstpage';
import Images1 from './component/Images1';
import User from './userInterface/user'
import { connect } from 'react-redux'
import { logincontent } from './reducer/loginReducer'
import { messaContent } from './reducer/messageReducer'
import Contact from './component/Contact';
import WebShop from './component/WebShop';
import Maalaukset from './component/Maalaukset'
import Grafiikka from './component/Grafiikka';

import ModalTest from './component/ModalTest';
import Cv from './component/Cv'
import Login from './userInterface/Login'



class App extends Component {


  render() {
    console.log(this.props.user)
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




           <Route path="/userinterface" render = {() =>
            this.props.user
            ? <Redirect to="/user" />
            : <Redirect to="/userinterface" />
            } />

            <Route path="/userinterface" render={() => <Login />} />
            <Route path="/user" render={() => <User />} />
          
       
        <Footer />
       
       </Router>
        
   </div>
     
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    message: state.message
  }
}


export default connect (
  mapStateToProps, {
    logincontent, messaContent
  },
) (App)
