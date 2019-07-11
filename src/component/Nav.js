import React from 'react';
import './nav.css';

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
               <a href="/">Pekka Parviainen</a>
               <a href="/portfolio">Portfolio</a>
                <div className="works2">
                   <a href="/maalaukset">Maalaukset</a>
                   <a href="/grafiikka">Grafiikka</a>
                   
               </div>
               <a href="/cv">CV</a>
               <a href="/contact">Contact</a>
             </div>
           </div>
           
           <div className="navbaar">
              <h2 className="hoo2"><a href="/">Firman nimi</a>  <span className="navButton" style={sty} onClick={openNav}>&#9776;</span> </h2>
              
           </div>
           </div>
          
         </div>
        
           

        )
    }
}
export default Nav;

