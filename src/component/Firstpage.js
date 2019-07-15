
import React from 'react'
import './FirstPage.css'
import AboutMe from '../component/AboutMe';
import Contact from '../component/Contact'

import nimmari from '../imagesFronpage/logomusta.jpg'

import testi1 from '../imagesFronpage/illusioWEB.jpg'
import testi2 from '../maalaukset/natura_borealis (1).jpg'
import testi3 from '../imagesFronpage/gall123.jpg'



import Shop from '../component/Shop';



class Firstpage extends React.Component {

    render() {

  
       
       

        return(
        <div className="">
       
        
         <br></br>
         <div>
            <div>
            <img className="imageC" width={"100%"} src={nimmari} alt="" />
            </div>
        </div>    
        <div className="oma">
        <div className="row no-gutters">
          
            <div className="col-sm-6">
               <a href="/grafiikka">
                 <img  width={"100%"}  src={testi1}  alt="Null" />
               
                
               </a>
           
              
           </div>
             <div className="col-sm-6">
             <a href="/maalaukset">
               <img  width={"100%"}  alt="toka" src={testi2}/>
             </a>
           
        </div>
        </div>
        <br></br>
            
        </div>   
            
       

            <div>
            
            <h3 className="omaLinkki"><a href="/portfolio">Portfolio</a></h3>
            <br></br>
            <a href="/portfolio" >
              <img src={testi3} alt="" width={"100%"} mode="fit"  />
            </a>
              
            </div>
            <br></br>
            <div className="box">
                <h3 className="text-center">News</h3>
                <img src="http://localhost:3003/files/news" alt="" width={"100%"} />
            </div>
            
           

            <br></br>
            
            <AboutMe />
            <Shop />
            <hr></hr>
            <Contact />  

         </div>    
    
           
        )
    }
    


}

export default Firstpage;