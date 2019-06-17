import React from 'react';
import './nav.css';
import FirstPageContent from './Firstpage';
import { Container } from 'semantic-ui-react';

class Nav extends React.Component {




    render() {

        const openNav = () => {
            document.getElementById("myNav").style.height = "100%"
        }
        const closeNav = () => {
            document.getElementById("myNav").style.height = "0%"
        }
        const sty = {
          fontsize: "40px",
          cursor: "pointer",
          display: "inline",
         
         
          float: "left"


       }
       return (
        
          <div className="container">
             <div className="testi"> 
               <div id="myNav" className="overlay">
               <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          
              <div className="overlay-content">
               <a href="/">Home</a>
               <a href="/portfolio">Portfolio</a>
               <a href="/cv">CV</a>
               <a href="/contact">Contact</a>
             </div>
           </div>
           
           <div className="navbaar">
              <h2 className="hoo2"  >Firman nimi  <span className="navButton" style={sty} onClick={openNav}>&#9776;</span> </h2>
              
           </div>
           </div>
          
         </div>
        
           

        )
    }
}
export default Nav;

