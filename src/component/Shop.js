
import React from 'react'
import './shop.css'


class Shop extends React.Component {



    render() {

        return(
            <div>
           
            <h2 className="text-center">News</h2>
          
             
               
                 <img src="http://pekkaparviainen.com/kutsu.jpg" alt="" width={"100%"} height={500}/>
             

                <hr></hr>
               <div className="oma">
                <div className="row no-gutters">
                <div className="col-sm-12">
                  <h1 className="w3-center">Web Shops</h1><br></br>
                  <h4>HELSINKI</h4>
                  <a className="w3-text-grey" href="http://bronda.fi/taiteilija/148/">GALLERY BRONDA</a> <br></br>
                  <a className="w3-text-grey" href="https://www.taidegraafikot.fi/taiteilija/parviainen-pekka/">GALLERY G</a> <br></br>
                  <a className="w3-text-grey" href="http://www.taidelainaamo.fi/public/go.php?action=works&filter=artist_id%3D17447">TAIDELAINAAMO</a>
                  <br></br>
                
                  <br></br>
                
              
                
                  <h4>JÄRVENPÄÄ:</h4>
                  <a className="w3-text-grey" href="http://www.taikka.fi/">TAIDELAINAAMO</a>
                   <br></br>
                   <br></br>
                  
                  <h4>KOUVOLA:</h4>
                  <a className="w3-text-grey" href="http://www.taidetupapikkuselma.com/taiteilijat.php?lh_ow=220&t_rr=1230&t_vv=hZ55k770&lcfd=10&r_mm=wpx_BB_tt550&txt=KHL_mm987440">TAIDETUPA PIKKUSELMA</a>
                  <br></br>
                  <br></br>
                 
                  <h4>WEB:</h4>
                  <a className="w3-text-grey" href="https://taiko.fi/artists/pekka-parviainen">TAIKO</a>
                  <br></br>
                  <a className="w3-text-grey" href="https://holvi.com/shop/grafia13/">GRAFIA 13</a>

                 
                </div>
                
               
              
                </div>
            </div>
            </div>
                 
               
            
            
        

        )
    }
}

export default Shop;