
import React from 'react'
import kuva1 from '../images/first.jpg'
import kuva2 from '../images/k1.jpg'
import kuva3 from '../images/last.jpg'
import kuva4 from '../images/33.jpg'

import './image1.css'
import { Container } from 'semantic-ui-react';



class Images1 extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        slideIndex: 1
      }
    }



    render() {
        
        const openModal = () => {
          document.getElementById("myModal").style.display = "block"
        }
        const closeModal = () => {
          document.getElementById("myModal").style.display = "none"
        }
        const plusSlide = (x) => {
          console.log(x)

        }

        const s = {
            width: "100%"

        }
        const ss = {
            "margin-bottom": "100px"
        }
       
        
        return (
            <div>
          
               <h3 className="text-center">Portfolio</h3>
               <div className="w3-row" id="myGrid" style={ss}>
               </div>
               <div className="row1">
                  <div className="column">
                    <img src="http://pekkaparviainen.com/ornithology2.jpg" onClick={() => openModal > this.setState({slideIndex: 1})} style={s} className="hower-shadow" alt="null" />
                    <div class="middle">
                         <div class="text">
                         <h6 className="w3-wide">Ornithology II</h6>
                         <p class="w3-opacity"><i> 2017  Tempera on canvas  100x130 cm</i></p>
                         </div>
                    </div>
                    <img src="http://pekkaparviainen.com/ornithology1_web.jpg" style={s} alt="null"/>
                    <img src="http://pekkaparviainen.com/Pekka_Parviainen_They_see_us_3.jpg" style={s} alt="null"/>
                    <img src="http://pekkaparviainen.com/They_see_us1.jpg" style={s} alt="null"/>

                  </div>
                  <div className="column">
                    <img src="http://pekkaparviainen.com/they_see_us_IV_web.jpg" style={s} alt="null"/>
                    <img src="http://pekkaparviainen.com/vista_II_web.jpg" style={s} alt="null"/>
                    <img src="http://pekkaparviainen.com/Pekka_Parviainen_They_see_us_3.jpg" style={s} alt="null"/>
                    <img src="http://pekkaparviainen.com/invertebrate_web.jpg" style={s} alt="null"/>

                  </div>
                  <div className="column">
                    <img src="http://pekkaparviainen.com/invertebrate_web.jpg" style={s} alt="null"/>
                    <img src="http://pekkaparviainen.com/verde_I.jpg" style={s} alt="null"/>
                    <img src="http://pekkaparviainen.com/Verde_II_web.jpg" style={s} alt="null"/>
                    <img src="http://pekkaparviainen.com/diversity_web.jpg" style={s} alt="null"/>
                      
                  </div>
              
               </div>
               <br></br>
           
              </div>
            
            
           
       
            
          
        )
    }
}


export default Images1;