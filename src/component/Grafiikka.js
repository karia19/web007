
import React from 'react'

import kuva1 from '../grafiikka/existentialist.jpg'
import kuva2 from '../grafiikka/gaia.jpg'
import kuva3 from '../grafiikka/here_today.jpg'
import kuva4 from '../grafiikka/illusio.jpg'
import kuva5 from '../grafiikka/illusionist 19.04.35.jpg'
import kuva6 from '../grafiikka/IMGP0219.jpg'
import kuva7 from '../grafiikka/IMGP0220.jpg'
import kuva8 from '../grafiikka/IMGP1013 copy.jpg'
import kuva9 from '../grafiikka/IMGP2336.jpg'
import kuva10 from '../grafiikka/IMGP2344.jpg'
import kuva11 from '../grafiikka/IMGP3217.jpg'
import kuva12 from '../grafiikka/IMGP7004.jpg'
import kuva13 from '../grafiikka/pandeon.jpg'
import kuva14 from '../grafiikka/Pekka_Parviainen_Bios_2012.jpg'
import kuva15 from '../grafiikka/pekka_parviainen_interdependence_w.jpg'
import kuva16 from '../grafiikka/Pekka_Parviainen_Luonnontila_2013.jpg'
import kuva17 from '../grafiikka/pekka_parviainen_my_favourite_w.jpg'
import kuva18 from '../grafiikka/Pekka_Parviainen_Stamina_2017.jpg'
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
      
        const grafiikka = [
            {
                kuva: kuva16,
                nimi: "natura_borelias",
                tiedot: "2017  Tempera on panel  81x61 cm"
               

            },
            {
                kuva: kuva5,
                nimi: "Illusionist",
                tiedot: "2018"
                
            },
            {
                kuva: kuva1,
                nimi: "Existentialist",
                tiedot: "20333"
               
            },
            {
                kuva: kuva21,
                nimi: "ommsas",
                tiedot: "oosdoosd"
                
            },
            {
                kuva: kuva24,
                nimi: "Verso",
                tiedot: "oosdoosd"
                
            },
            {
                kuva: kuva8,
                nimi: "ommsas",
                tiedot: "oosdoosd"
            
            },
            {
                kuva: kuva10,
                nimi: "ommsas",
                tiedot: "oosdoosd"
                
            },
            {
                kuva: kuva11,
                nimi: "ommsas",
                tiedot: "oosdoosd"
                
            },

        ]
        
          



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
                 
                 
                 
                 />
             
                 </div>
               )
              }
              <br></br>
              <h3 className="text-center">Grafiikka</h3>
              <hr></hr>
              <ul className="works">
                 <li><a href="/portfolio">Portfolio</a></li>
                 <li><a href="/maalaukset">Maalaukset</a></li>
              </ul>
              <br></br>
               <div className="w3-row" id="myGrid" style={ss}>
               </div>
                <div className="row1">
                
                 <div className="column">
                 <img src={kuva4}  value="kksd"  onClick={this.showModal({taulu: kuva4 , nimi: "Illusio", tiedot:"2013	Litografia	72x100 cm"})} alt="noin" style={s} />
                 <img src={kuva14}  value="kksd"  onClick={this.showModal({taulu: kuva14 , nimi: "Bios", tiedot:"2012	Litografia	74x74 cm"})} alt="noin" style={s} />
                 <img src={kuva18}  value="kksd"  onClick={this.showModal({taulu: kuva18 , nimi: "Stamina", tiedot: "2017  	Litografia 	 29x43 cm"})} alt="noin" style={s} />
                 <img src={kuva23}  value="kksd"  onClick={this.showModal({taulu: kuva23, nimi: "Theia", tiedot:"2015 	Litografia 	42x38 cm"})} alt="noin" style={s} />
                 <img src={kuva13}  value="kksd"  onClick={this.showModal({taulu: kuva13, nimi: "Pandeon", tiedot:"2018	Lyijykynä	50x80 cm"})} alt="noin" style={s} />
                 <img src={kuva21}  value="kksd"  onClick={this.showModal({taulu: kuva21, nimi: "Souvenir", tiedot:"2018	Lyijykynä	50x80 cm"})} alt="noin" style={s} />
                 <img src={kuva11}  value="kksd"  onClick={this.showModal({taulu: kuva11, tiedot: "Gallery Kapriisi Tampere 2013"})} alt="noin" style={s} />
                 
                </div>
                <div className="column">
                   <img src={kuva16}  value="kksd"  onClick={this.showModal({taulu: kuva16 , nimi: "Luonnontila", tiedot:"2013 	Litografia	74x74 cm"})} alt="noin" style={s} />
                   <img src={kuva19}  value="kksd"  onClick={this.showModal({taulu: kuva19 , nimi: "Samsara", tiedot:"2010 	 Litografia  	63X73 cm"})} alt="noin" style={s} />
                   <img src={kuva5}  value="kksd"  onClick={this.showModal({taulu: kuva5 , nimi: "Illusionist", tiedot: "2015  	Litografia	  56x63 cm"})} alt="noin" style={s} />
                   <img src={kuva1}  value="kksd"  onClick={this.showModal({taulu: kuva1, nimi: "Existentialist	", tiedot:"2015  	Litografia  	56x63 cm"})} alt="noin" style={s} />
                   <img src={kaarme}  value="kksd"  onClick={this.showModal({taulu: kaarme, nimi: "Mimesis", tiedot:"2019	Lyijykynä	60x70 cm"})} alt="noin" style={s} />
                   <img src={kuva24}  value="kksd"  onClick={this.showModal({taulu: kuva24, nimi: "Verso" ,tiedot:"2018	Lyijykynä 	83x107 cm"})} alt="noin" style={s} />
                   <img src={kuva7}  value="kksd"  onClick={this.showModal({taulu: kuva7, tiedot: "Gallery Kajaste Oulu 2018"})} alt="noin" style={s} />

                </div>
                <div className="column">
                   <img src={kuva2}  value="kksd"  onClick={this.showModal({taulu: kuva2 , nimi: "Gaia", tiedot:"2012	Litografia	74x74 cm"})} alt="noin" style={s} />
                   <img src={kuva20}  value="kksd"  onClick={this.showModal({taulu: kuva20 , nimi: "Sole", tiedot:"2014 	Litografia  	52x55 cm"})} alt="noin" style={s} />
                   <img src={kuva22}  value="kksd"  onClick={this.showModal({taulu: kuva22 , nimi: "Sykli", tiedot:"2010  	Litografia  	74x74 cm"})} alt="noin" style={s} />
                   <img src={kuva15}  value="kksd"  onClick={this.showModal({taulu: kuva15, nimi: "Interdependence", tiedot:"2018	Lyijykynä 	94x112 cm"})} alt="noin" style={s} />
                   <img src={kuva3}  value="kksd"  onClick={this.showModal({taulu: kuva3, nimi: "Here Today II", tiedot:"2018	Lyijykynä 	50x80 cm"})} alt="noin" style={s} />
                  
                   <img src={kuva17}  value="kksd"  onClick={this.showModal({taulu: kuva17, nimi: "My favorite things", tiedot:"2018	Lyijykynä 	50x80 cm"})} alt="noin" style={s} />
                   <img src={kuva6}  value="kksd"  onClick={this.showModal({taulu: kuva6, tiedot: "Gallery Kajaste Oulu 2018"})} alt="noin" style={s} />

             </div>
            </div>
            <br></br>
            </div>



        )
    }
}

export default Grafiikka;