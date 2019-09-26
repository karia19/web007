import React , { useState } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const WebShopItems = (props) => {

    const [ show, setShow ] = useState(false)
    const [image, setImage] = useState([])
    const [nimi , setNimi] = useState("")
    const [tiedot, setTiedot] = useState("")



    const s = {
        widht: "100%",
        
    }
    const showModal = pram =>  e =>  {
         setShow(true)
         setImage(pram.taulu)
         setNimi(pram.nimi)
         setTiedot(pram.tiedot)
        
    }
    
    return (
        <div>
        {show && (
            <div>
             <Lightbox
                mainSrc={image}
                imageTitle={nimi}
                onCloseRequest={() => setShow(false)}
                animationDuration={200}
                imagePadding={60}
                imageCaption={tiedot}
             
             
             
             />
         
         </div>
         )
       }
       
        <div className="card" style={s}>
        
          
        <img className="card-image-top" onClick={showModal({taulu: `https://pekkaparviainen.com/api/files/${props.kuvat.filename}`, 
        nimi: props.kuvat.metadata.artName,
        tiedot:props.kuvat.metadata.mitat})} 
        
        src= {`https://pekkaparviainen.com/api/files/${props.kuvat.filename}`} width="100%" height="300" alt="" />
        
       
        <div className="card-body">
        <h4 className="card-title">{(props.kuvat.metadata.artName).toUpperCase()}</h4>
        <p className="card-text">{("Valmistus vuosi:  " + props.kuvat.metadata.vuosi)}</p>
        <p className="card-text">{("Koko:  " + props.kuvat.metadata.mitat)}cm</p>
        
        <p className="card-text">{(props.kuvat.metadata.kuvaus)}</p>
        <hr></hr>
        <p>{(props.kuvat.metadata.hinta)} €</p> 
        
       
        
         
        </div>
        </div>
        </div>  
        
       
       
       
       
       

    )
}

export default WebShopItems;