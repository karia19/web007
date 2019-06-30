
import React from 'react'

import kuva1 from '../maalaukset/3.jpg'
import kuva2 from '../maalaukset/4.jpg'
import kuva3 from '../maalaukset/5.jpg'
import kuva4 from '../maalaukset/gl1.jpg'
import kuva5 from '../maalaukset/IMGP0210.jpg'
import kuva6 from '../maalaukset/IMGP5547.jpg'
import kuva7 from '../maalaukset/IMGP5700.jpg'
import kuva8 from '../maalaukset/IMGP5715.jpg'
import kuva9 from '../maalaukset/IMGP7010.jpg'
import kuva10 from '../maalaukset/IMGP7031.jpg'
import kuva11 from '../maalaukset/IMGP9394.jpg'
import kuva12 from '../maalaukset/indigo.jpg'
import kuva13 from '../maalaukset/insitu.jpg'
import kuva14 from '../maalaukset/insumma.jpg'
import kuva15 from '../maalaukset/mirage.jpg'
import kuva16 from '../maalaukset/natura_borealis (1).jpg'
import kuva17 from '../maalaukset/natura_imago_print.jpg'
import kuva18 from '../maalaukset/natura_lux_print.jpg'
import kuva19 from '../maalaukset/natura_mare_print.jpg'
import kuva20 from '../maalaukset/taiga.jpg'
import kuva21 from '../maalaukset/they_see_us_v.jpg'
import kuva22 from '../maalaukset/they_see_us_VI.jpg'
import kuva23 from '../maalaukset/They_see_us1.jpg'
import kuva24 from '../maalaukset/isola.jpg'

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';



import '../component/Lightbox.css'
import '../component/image1.css'


class Maalaukset extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            name: "",
            kuva: ""
        }
    }
    showModal = pram =>  e =>  {
        this.setState({show: true, name: pram.nimi , kuva: pram.taulu})
        
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
              <br></br>
              {this.state.show && (
                <div>
                 <Lightbox
                    mainSrc={this.state.kuva}
                    imageTitle={this.state.name}
 
                    imageCaption={this.state.name}
                    onCloseRequest={() => this.setState({ show: false })}
                    animationDuration={200}
                 
                 
                 
                 />
             
             </div>
             )
           }
              <h3 className="text-center">Maalaukset</h3>
              <hr></hr>
              <ul className="works">
                 <li><a href="/portfolio">Portfolio</a></li>
                 <li><a href="/grafiikka">Grafiikka</a></li>
              </ul>
              <br></br>
               <div className="w3-row" id="myGrid" style={ss}>
               </div>
                <div className="row1">
                 <div className="column">
                    <img src={kuva16}  value="kksd"  onClick={this.showModal({taulu: kuva16 , nimi: "natura_borelias"})} alt="noin" style={s} />
                    <img src={kuva12}  value="kksd"  onClick={this.showModal({taulu: kuva12 , nimi: "indigo"})} alt="noin" style={s} />
                    <img src={kuva1}  value="kksd"  onClick={this.showModal({taulu: kuva1 , nimi: "they_see_us_IV_web"})} alt="noin" style={s} />

                    <img src={kuva21}  value="kksd"  onClick={this.showModal({taulu: kuva21, nimi: "souvenir_w"})} alt="noin" style={s} />
                    <img src={kuva24}  value="kksd"  onClick={this.showModal({taulu: kuva24, nimi: "Galleria Bronda"})} alt="noin" style={s} />
                    <img src={kuva6}  value="kksd"  onClick={this.showModal({taulu: kuva6, nimi: "Galleria Bronda"})} alt="noin" style={s} />
                    <img src={kuva10}  value="kksd"  onClick={this.showModal({taulu: kuva10, nimi: "Galleria Bronda"})} alt="noin" style={s} />
                    <img src={kuva11}  value="kksd"  onClick={this.showModal({taulu: kuva11, nimi: "Galleria Bronda"})} alt="noin" style={s} />

                </div>
                <div className="column">
                   <img src={kuva18}  value="kksd"  onClick={this.showModal({taulu: kuva18 , nimi: "ornithology1"})} alt="noin" style={s} />
                   <img src={kuva19}  value="kksd"  onClick={this.showModal({taulu: kuva19 , nimi: "aarni"})} alt="noin" style={s} />
                   <img src={kuva2}  value="kksd"  onClick={this.showModal({taulu: kuva2 , nimi: "They_see_us1"})} alt="noin" style={s} />
                   <img src={kuva22}  value="kksd"  onClick={this.showModal({taulu: kuva22, nimi: "my_favourite_w"})} alt="noin" style={s} />
                   <img src={kuva4}  value="kksd"  onClick={this.showModal({taulu: kuva4, nimi: ""})} alt="noin" style={s} />
                   <img src={kuva14}  value="kksd"  onClick={this.showModal({taulu: kuva14, nimi: ""})} alt="noin" style={s} />
                   <img src={kuva8}  value="kksd"  onClick={this.showModal({taulu: kuva8, nimi: ""})} alt="noin" style={s} />
                   <img src={kuva5}  value="kksd"  onClick={this.showModal({taulu: kuva5, nimi: ""})} alt="noin" style={s} />

                </div>
                <div className="column">
                   <img src={kuva17}  value="kksd"  onClick={this.showModal({taulu: kuva17 , nimi: "invertebrate"})} alt="noin" style={s} />
                   <img src={kuva20}  value="kksd"  onClick={this.showModal({taulu: kuva20 , nimi: "they_see_us_II_W"})} alt="noin" style={s} />
                   <img src={kuva3}  value="kksd"  onClick={this.showModal({taulu: kuva3 , nimi: "interdependence_w"})} alt="noin" style={s} />
                   <img src={kuva23}  value="kksd"  onClick={this.showModal({taulu: kuva23, nimi: "verso"})} alt="noin" style={s} />
                   <img src={kuva15}  value="kksd"  onClick={this.showModal({taulu: kuva15, nimi: ""})} alt="noin" style={s} />
                  
                   <img src={kuva13}  value="kksd"  onClick={this.showModal({taulu: kuva13, nimi: ""})} alt="noin" style={s} />
                   <img src={kuva9}  value="kksd"  onClick={this.showModal({taulu: kuva9, nimi: ""})} alt="noin" style={s} />
                   <img src={kuva7}  value="kksd"  onClick={this.showModal({taulu: kuva7, nimi: ""})} alt="noin" style={s} />

             </div>
            </div>
            <br></br>
            </div>



        )
    }
}

export default Maalaukset;