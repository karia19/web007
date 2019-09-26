
import React from 'react'
import './FirstPage.css'
import AboutMe from '../component/AboutMe';
//import Jumbo from '../component/jumbotron'
import Jumbo2 from '../component/jumbotron2'

import Shop from '../component/Shop';



class Firstpage extends React.Component {

    render() {

      /*
       <div>
            <div>
            <img className="imageC" width={"100%"} src={nimmari} alt="" />
            </div>
        </div>    
        
        <div className="oma">
        <div className="row no-gutters">
          
         
            <div className="col-sm-6">
           
               <a href="/home/grafiikka">
                 <img  width={"100%"}  src={testi1}  alt="Null" />
               
                
               </a>
          
           </div>
             <div className="col-sm-6">
           
             <a href="/home/maalaukset">
               <img  width={"100%"}  alt="toka" src={testi2}/>
             </a>
           
        
        </div>
        </div>
        <br></br>
            
        </div>   
            
       

            <div>
            
            <h3 className="omaLinkki"><a href="/home/portfolio">Portfolio</a></h3>
            <br></br>
            <a href="/home/portfolio" >
              <img src={testi3} alt="" width={"100%"} mode="fit"  />
            </a>
              
            </div>

            
           


      */

  
       
       

        return(
        <div className=""> 
        
        <Jumbo2 />
         
        

       

         
           

            <br></br>
            <br></br>
            
            <AboutMe />
            
            <br></br>
            <div className="box">
                <h3 className="text-center">News</h3>
                <img src="http://pekkaparviainen.com/api/files/news" alt="" width={"100%"}
                style={{maxHeight: "550px", "background-size": "cover",  position: 'relative',
                'background-position': 'center center'}}
                />

            </div>
            <br></br>
            <Shop />
            <br></br>
            
           

         </div>    
    
           
        )
    }
    


}

export default Firstpage;