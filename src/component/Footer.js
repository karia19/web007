
import React from 'react';
import './footer.css';


class Footer extends React.Component {


    render() {
        const ToTop = () => {
            window.scrollTo(0,0)
            return null;
        }


        return(
            <footer className="text-center">
            <div className="top">
              <a onClick={ToTop}><span className="fa fa-chevron-up"></span></a> 
            </div>
          

            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-flickr"></a>
            <a href="#" class="fa fa-youtube"></a>
             <br></br>
           
           
            </footer>


        )
    }
}

export default Footer;