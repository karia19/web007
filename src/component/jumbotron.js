

import React from 'react'
import '../component/Jumbo.css'

import kuva1 from '../imagesFronpage/illusioWEB.jpg'
import kuva2 from '../imagesFronpage/mimesis_1000.jpg'
import kuva3 from '../imagesFronpage/Immersio_w1.jpg'
import kuva4 from '../imagesFronpage/natura_borealis_1000.jpg'
import '../component/Jumbo.css'


const Jumbo = () => {

    let h
    console.log(window.innerHeight)
    if (window.innerHeight > 900 ) {
        h = window.innerHeight - 500
    } else if (window.innerHeight < 400) {
        h = window.innerHeight + 90
    } else if (window.innerHeight > 670){
      h = window.innerHeight -100
    }
    
    else {
        h = window.innerHeight - 230
    }
    

    const s = {
      'background-size': 'cover',
       position: 'relative',
      'background-position': 'center center',
      
      


    }


    /*
      <div className="jumbotron">

         <br></br>
         <br></br>
         <br></br>
        
        
        
     </div>
     */

    return(
        <div id="demo" className="carousel slide" data-ride="carousel">

        
    
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={kuva3} style={s} alt="" width="100%" height={h} />
          </div>
          <div className="carousel-item">
            <img src={kuva2} alt="" style={s} width="100%" height={h} />
          </div>
          <div className="carousel-item">
            <img src={kuva1} alt="" style={s} width="100%" height={h} />
          </div>
          <div className="carousel-item">
            <img src={kuva4} alt="" style={s} width="100%" height={h} />
          </div>
          
        </div>
        
       
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    )
}

export default Jumbo;