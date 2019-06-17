import React from 'react'
import { Card } from 'semantic-ui-react';
import profile from '../images/AboutMe.jpg'
import testiKuva from'../images/first.jpg'
import testiKaksi from '../images/k1.jpg';
import './AboutMe.css';

class AboutMe extends React.Component {



    render() {
        const color2 = {
           "padding-left": "px"
            
        }

        const color = {
            "background-color": "brown",
            display:"block"
        }

        return(

          
       <div className="">
        <div className="row no-gutters">
            <div className="col-sm-6 ">
            <br></br>
            <div className="bioText">
              <h2 class="w3-wide">About Me</h2>
              <p class="w3-opacity"><i>We love music</i></p>
              <p class="w3-justify"> 
              Pekka Parviainen on helsinkiläinen kuvataiteilija jonka tuotannossa keskeiset teemat ovat luonto itsessään ja ihmisen luontosuhde. Monissa teoksissa luontoaiheet ovat lähtökohtana, mutta aiheen käsittely on hyvin vapaata ja teos vaikuttaa lähes abstraktilta. Parviainen työskentelee pääasiassa taidemaalarina, mutta grafiikalla on kautta linjan ollut tärkeä asema hänen tuotannossaan. Grafiikan tekeminen on vaikuttanut suuresti myös maalauksiin ja välillä erilaiset tekniikat lähes sulautuvat toisiinsa.</p>
              </div>
           
            </div>
            <div className="col-sm-6">
                <img src="http://pekkaparviainen.com/contactkuva.jpg" alt="" style={color2} width={"100%"} height={600} />
       
       </div>
       </div>
      
       
       </div>
     

        )
    }
}


export default AboutMe;