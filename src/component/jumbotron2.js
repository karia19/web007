import React from 'react'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { } from 'semantic-ui-react'


import kuva1 from '../imagesFronpage/1.jpg'
import kuva2 from '../imagesFronpage/2.jpg'
import kuva3 from '../imagesFronpage/3.jpg'
import kuva4 from '../imagesFronpage/4.jpg'
import kuva5 from '../imagesFronpage/5.jpg'

const Jumbo2 = () => {
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      
    };

    return(
     
       <Slider className="jumbo2" {...settings}>
       <div>
         <img src={kuva1} width="100%" style={{maxHeight: "550px", "background-size": "cover",  position: 'relative',
         'background-position': 'center center'}} alt=""></img>
       </div>
       <div>
       <img src={kuva2} width="100%" style={{maxHeight: "550px", "background-size": "cover",  position: 'relative',
       'background-position': 'center center'}} alt=""></img>
      </div>
      <div>
       <img src={kuva3} width="100%" style={{maxHeight: "550px", "background-size": "cover",  position: 'relative',
       'background-position': 'center center'}} alt=""></img>
      </div>
      <div>
        <img src={kuva4} width="100%" style={{maxHeight: "550px", "background-size": "cover",  position: 'relative',
         'background-position': 'center center'}} alt=""></img>
      </div>
      <div>
      <img src={kuva5} width="100%" style={{maxHeight: "550px", "background-size": "cover",  position: 'relative',
       'background-position': 'center center'}} alt=""></img>
     </div>
     
       
       </Slider>
      
    )
}


export default Jumbo2;