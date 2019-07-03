
import { connect } from 'react-redux';
import React from 'react';
import login from '../services/login';
import { logincontent } from '../reducer/loginReducer'
import { messaContent } from '../reducer/messageReducer'


class Login extends React.Component {

    constructor(props){
        super(props)
            this.state = {
                username: "",
                password: "",
                warning: null
            }

        
    }
    getLogin = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    send = async (event) => {
        event.preventDefault()
      
        if (this.state.password === "" || this.state.username === "" ){
          this.setState({ warning: "Something is missing"})
    
        } 
        const user = {
            username: this.state.username,
            password: this.state.password
        }  
          
        try {
            const res = await login(user);
            console.log(res)
            this.props.logincontent(res.data.username)
            window.localStorage.setItem('loginForInterface', res.data.token);
            //console.log(res.data.token)

        } catch (e) {
           console.log("error")
           this.setState({ warning: "Username or password incorrect"})
        }
    
        setTimeout(() => {
          this.setState({ warning: null })
          this.setState({ password: "", username: "" })
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



        return(
          <div>
           <Warn />
           
            <div className="container">
            <h3>Login</h3>
            <form>
            <div className="form-group mb-2">
               <label for="text">Username:</label>
              <input name="username" 
                     type="text" 
                     value = {this.state.username}
                     onChange={this.getLogin}
                     class="form-control" 
                     id="text" />
            </div>
            <div className="form-group">
               <label for="pwd">Password:</label>
               <input name="password" 
                      value={this.state.password}
                      onChange={this.getLogin}
                      type="password" 
                      class="form-control" 
                      id="pwd" />
            </div>
             <button type="submit"  onClick={this.send} className="btn btn-primary">Submit</button>
            </form>
          
             </div>
            <br></br>
           
           </div>
         
        )
    }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    message: state.message
  }
}


export default connect (
  mapStateToProps, {
    logincontent, messaContent
  },
) (Login)