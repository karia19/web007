
import React from 'react'

import kuva1 from '../grafiikka/existentialist.jpg'
import kuva2 from '../grafiikka/gaia.jpg'
import kuva3 from '../grafiikka/here_today.jpg'
import kuva4 from '../grafiikka/illusio.jpg'
import kuva5 from '../grafiikka/illusionist 19.04.35.jpg'
import kuva13 from '../grafiikka/pandeon.jpg'
import kuva14 from '../grafiikka/Pekka_Parviainen_Bios_2012.jpg'
import kuva15 from '../grafiikka/pekka_parviainen_interdependence_w.jpg'
import kuva16 from '../grafiikka/Pekka_Parviainen_Luonnontila_2013.jpg'
import kuva17 from '../grafiikka/pekka_parviainen_my_favourite_w.jpg'
import kuva19 from '../grafiikka/samsara.jpg'
import kuva20 from '../grafiikka/sole.jpg'
import kuva21 from '../grafiikka/souvenir_w.jpg'
import kuva22 from '../grafiikka/sykli.jpg'
import kuva23 from '../grafiikka/theia.jpg'
import kuva24 from '../grafiikka/verso.jpg'
import kaarme from '../grafiikka/IMGP0927.jpg'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'



import '../component/Lightbox.css'
import '../component/image1.css'


class Grafiikka extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            name: "",
            kuva: "",
            tiedot: "",
            
        }
    }
    showModal = pram =>  e =>  {
        this.setState({show: true, name: pram.nimi , kuva: pram.taulu, tiedot: pram.tiedot })
        
    }
    closeModal = () => {
      
            this.setState({show:false})
      
    }
    getName = () => {
        console.log("komment")
    }
   

    render() {
        const s = {
            width: "100%",
          

        }
        const ss = {
             width: "auto",
           
             height: "auto",
             
        }
        return(
            <div>
            {this.state.show && (
                <div>
                 <Lightbox
                    mainSrc={this.state.kuva}
                    imageTitle={this.state.name}
                  
                    imageCaption={this.state.tiedot}
                    onCloseRequest={() => this.setState({ show: false })}
                    animationDuration={200}
                    //imagePadding={55}
                 
                 
                 
                 />
             
                 </div>
               )
              }
              <br></br>
              <h3 className="text-center">Grafiikka</h3>
              <hr></hr>
              <ul className="works">
                 
                 <li><a href="/home/maalaukset">Maalaukset</a></li>
              </ul>
              <br></br>
               <div className="w3-row" id="myGrid" style={ss}>
               </div>
                <div className="row1">
                
                 <div className="column">
                 <img src={kuva4}  value="kksd"  onClick={this.showModal({taulu: kuva4 , nimi: "Illusio", tiedot:"2013	Litografia	72x100 cm"})} alt="noin" style={s} />
                 <img src={kuva16}  value="kksd"  onClick={this.showModal({taulu: kuva16 , nimi: "Luonnontila", tiedot:"2013 	Litografia	74x74 cm"})} alt="noin" style={s} />
                 <img src={kuva19}  value="kksd"  onClick={this.showModal({taulu: kuva19 , nimi: "Samsara", tiedot:"2010 	 Litografia  	63X73 cm"})} alt="noin" style={s} />
                 
                 <img src={kuva14}  value="kksd"  onClick={this.showModal({taulu: kuva14 , nimi: "Bios", tiedot:"2012	Litografia	74x74 cm"})} alt="noin" style={s} />
                 <img src={kuva2}  value="kksd"  onClick={this.showModal({taulu: kuva2 , nimi: "Gaia", tiedot:"2012	Litografia	74x74 cm"})} alt="noin" style={s} />
               
                 
                 
                </div>
                <div className="column">
                <img src={kuva20}  value="kksd"  onClick={this.showModal({taulu: kuva20 , nimi: "Sole", tiedot:"2014 	Litografia  	52x55 cm"})} alt="noin" style={s} />
                <img src={kuva22}  value="kksd"  onClick={this.showModal({taulu: kuva22 , nimi: "Sykli", tiedot:"2010  	Litografia  	74x74 cm"})} alt="noin" style={s} />
                   <img src={kuva23}  value="kksd"  onClick={this.showModal({taulu: kuva23, nimi: "Theia", tiedot:"2015 	Litografia 	42x38 cm"})} alt="noin" style={s} />

                   <img src={kuva5}  value="kksd"  onClick={this.showModal({taulu: kuva5 , nimi: "Illusionist", tiedot: "2015  	Litografia	  56x63 cm"})} alt="noin" style={s} />
                   <img src={kuva1}  value="kksd"  onClick={this.showModal({taulu: kuva1, nimi: "Existentialist	", tiedot:"2015  	Litografia  	56x63 cm"})} alt="noin" style={s} />
                   

                </div>
                <div className="column">
                  
                   <img src={kuva13}  value="kksd"  onClick={this.showModal({taulu: kuva13, nimi: "Pandeon", tiedot:"2018	Lyijykynä	50x80 cm"})} alt="noin" style={s} />
                   <img src={kuva17}  value="kksd"  onClick={this.showModal({taulu: kuva17, nimi: "My favorite things", tiedot:"2018	Lyijykynä 	50x80 cm"})} alt="noin" style={s} />

                   <img src={kuva15}  value="kksd"  onClick={this.showModal({taulu: kuva15, nimi: "Interdependence", tiedot:"2018	Lyijykynä 	94x112 cm"})} alt="noin" style={s} />
                   <img src={kuva3}  value="kksd"  onClick={this.showModal({taulu: kuva3, nimi: "Here Today II", tiedot:"2018	Lyijykynä 	50x80 cm"})} alt="noin" style={s} />
                   <img src={kuva21}  value="kksd"  onClick={this.showModal({taulu: kuva21, nimi: "Souvenir", tiedot:"2018	Lyijykynä	50x80 cm"})} alt="noin" style={s} />
                  
                   <img src={kaarme}  value="kksd"  onClick={this.showModal({taulu: kaarme, nimi: "Mimesis", tiedot:"2019	Lyijykynä	60x70 cm"})} alt="noin" style={s} />
                   <img src={kuva24}  value="kksd"  onClick={this.showModal({taulu: kuva24, nimi: "Verso" ,tiedot:"2018	Lyijykynä 	83x107 cm"})} alt="noin" style={s} />
             </div>
            </div>
            <br></br>
            </div>



        )
    }
}

export default Grafiikka;