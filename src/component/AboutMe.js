import React from 'react'

import image1 from '../imagesFronpage/potrcolor1.jpg'

import './AboutMe.css';

class AboutMe extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fin: true
        }
    }
    vaihada = () => {
       this.setState({ fin: false })
    }



    render() {
        const color2 = {
           "paddingLeft": "px"
            
        }
       
        const Language = () => {
            if(this.state.fin){
                return(
                    <div>
                    <p className="w3-opacity"><i>Fi</i></p>
                    <p className="w3-justify"> 
                     Pekka Parviainen on helsinkiläinen kuvataiteilija jonka tuotannossa keskeiset teemat ovat luonto itsessään ja ihmisen luontosuhde. <br></br>Monissa teoksissa luontoaiheet ovat lähtökohtana, mutta aiheen käsittely on hyvin vapaata ja teos vaikuttaa lähes abstraktilta. Parviainen työskentelee pääasiassa taidemaalarina, mutta grafiikalla on kautta linjan ollut tärkeä asema hänen tuotannossaan. <br></br>Grafiikan tekeminen on vaikuttanut suuresti myös maalauksiin ja välillä erilaiset tekniikat lähes sulautuvat toisiinsa.</p>
                    </div> 
                     )
            } else {
                return(
                <div>    
                <p className="w3-opacity"><i>En</i></p>
                <p className="w3-justify"> 
                Pekka Parviainen is a Helsinki-based painter and graphic artist. He works with oil and tempera painting and lithographic techniques.<br></br>
  
                The two main themes in Parviainen's work are Nature itself and man's relationship to it. Nature is seen as both fragile and powerful at the same time.<br></br> For Parviainen, the natural environment provides an endless source of forms as a starting point for his art. The subject is often treated freely and the level of detail is reduced for clarity.
                 </p>
                 </div>
                )
            }
        }

      
        return(

          
       <div className="">
        <div className="row no-gutters">
            <div className="col-sm-6 ">
            
            <div className="bioText">
              <h2 className="w3-wide">About Me</h2>
             
              <Language />
             
              <button type="button" class="btn btn-sm-dark" onClick={this.vaihada} >
                 En
              </button>
               </div>
            </div>
            <div className="col-sm-6">
                <img src={image1} alt="" style={color2} width={"100%"}  />
       
       </div>
       </div>
       <hr></hr>
      
       
       </div>
     

        )
    }
}


export default AboutMe;