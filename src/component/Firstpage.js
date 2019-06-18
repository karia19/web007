
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


import Shop from '../component/Shop';



class Firstpage extends React.Component {

    render() {

  
       
       

        return(
        <div className="">
        <br>
        </br>
         <div  >
            <div>
                <img src={kuva1} alt="" width={"100%"} height={400} mode='fit' />  
            </div>
        </div>    
        <div className="oma">
        <div className="row no-gutters">
            <div className="col-sm-6">
               <a href="/kuvatEka">
                 <img  width={"100%"} height={300} src={pekka2}  alt="Null" />
               
                 <div className="bottom-left">Bottom Left</div>
               </a>
              
           </div>
             <div className="col-sm-6">
             <a href="/kuvatToka">
               <img  width={"100%"} height={300} alt="toka" src={pekka1}/>
             </a>
        </div>
        </div>
             <div>
             <a href="/jotain" >
               <img src={kuva4} alt="" width={"100%"} height={350} />
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
            <Contact />  

         </div>    
    
           
        )
    }
    


}

export default Firstpage;