
import React from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


import kuva1 from '../portfolio/aarni.jpg'
import eka from '../portfolio/immersio.jpg'
import toka from '../portfolio/mimesis.jpg'
import kuva2 from '../portfolio/invertebrate.jpg'
import kuva3 from '../portfolio/ornithology1.jpg'
import kuva4 from '../portfolio/ornithology2.jpg'
import kuva8 from '../portfolio/They_see_us_3.jpg'
import kuva9 from '../portfolio/they_see_us_II_W.jpg'
import kuva11 from '../portfolio/They_see_us1.jpg'
import nayttely1 from '../portfolio/nayttely.jpg'
import nayttely2 from '../portfolio/nayttely2.jpg'
import nayttely3 from '../portfolio/nayttely3.jpg'
import vista from '../portfolio/vista_II.jpg'
import verde from '../portfolio/Verde_II_web.jpg'
import encounter from '../portfolio/Encounter_web.jpg'




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
                    <img src={eka}  value="kksd"  onClick={this.showModal({taulu: eka , nimi: "Immersio", tiedot: "2019	Tempera	167x191 cm"})} alt="noin" style={s} />
                    <img src={kuva2}  value="kksd"  onClick={this.showModal({taulu: kuva2 , nimi: "Invertebrate", tiedot: "2017	Tempera	100x130 cm"})} alt="noin" style={s} />
                    <img src={kuva9}  value="kksd"  onClick={this.showModal({taulu: kuva9 , nimi: "They see us III	2017", tiedot: "Tempera	81x61 cm"})} alt="noin" style={s} />

                    <img src={vista}  value="kksd"  onClick={this.showModal({taulu: vista, nimi: "Vista II", tiedot:"2017	Tempera	40x61 cm"})} alt="noin" style={s} />
                    <img src={nayttely1}  value="kksd"  onClick={this.showModal({taulu: nayttely1, nimi: "" , tiedot: "Gallery Kajaste Oulu  2018" })} alt="noin" style={s} />

                </div>
                <div className="column">
                   <img src={encounter}  value="kksd"  onClick={this.showModal({taulu: encounter , nimi: "Encounter", tiedot: "2017	Tempera	100x130 cm" })} alt="noin" style={s} />
                   <img src={kuva8}  value="kksd"  onClick={this.showModal({taulu: kuva8 , nimi: "Ornithology I"})} alt="2017	Tempera	100x130 cm" style={s} />
                   <img src={kuva3}  value="kksd"  onClick={this.showModal({taulu: kuva3 , nimi: "They see us I", tiedot: "2017	Tempera	81x61 cm"})} alt="noin" style={s} />
                   <img src={verde}  value="kksd"  onClick={this.showModal({taulu: verde, nimi: "Verde II", tiedot:"2017	Tempera	81x61 cm"})} alt="noin" style={s} />
                   <img src={nayttely2}  value="kksd"  onClick={this.showModal({taulu: nayttely2, nimi: "", tiedot:"Gallery Kajaste Oulu  2018"})} alt="noin" style={s} />

                </div>
                <div className="column">
                   <img src={toka}  value="kksd"  onClick={this.showModal({taulu: toka , nimi: "Mimesis", tiedot: "2019	Tempera	167x191 cm"})} alt="noin" style={s} />
                   <img src={kuva4}  value="kksd"  onClick={this.showModal({taulu: kuva4 , nimi: "Ornithology II	2017", tiedot: "Tempera	100x130 cm"})} alt="noin" style={s} />
                   <img src={kuva11}  value="kksd"  onClick={this.showModal({taulu: kuva11 , nimi: "They see us IV", tiedot:"2018	Tempera	81x61 cm"})} alt="noin" style={s} />
                   <img src={kuva1}  value="kksd"  onClick={this.showModal({taulu: kuva1, nimi: "Aarni", tiedot:"2017	Tempera	100x130 cm"})} alt="noin" style={s} />
                   <img src={nayttely3}  value="kksd"  onClick={this.showModal({taulu: nayttely3, nimi: "", tiedot: "Gallery Kajaste Oulu  2018"})} alt="noin" style={s} />

             </div>
            </div>
            <br></br>
            </div>



        )
    }
}

export default MosalTest;