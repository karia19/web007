
import React from 'react'
import './shop.css'



class Shop extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          kuva: ''
        }
    }

    
   



    render() {
        
        /*
        http://pekkaparviainen.com/kutsu.jpg
        */


        return(
            <div>
           
               <div className="oma">
                <div className="row no-gutters">
                <div className="col-sm-12">
                <h2 className="omatexti"><a href="/home/webshop">Gallery Contacts</a></h2>
                <br></br>
                  <h4>Helsinki</h4>
                  <a className="w3-text-grey" href="http://bronda.fi/taiteilija/148/">Gallery Bronda</a> <br></br>
                  <a className="w3-text-grey" href="https://www.taidegraafikot.fi/taiteilija/parviainen-pekka/">Gallery G</a> <br></br>
                  <a className="w3-text-grey" href="http://www.taidelainaamo.fi/public/go.php?action=works&filter=artist_id%3D17447">Taidelainaamo</a>
                  <br></br>
                
                  <br></br>
                
              
                
                  <h4>Järvenpää</h4>
                  <a className="w3-text-grey" href="http://www.taikka.fi/">Taidelainaamo Taikka</a>
                   <br></br>
                   <br></br>
                  
                  <h4>Kouvola</h4>
                  <a className="w3-text-grey" href="http://www.taidetupapikkuselma.com/taiteilijat.php?lh_ow=220&t_rr=1230&t_vv=hZ55k770&lcfd=10&r_mm=wpx_BB_tt550&txt=KHL_mm987440">Taidetupa Pikkuselma</a>
                  <br></br>
                  <br></br>
                 
                  <h4>Web</h4>
                  <a className="w3-text-grey" href="https://taiko.fi/artists/pekka-parviainen">Taiko</a>
                  <br></br>
                  <a className="w3-text-grey" href="https://holvi.com/shop/grafia13/">Grafia 13</a>

                 
                </div>
                
               
              
                </div>
                
            </div>
            </div>
                 
               
            
            
        

        )
    }
}

export default Shop;