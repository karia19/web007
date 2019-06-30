
import React from 'react'
import './FirstPage.css'
import kuva1 from '../images/first.jpg'
import kuva2 from '../images/k1.jpg'
import kuva3 from '../images/last.jpg'
import kuva4 from '../images/33.jpg'
import AboutMe from '../component/AboutMe';
import Contact from '../component/Contact'

import pekka1 from '../images/pekka1.jpg'
import pekka2 from '../images/pekka3.jpg'

import image2 from '../imagesFronpage/2.jpg'
import image3 from '../imagesFronpage/3.jpg'
import image4 from '../imagesFronpage/4.jpg'
import image5 from '../imagesFronpage/5.jpg'


import Shop from '../component/Shop';



class Firstpage extends React.Component {

    render() {

  
       
       

        return(
        <div className="">
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
         <div  >
            <div>
                <img src={image5} alt="" width={"100%"} height={500} mode='fit' />  
            </div>
        </div>    
        <div className="oma">
        <div className="row no-gutters">
            <div className="col-sm-6">
               <a href="/grafiikka">
                 <img  width={"100%"} height={300} src={image2}  alt="Null" />
               
                
               </a>
           
              
           </div>
             <div className="col-sm-6">
             <a href="/maalaukset">
               <img  width={"100%"} height={300} alt="toka" src={image3}/>
             </a>
           
        </div>
        </div>
             <div>
             <a href="/portfolio" >
               <img src={image4} alt="" width={"100%"} height={400} />
             </a>
             </div>

            </div>   
            <br></br>
            <br></br>
            <AboutMe />
            <br></br>
            <br></br>
            <br></br>
            <Shop />
            <hr></hr>
            <Contact />  

         </div>    
    
           
        )
    }
    


}

export default Firstpage;