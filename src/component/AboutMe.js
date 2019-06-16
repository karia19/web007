import React from 'react'
import { Card } from 'semantic-ui-react';
import profile from '../images/AboutMe.jpg'
import testiKuva from'../images/first.jpg'
import testiKaksi from '../images/k1.jpg';
import './AboutMe.css';

class AboutMe extends React.Component {



    render() {
        const color2 = {
           "padding-left": "px"
            
        }

        const color = {
            "background-color": "brown",
            display:"block"
        }
/*
        <div className="text-center">
       
        <div className="col-md-6">
          <img src={profile} width={"100%"} height={"350px"}></img>
      </div>
      <div class="col-md-6" style={color}>
        <h2 class="w3-wide">About Me</h2>
        <p class="w3-opacity"><i>We love music</i></p>
        <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       </div>
       </div>
      </div>
      */

        return(

          
       <div className="">
        <div className="row no-gutters">
            <div className="col-sm-6 ">
            <br></br>
            <div className="bioText">
              <h2 class="w3-wide">About Me</h2>
              <p class="w3-opacity"><i>We love music</i></p>
              <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
           
            </div>
            <div className="col-sm-6">
                <img src={profile} alt="" style={color2} width={"100%"} height={400} />
       
       </div>
       </div>
      
       
       </div>
     

        )
    }
}


export default AboutMe;