

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
              option: "",
              images: [],
              token: ""
              
          }
    }
  

    componentDidMount() {
        const logginUser = window.localStorage.getItem('loginForInterface');
        this.setState({ token: logginUser })
       // const conf = { headers: { 'Authorization': logginUser}};


        const result = axios.get('http://localhost:3003/files')
        result.then((res, error) => {
           this.setState({ images: res.data }) 
           //console.log(res.data);
        })
       
        
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
        const config = { headers: { 'Authorization': this.state.token, 'Content-Type': 'multipart/form-data' } };
        let fd = new FormData();
        fd.append('lista', this.state.option)
        fd.append('file', this.state.file);
       
        try {
            
            const res = await axios.post('http://localhost:3003/upload', fd, config )
            this.props.messaContent("Kuvan vaihtaminen onnistui")
            const result = await axios.get('http://localhost:3003/files')
            this.setState({ images: result})

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
        console.log("omat" , this.state.images);
        
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
              <div className="row">
              {this.state.images.map((x, index) => 
              <div className="col-sm-4"> 
              <div className="card-body mb-3">    
              <img src= {`http://localhost:3003/files/${x.filename}`} width="100%" height="200" alt="" />
              <p>{x.filename}</p>
                <form method="POST" action="/files/<%= file._id %>?_method=DELETE">
                        <button class="btn btn-danger btn-block mt-4">Delete</button>
                </form>
              </div>
              </div>
              ) }
              </div>
              <hr></hr>
              </div>
              <div class="col-sm-6">
                <div class="form-group mp-3">
                  <h3>Täytä myytävien taulujen tiedot</h3>
                  <label for="sel1">Täytä taulun tiedot</label>
                   <form  encType="multipart/form-data" >
                    <label for="usr">Taulun nimi</label>
                    <input name="tauluNimi" type="text" class="form-control" id="usr"></input>
        
                    <label for="usr">Kuvaus</label>
                    <textarea name="kuvaus" class="form-control" rows="5" id="comment" ></textarea>
        
                    <label for="usr">Hinta</label>
                    <input name="hinta" type="text" class="form-control" id="usr"></input>
                   
                    <br></br>
                    <p>Muista kuva formaatti jpg tai jpeg</p>
                 
                     <input  type="file" name="file" id="file" ></input>
                    <button class="btn btn-light">Send</button> 
                  </form>
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