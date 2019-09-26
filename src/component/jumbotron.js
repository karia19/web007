

import React from 'react'
import '../component/Jumbo.css'

import kuva1 from '../imagesFronpage/illusio_1000.jpg'
import kuva2 from '../imagesFronpage/mimesis_1000-2.jpg'
import kuva3 from '../imagesFronpage/Immersio_w1-2.jpg'
import kuva4 from '../imagesFronpage/natura_borealis_1000-2.jpg'
import '../component/Jumbo.css'


const Jumbo = () => {

    

    const s = {
     
       position: 'relative',
      'background-position': 'center center'
      
      


    }


    /*
      <div className="jumbotron">

         <br></br>
         <br></br>
         <br></br>
        
        
        
     </div>
     */

    return(
        <div id="image" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#image" data-slide-to="0" class="active"></li>
          <li data-target="#image" data-slide-to="1"></li>
          <li data-target="#image" data-slide-to="2"></li>
          <li data-target="#image" data-slide-to="3"></li>

        </ol>
        
    
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={kuva3} style={s}  alt=""  height="640px" />
          </div>
          <div className="carousel-item">
            <img src={kuva2} alt="" style={s}  />
          </div>
          <div className="carousel-item">
            <img src={kuva1} alt="" style={s} />
          </div>
          <div className="carousel-item">
            <img src={kuva4} alt="" style={s} />
          </div>
          
        </div>
        
       
        <a className="carousel-control-prev" href="#image" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#image" data-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span class="sr-only">Next</span>

        </a>
      </div>
    )
}

export default Jumbo;