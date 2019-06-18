
import React from 'react'
import kuva1 from '../images/last.jpg'
import kuva2 from '../images/k1.jpg'
import kuva3 from '../images/last.jpg'
import kuva4 from '../images/33.jpg'

import '../component/Lightbox.css'
import '../component/image1.css'


class MosalTest extends React.Component {
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
        console.log(e.props)
    }
    closeModal = () => {
         this.setState({show:false})
    }
    getName = () => {
        console.log("komment")
    }
   

    render() {
        const s = {
            width: "100%"

        }
        const ss = {
            "margin-bottom": "100px"
        }
        
       

        if (this.state.show) {
              return <div>
              <br></br>
              <br></br>
              <div className="modal-content"> 
              
             
              <img src={this.state.kuva} width="100%" height={600} alt="n" /> 
             
              <div>
              <a className="close cursor" onClick={this.closeModal}>&times;</a> 
                
                 </div>
                 <div>
                 <a className="prev" >&#10094;</a>
                 <a className="next" >&#10095;</a>
               </div>
        
             
              
              </div>
              <h3 className="omaTexti">{this.state.name}</h3>
              </div>
        } 
          



        return(
            <div>
           
              <h3 className="text-center">Portfolio</h3>
               <div className="w3-row" id="myGrid" style={ss}>
               </div>
                <div className="row1">
                 <div className="column">
                    <img src={kuva2}  value="kksd"  onClick={this.showModal({taulu: kuva2 , nimi: "uusion"})} alt="noin" style={s} />
                    <img src={kuva4}  value="kksd"  onClick={this.showModal({taulu: kuva4 , nimi: "uusion"})} alt="noin" style={s} />
                    <img src={kuva3}  value="kksd"  onClick={this.showModal({taulu: kuva3 , nimi: "uusion"})} alt="noin" style={s} />

                    <img src={kuva2}  value="kksd"  onClick={this.showModal({taulu: kuva2, nimi: "uusion"})} alt="noin" style={s} />
                </div>
                <div className="column">
                   <img src={kuva1}  value="kksd"  onClick={this.showModal({taulu: kuva1 , nimi: "uusion"})} alt="noin" style={s} />
                   <img src={kuva1}  value="kksd"  onClick={this.showModal({taulu: kuva1 , nimi: "uusion"})} alt="noin" style={s} />
                   <img src={kuva3}  value="kksd"  onClick={this.showModal({taulu: kuva3 , nimi: "uusion"})} alt="noin" style={s} />

                   <img src={kuva2}  value="kksd"  onClick={this.showModal({taulu: kuva2, nimi: "uusion"})} alt="noin" style={s} />
                </div>
                <div className="column">
                   <img src={kuva4}  value="kksd"  onClick={this.showModal({taulu: kuva4 , nimi: "uusion"})} alt="noin" style={s} />
                   <img src={kuva1}  value="kksd"  onClick={this.showModal({taulu: kuva1 , nimi: "uusion"})} alt="noin" style={s} />
                   <img src={kuva3}  value="kksd"  onClick={this.showModal({taulu: kuva3 , nimi: "uusion"})} alt="noin" style={s} />

                   <img src={kuva2}  value="kksd"  onClick={this.showModal({taulu: kuva2, nimi: "uusion"})} alt="noin" style={s} />
             </div>
            </div>
            <br></br>
            </div>



        )
    }
}

export default MosalTest;