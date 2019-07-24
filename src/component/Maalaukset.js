
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
import codex1 from '../maalaukset/codex_naturaeIV.jpg'
import codex2 from '../maalaukset/codex_naturaeV.jpg'
import codex3 from '../maalaukset/codex_naturaeI kopio.jpg'
import codex4 from '../maalaukset/codex_naturae_vII.jpg'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import hirvi from '../maalaukset/Encounter_web.jpg'
import korppi from '../maalaukset/they_see_us_IV_web.jpg'
import ornito from '../maalaukset/ornithology2.jpg'



import '../component/Lightbox.css'
import '../component/image1.css'


class Maalaukset extends React.Component {
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
        this.setState({show: true, name: pram.nimi , kuva: pram.taulu, tiedot: pram.tiedot})
        
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
                    <img src={kuva16}  value="kksd"  onClick={this.showModal({taulu: kuva16 , nimi: "Natura Borealis", tiedot: "2013	Öljyväri 	100x130 cm" })} alt="noin" style={s} />
                    <img src={kuva12}  value="kksd"  onClick={this.showModal({taulu: kuva12 , nimi: "Indigo", tiedot: "2014	Öljyväri	100x130 cm"})} alt="noin" style={s} />
                    <img src={kuva4}  value="kksd"  onClick={this.showModal({taulu: kuva4 , nimi: "Genius Loci I", tiedot: "2015	Öljyväri	50x40 cm" })} alt="noin" style={s} />

                    <img src={kuva15}  value="kksd"  onClick={this.showModal({taulu: kuva15, nimi: "Mirage", tiedot: "2014	Öljyväri	41x33 cm"})} alt="noin" style={s} />
                    <img src={codex1}  value="kksd"  onClick={this.showModal({taulu: codex1, nimi: "Codex Naturae IV", tiedot:"2017	Tempera	40x61 cm"})} alt="noin" style={s} />
                    <img src={codex4}  value="kksd"  onClick={this.showModal({taulu: codex4, nimi: "Codex Naturae VII", tiedot:"2017	Tempera	40x61 cm"})} alt="noin" style={s} />

                    <img src={kuva10}  value="kksd"  onClick={this.showModal({taulu: kuva10, tiedot: "Galleria Bronda 2014"})} alt="noin" style={s} />

                    <img src={kuva8}  value="kksd"  onClick={this.showModal({taulu: kuva8, tiedot: "Galleria Bronda 2016"})} alt="noin" style={s} />


                </div>
                <div className="column">
                   <img src={kuva18}  value="kksd"  onClick={this.showModal({taulu: kuva18 , nimi: "Natura Lux", tiedot:"2013	Öljyväri 	100x130 cm"})} alt="noin" style={s} />
                   <img src={kuva19}  value="kksd"  onClick={this.showModal({taulu: kuva19 , nimi: "Natura Mare", tiedot: "2013	Öljyväri 	100x130 cm"})} alt="noin" style={s} />
                   <img src={kuva13}  value="kksd"  onClick={this.showModal({taulu: kuva13 , nimi: "In Situ", tiedot:"2015  	Öljyväri	110x120 cm"})} alt="noin" style={s} />
                   <img src={kuva14}  value="kksd"  onClick={this.showModal({taulu: kuva14, nimi: "In Summa", tiedot:"2015  	Öljyväri  	167x191 cm"})} alt="noin" style={s} />
                   
                   <img src={codex3}  value="kksd"  onClick={this.showModal({taulu: codex3, nimi: "Codex Naturae I", tiedot:"2017	Tempera	40x61 cm"})} alt="noin" style={s} />

                   <img src={kuva22}  value="kksd"  onClick={this.showModal({taulu: kuva22, nimi: "They see us VI", tiedot:"2018	Tempera	80x61 cm"})} alt="noin" style={s} />
                   <img src={ornito}  value="kksd"  onClick={this.showModal({taulu: ornito, nimi: "Ornithology II	2017", tiedot:"Tempera	100x130 cm"})} alt="noin" style={s} />



                   <img src={kuva11}  value="kksd"  onClick={this.showModal({taulu: kuva11, tiedot: "Galleria Bronda 2018"})} alt="noin" style={s} />

                </div>
                <div className="column">
                   <img src={kuva17}  value="kksd"  onClick={this.showModal({taulu: kuva17 , nimi: "Natura Imago", tiedot:"2014	Öljyväri 	100x130 cm"})} alt="noin" style={s} />
                   <img src={kuva20}  value="kksd"  onClick={this.showModal({taulu: kuva20 , nimi: "Taiga", tiedot:"2013  	Öljyväri	 61x88 cm"})} alt="noin" style={s} />
                   <img src={kuva6}  value="kksd"  onClick={this.showModal({taulu: kuva6 , nimi: "Unity", tiedot:"2015  	Öljyväri  	100x130 cm"})} alt="noin" style={s} />
                   <img src={kuva24}  value="kksd"  onClick={this.showModal({taulu: kuva24, nimi: "Isola", tiedot:"2015	Öljyväri 	100x130 cm"})} alt="noin" style={s} />
                   <img src={codex2}  value="kksd"  onClick={this.showModal({taulu: codex2, nimi: "Codex Naturae V", tiedot:"2017	Tempera	40x61 cm"})} alt="noin" style={s} />
                  
                   <img src={korppi}  value="kksd"  onClick={this.showModal({taulu: korppi, nimi: "They see us IV", tiedot:"2018	Tempera	81x61 cm"})} alt="noin" style={s} />
                   <img src={hirvi}  value="kksd"  onClick={this.showModal({taulu: hirvi, nimi: "Encounter", tiedot:"2017	Tempera	100x130 cm"})} alt="noin" style={s} />

                   <img src={kuva7}  value="kksd"  onClick={this.showModal({taulu: kuva7, tiedot: "Galleria Bronda 2016"})} alt="noin" style={s} />


             </div>
            </div>
            <br></br>
            </div>



        )
    }
}

export default Maalaukset;