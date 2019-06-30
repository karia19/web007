
import React from 'react'
import './webShop.css'

class WebShop extends React.Component {



    render() {
        const s = {
            widht: "100%",
            
        }
        const e = {
          "font-size":"15px" 
        }
         
        return (
          
            <div className="webShop">
           
      
            <h1 className="otsikko">Web Shop</h1>
            <br></br>
           
            <div className="row">
            <div className="col-sm-3">
                <h2>Taulut</h2>
                <p>Ota yhteyttä sinua kiinostavasta taulusta.
                 Hinnat eivät sisällä matkakuluja</p>
                <h4>Grafiikka</h4>
                <hr></hr>
                <h4>Maalaukset</h4>
                <hr></hr>
                <div className="oma2">
                <div className="row no-gutters">
                <div className="col-sm-12">
                  <h1 className="w3-center">Shops</h1><br></br>
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

            
            <div className="col-sm-3">
            <div className="card" style={s}>
              <img className="card-img-top" src="http://localhost:3003/files/etusivuEka" alt="Card image" />
              <div className="card-body">
              <h4 className="card-title">Taulu yksi</h4>
              <p className="card-text">Some example text.</p>
              <hr></hr>
              <p>100 €</p> 
              
            
           </div>
           </div>
           </div>
           
           <div className="col-sm-3">
           <div className="card" style={s}>
             <img className="card-img-top" src="http://localhost:3003/files/etusivuTokaVasen" alt="Card image" />
             <div className="card-body">
             <h4 className="card-title">John Doe</h4>
             <p className="card-text">Some example text.</p>
          </div>
          </div>
          </div>
          
          <div className="col-sm-3">
          <div className="card" style={s}>
            <img className="card-img-top" src="http://localhost:3003/files/etusivuEka" alt="Card image" />
            <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
         </div>
         </div>
           </div>
        </div>
        <br></br>
           <br></br>
        </div>
        
       
        
          
          
        )
    }
}


export default WebShop;