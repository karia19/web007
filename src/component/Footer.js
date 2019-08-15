/* eslint-disable jsx-a11y/anchor-has-content */

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
              <p onClick={ToTop}><span className="fa fa-chevron-up"></span></p> 
            </div>
          

            <a href="https://www.facebook.com/Pekka-Parviainen-Visual-Artist-1515775352007206/" className="fa fa-facebook"></a>
            <a href="https://www.flickr.com/photos/pparvi" className="fa fa-flickr"></a>
            <a href="https://www.youtube.com/channel/UCQtPt0WWVwQUii8NkcrKKFQ" className="fa fa-youtube"></a>
            <a href="https://www.instagram.com/pekka_parviainen_visual_artist/" className="fa fa-instagram"></a>
             <br></br>
           
           
            </footer>


        )
    }
}

export default Footer;