

import React from 'react'
import { logincontent } from '../reducer/loginReducer';
import { messaContent } from '../reducer/messageReducer';
import { connect } from 'react-redux';
import axios from 'axios'
import MessageAlert from '../messageComponent/message'


class User extends React.Component {

    constructor(props) {
        super(props)
          this.state = {
              file: null,
              option: ""
          }
    }
    loadImage = (event) => {
        //console.log(event.target.files[0]);
        this.setState({ file: event.target.files[0] })
    }
    loadOption = (event) => {
        this.setState({ option: event.target.value })
        //console.log(event.target.value)
    }
    sendImage = async (event) => {
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        let fd = new FormData();
        fd.append('lista', this.state.option)
        fd.append('file', this.state.file);
       
        try {
            
            const res = await axios.post('http://localhost:3003/upload', fd, config )
            this.props.messaContent("Kuvan vaihtaminen onnistui")

        } catch (e) {
            this.props.messaContent("Jotain meni pieleen")
        }

        setTimeout(() => {
            this.props.messaContent("");
        }, 3000)
        
    }
    
    logOut = () => {
        window.localStorage.clear();
        window.location = "/";
    }
    render() {
        


        return (
            <div>
            <div className="container">
            <MessageAlert message="" />
            <button  className="btn btn-light float-left" onClick={this.logOut}>logOut</button>
            <br></br>
            <br></br>
            <h2 className="text-center display-4 my-4">Upload images</h2>
            <p className="text-center display-10 my-10">Tästä voit vaihtaa kuvaa valitsemalla ensin
             kuvan mikä vaihdetaan ja sitten valitsemalla tilalle uuden</p>
        
            <div className="row">
             <div className="col-sm-6">
                <div className="form-group mp-3">
        
                  <label for="sel1">Valitse kuva mikä vaihdetaan</label>
                   <form encType="multipart/form-data" >
                    <select onChange={this.loadOption} value={this.state.option} name="lista" class="form-control" id="sel1">
                      <option value=""></option>
                      <option value="news">News</option>
                      <option value="etusivuEka">Etusivu eka</option>
                      <option value="etusivuTokaVasen">Etusivu toka vasen</option>
                      <option value="etusivuTokaOikea">Etusivu toka oikea</option>
                      <option value="etusivuAlin">Etusivu alin</option>
                     </select>
                  
                 <p>Muista kuva formaatti jpg tai jpeg</p>
                 
                     <input onChange={this.loadImage} type="file" name="file" id="file" />
                
                     <button className="btn btn-light" onClick={this.sendImage} >Send</button>
                 </form>
              </div>
             </div>
              
        
              
              </div>
              <hr></hr>
              <div className="row">
              <div className="col-sm-4"> 
                  <p>News</p>  
                  <img src="http://localhost:3003/files/news" width="100%" height="230" />
              </div>
              <div className="col-sm-4">    
                  <p>Etusivu eka</p>
                  <img src="http://localhost:3003/files/etusivuEka" width="100%" height="230" />
              </div>
              <div className="col-sm-4">
                  <p>Etusivu toka vasen</p>    
                  <img src="http://localhost:3003/files/etusivuTokaVasen" width="100%" height="230" />
              </div>
        
            </div>
            </div>
            <div className="row">
            <div className="col-sm-4">
                <p>Etusivu toka oikea</p>
                <img src="http://localhost:3003/files/etusivuTokaOikea" width="100%" height="230" />
            </div>
            </div>
            <br></br>
            <br></br>
            </div>
            
        
           
        
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        messages: state.messages
    }
}


export default connect (
    mapStateToProps, {
        logincontent, messaContent
    },
)(User);