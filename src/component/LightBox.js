
import React from 'react'
import kuva1 from '../images/k1.jpg';
import kuva2 from '../images/last.jpg';
import './Lightbox.css'

class LightBox extends React.Component {
    constructor(props) {
       super(props) 
       this.state = {
          slideIndex: 1
       }
        
           
            
             
    }

    
    componentDidMount() {
        this.setState({slideIndex: 1})
    }
    openModal()  {
        if (document.getElementById("myModal")){
            document.getElementById("myModal").style.display = "block"
        }
        
    }
    closeModal() {
        if (document.getElementById("myModal")){
            document.getElementById("myModal").style.display = "none"
        }
    }
    showSlides = (n) => {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        console.log(slides)
        var captionText = document.getElementById("caption");
        if (n > slides.length) {
            this.setState({ slideIndex: 1 })
        }
        if (n < 1) {
             this.setState({ slideIndex: slides.length })
        }
        for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
             dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[this.state.slideIndex - 1].style.display = "block";
        dots[this.state.slideIndex - 1].className += " active";
        captionText.innerHTML = dots[this.state.slideIndex - 1].alt;

    }
    plus = (n) => {
        console.log(n)
    }


    render() {
        const s = {
            widht: "100%"
        }
      
         


        return(
        
            <div>
            <div class="row" >
              <div class="column">
               <img src={kuva1} onClick={this.openModal} className="hover-shadow" alt="none" />
              </div>
              <div class="column">
               <img src={kuva2} onClick={this.openModal}  className="hover-shadow" alt="none" />
            </div>
            </div>

            <div id="myModal" ref={this.myModal} className="modal">
                <span className="close cursor" onClick={this.closeModal}>&times;</span> 
              <div className="modal-content">
              

              <div className="mySlides">
                 <div className="numbertext">1 / 4</div>
                 <img src={kuva1} style={s} alt="gfgfgf" />
              </div>

              <div class="mySlides">
                 <div className="numbertext">2 / 4</div>
                 <img src={kuva2} style={s} alt="" />
              </div>


        
               <a className="prev" onClick={this.plus(1)}>&#10094;</a>
               <a className="next" onClick="plusSlides(1)">&#10095;</a>

    
               <div className="caption-container">
                <p id="caption"></p>
               </div>

               <div className="column">
                 <img className="demo" src={kuva1} onclick="currentSlide(1)" alt="Nature" />
               </div>

               <div className="column">
                 <img className="demo" src={kuva2} onclick="currentSlide(2)" alt="Snow" />
               </div>
              </div>
            </div>
           </div>
        )
    }
}



export default LightBox;