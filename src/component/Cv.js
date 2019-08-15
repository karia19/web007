import React from 'react';
import './Cv.css'
import CvFi from '../component/CvFi';
import CvEn from '../component/CvEn';

class Cs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        fin: true
    }
}
vaihada = () => {
   this.setState({ fin: false })
}

    render () {
      console.log(this.props.fin)

      const sty = {
        "font-size":"36px"
      }

      const What = () => {
        if(this.state.fin){
          return(
            <CvFi />
          )
        } else {
          return(
            <CvEn />
          )
        }

      }
       

        return (
            <div>
            <br></br>
            <br></br>
           
            <h2 className="text-center"> Resume</h2>
            <div className="text-left">
            <i className="fa fa-language" style={sty} onClick={this.vaihada}></i>
            <What />
            </div>
           
            </div> 
        )
    }
}


export default Cs;