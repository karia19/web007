
import React,{ useState , useEffect } from 'react'
import './webShop.css'
import WebShopItems from './webShopItems';
import AxiosService  from '../service/images'

const WebShop = () => {
        const [ kuvat, setKuvat ] = useState([])


        useEffect( ()  => {
    
          (async () => {
           
           const res = await AxiosService.getImages()
           
           setKuvat(res)
           //const loggUser = window.localStorage.getItem('loginForInterface')
          
          })();
        
        }, [])

        console.log(kuvat)

        
        


        
         
        return (
          
            <div className="webShop">
           
      
            <h2 className="text-center">Web Shop</h2>
           
            <br></br>
           
            <div className="oma3">
           
               
                <p>Ota yhteyttä sinua kiinostavasta taulusta.
                 Hinnat eivät sisällä matkakuluja</p>
               
               
            
           
            </div>
            <hr></hr>
            <div className="row">
            {kuvat.map(kuvat  =>  
              <div className="col-sm-4">

              <WebShopItems key={kuvat._id} kuvat={kuvat} />
              </div>
             )}

            </div> 
           
              
            
        
       
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
          <a className="w3-text-grey" href="http://www.taikka.fi/">TAIDELAINAAMO TAIKKA</a>
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


        <br></br>
        <br></br>
        </div>
        
       
        
          
          
        )
  }



export default WebShop;