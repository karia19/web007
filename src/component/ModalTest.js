
import React from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


import kuva1 from '../portfolio/aarni.jpg'
import kuva2 from '../portfolio/invertebrate.jpg'
import kuva3 from '../portfolio/ornithology1.jpg'
import kuva4 from '../portfolio/ornithology2.jpg'
import kuva5 from '../portfolio/pekka_parviainen_interdependence_w.jpg'
import kuva6 from '../portfolio/pekka_parviainen_my_favourite_w.jpg'
import kuva7 from '../portfolio/souvenir_w.jpg'
import kuva8 from '../portfolio/They_see_us_3.jpg'
import kuva9 from '../portfolio/they_see_us_II_W.jpg'
import kuva10 from '../portfolio/they_see_us_IV_web.jpg'
import kuva11 from '../portfolio/They_see_us1.jpg'
import kuva12 from '../portfolio/verso.jpg'
import nayttely1 from '../portfolio/nayttely.jpg'
import nayttely2 from '../portfolio/nayttely2.jpg'
import nayttely3 from '../portfolio/nayttely3.jpg'





import '../component/Lightbox.css'
import '../component/image1.css'


class MosalTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            name: "",
            kuva: "",
            tiedot: ""
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
              <br></br>
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
              
   
              <h3 className="text-center">Portfolio</h3>
              <hr></hr>
              <ul className="works">
                 <li><a href="/maalaukset">Maalaukset</a></li>
                 <li><a href="/grafiikka">Grafiikka</a></li>
              </ul>
              <br></br>
           
             
            
  
           
            
               <div className="w3-row" id="myGrid" style={ss}>
               </div>
                <div className="row1">
                 <div className="column">
                    <img src={kuva4}  value="kksd"  onClick={this.showModal({taulu: kuva4 , nimi: "Ornithology II", tiedot: "2017  Tempera on canvas  100x130 cm"})} alt="noin" style={s} />
                    <img src={kuva8}  value="kksd"  onClick={this.showModal({taulu: kuva8 , nimi: "They see us III", tiedot: "2017  Tempera on panel  81x61 cm"})} alt="noin" style={s} />
                    <img src={kuva10}  value="kksd"  onClick={this.showModal({taulu: kuva10 , nimi: "They see us IV", tiedot: "2018  Tempera on panel  81x61 cm"})} alt="noin" style={s} />

                    <img src={kuva7}  value="kksd"  onClick={this.showModal({taulu: kuva7, nimi: "Souvenir"})} alt="noin" style={s} />
                    <img src={nayttely1}  value="kksd"  onClick={this.showModal({taulu: nayttely1, nimi: "Diversity" , tiedot: "Gallery Bronda  Helsinki  2018" })} alt="noin" style={s} />

                </div>
                <div className="column">
                   <img src={kuva3}  value="kksd"  onClick={this.showModal({taulu: kuva3 , nimi: "Ornithology I", tiedot: "2017  Tempera on canvas  100x130 cm" })} alt="noin" style={s} />
                   <img src={kuva1}  value="kksd"  onClick={this.showModal({taulu: kuva1 , nimi: "Aarni"})} alt="noin" style={s} />
                   <img src={kuva11}  value="kksd"  onClick={this.showModal({taulu: kuva11 , nimi: "They see us I", tiedot: "2017  Tempera on panel  81x61 cm"})} alt="noin" style={s} />
                   <img src={kuva6}  value="kksd"  onClick={this.showModal({taulu: kuva6, nimi: "My favourite"})} alt="noin" style={s} />
                   <img src={nayttely2}  value="kksd"  onClick={this.showModal({taulu: nayttely2, nimi: ""})} alt="noin" style={s} />

                </div>
                <div className="column">
                   <img src={kuva2}  value="kksd"  onClick={this.showModal({taulu: kuva2 , nimi: "Invertebrate", tiedot: "2017  Tempera on canvas  100x130 cm"})} alt="noin" style={s} />
                   <img src={kuva9}  value="kksd"  onClick={this.showModal({taulu: kuva9 , nimi: "They see us II"})} alt="noin" style={s} />
                   <img src={kuva5}  value="kksd"  onClick={this.showModal({taulu: kuva5 , nimi: "Interdependence"})} alt="noin" style={s} />
                   <img src={kuva12}  value="kksd"  onClick={this.showModal({taulu: kuva12, nimi: "Verso"})} alt="noin" style={s} />
                   <img src={nayttely3}  value="kksd"  onClick={this.showModal({taulu: nayttely3, nimi: ""})} alt="noin" style={s} />

             </div>
            </div>
            <br></br>
            </div>



        )
    }
}

export default MosalTest;