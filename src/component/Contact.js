
import React from 'react';
import './contact.css';
import axios from 'axios';



class Contact extends React.Component {
  constructor(props){
    super(props) 
       this.state = {
         name: "",
         email: "",
         comments: "",
         warning: null
       } 
      
  }
  getInfo = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  send = async (event) => {
    event.preventDefault()
    console.log(this.state.comments)
    const url = 'http://localhost:3003/api/form'
  
    if (this.state.comments === "" || this.state.email === "" || this.state.name === ""){
      this.setState({ warning: "Something is missing"})

    } else {
      const mail = {
        to: "",
        replyTo: this.state.email,
        subject: this.state.name,
        html: this.state.comments

      }

      const res = axios.post(url , mail)
      console.log(res)
      
    }
    setTimeout(() => {
      this.setState({ warning: null })
    }, 3000)
     



  }




    render() {
      
      const Warn = () => {
        if(this.state.warning !== null){
          return (<div className="alert alert-danger">
               <strong>{this.state.warning}</strong>
              </div>

          )
        } else {
          return (<div></div>)
        }
      }


        return (
       <div className="Form">
      
            <h3 className="text-center">Contact</h3>
                <br></br>
                <Warn />
                <p className="text-center"><em></em></p>
             <div className="row test">
          <div className="col-md-4">
             <p>Drop a note.</p>
             <p><span className="glyphicon glyphicon-map-marker"></span>Helsinki, Finland</p>
             <p><span className="glyphicon glyphicon-phone"></span>Phone: +00 1515151515</p>
             <p><span className="glyphicon glyphicon-envelope"></span>Email: mail@mail.com</p> 
         </div>
          <div className="col-md-8">
            <div className="row">
            <div className="col-sm-6 form-group">
            <input className="form-control" 
                          id="name" 
                          name="name"
                          placeholder="Name" 
                          value={this.state.name}
                          onChange={this.getInfo}
                          type="text" required />
          </div>
            <div className="col-sm-6 form-group">
               <input className="form-control" 
                          id="email" 
                          name="email" 
                          placeholder="Email" 
                          value={this.state.email}
                          onChange={this.getInfo}
                          type="email" required />
           </div>
           </div>
             <textarea className="form-control"
                          id="comments" 
                          name="comments" 
                          placeholder="Comment" 
                          value={this.state.comments}
                          onChange={this.getInfo}
                          rows="5"></textarea>
              <div className="row">
                <div className="col-md-12 form-group">
                <br></br>
                <button className="btn pull-right" onClick={this.send} type="submit">Send</button>
              </div>
          </div> 
         </div>
        </div>
       </div>



        )
    }
}

export default Contact;