import React from 'react';
import './Cv.css'
import kuva from '../imagesFronpage/logomusta.jpg'

class Cs extends React.Component {


    render () {
       

        return (
            <div>
            <img className="imageC" width={200} src={kuva} alt="" />
            <h2 className="text-center">Resume</h2>
            <br></br>
               <div  className="row">
                 <div className="col-sm-4">
                
                 <i className="fa fa-graduation-cap"></i>
                   <ul >
                   <h2>Opinnot</h2>
                   
                   <br></br>
                     <li>Lahden Ammattikorkeakoulu, Taide-ja muotoiluinstituutti 		2010-2012</li>
                     <li>Suomen kulttuurirahaston muotokuvakurssi, Turku		        2011</li>
                     <li>Pietarin I.E. Repinin instituutin kuvataidekoulutus, Kotka 	2006-2007</li>
                     <li>Taidemetalli ja visuaalinen viestintä, Adulta Järvenpää 		2004-2005</li>
                     <li>Pekka Halosen Akatemia, Kuva- ja mediataide 				    2000-2004 </li>
                     <li>Ylioppilas, Järvenpään lukio					                2000
                     </li>
                   </ul>
                  
                   <i className="fa fa-user-o"></i>
                   <ul >
                   <h2>Opetustoimet ja muut työtehtävät</h2>
                   
                   <br></br>
                     <li>Taidemaalariliitto ry, Teosvälityksen projektipäällikkö			2018-</li>
                     <li>Studio Pegaso, muotokuvamaalaus					            2015-2019</li>
                     <li>Alfa-Art taideoppilaitos, mallipiirustus ja muotokuva 			2009-2018</li>
                     <li>Keuda Järvenpää, aikuiskoulutus, maalaus ja piirtäminen 		2011-2012</li>
                     <li>Hämeenlinnan AMK, Lepaa, avustava opettaja 				    2004-2006</li>
                     <li>HTS:n lasten ja nuorten kuvataidekoulu, avustaja 			2005-2006</li>
                   </ul>

                   <i className="fa fa-user-o"></i>
                   <ul >
                   <h2>Apurahat ja stipendi</h2>
                   
                   <br></br>
                      <li>Suomen kulttuurirahasto							         2018 </li>
                      <li>Suomen kulttuurirahasto, Uudenmaan rahasto				         2013</li>
                      <li>Suomen Kulttuurirahasto							         2012</li>
                      <li>aidekeskus Salmelan kesän nuoren taiteilijan stipendi, Veikkaus Oy         2009</li>
                      <li>Mia ja Martin Tiusasen rahasto, opiskelustipendi 			         2007</li>
                      <li>Järvenpään kaupungin kohdeapuraha 					         2003</li>
                    
                   </ul>

                 </div>
                 
                 <hr></hr>
                 <div className="col-sm-4">
                 <i className="fa fa-picture-o"></i>
                 <ul >
                 <h2>Yksityisnäyttelyt</h2>
                 
                 <br></br>
                   <li>Verso – maalauksia ja piirroksia, Galleria Kajaste, Oulu		         2018</li>
                   <li>Diversity – maalauksia, Galleria Bronda, Helsinki 		  2018</li>
                   <li>Unity – maalauksia, Galleria Pato, Kuusankoski				         2017</li>
                   <li>In Summa – maalauksia ja grafiikkaa, Galleria Bronda, Helsinki	         2016</li>
                   <li>Absence – grafiikkaa, Galleria Arthur, Helsinki				         2016</li>
                   <li>Presence – grafiikkaa, Galleria Pato, Kuusankoski			         2016</li>
                   <li>Ilusio – grafiikkaa, Verlan tehdasmuseo, Verla				         2015</li>
                   <li>Natura – maalauksia ja grafiikkaa, Galleria Bronda, Helsinki 		         2014</li>
                   <li>Malmitalon Galleria, Helsinki						         2013</li>
                   <li>Arabianrannan kirjasto, Helsinki 						         2013</li>
                   <li>Luonnontila – maalauksia ja grafiikkaa, Galleria Kapriisi, Tampere 	         2013</li>
                   <li>Light vs. Dark – valokuvia, Galleria Rikhard, Helsinki			         2012</li>
                   <li>Maalauksia ja grafiikkaa, Galleria Aila Seppälä, Lahti			         2011</li>
                   <li>Dialogi – maalauksia, Ava Galleria, Helsinki 				         2011</li>
                   <li>Murtumia – maalauksia ja piirroksia, Malmitalon Galleria, Helsinki 	         2007</li>
                   <li>Maalauksia, Galleria Oma Huone, Helsinki 				         2006 </li>
                  
                 </ul>
                 <i className="fa fa-picture-o"></i>
                 <ul >
                 <h2>Teoksia kokoelmissa</h2>
                 
                 <br></br>
                   <li>Datawell Oy</li>
                   <li>Fellmannia, Lahti</li>
                   <li>Mikkelin kunta</li>
                   <li>Mäntyharjun kunt</li>
                   <li>Oulun taidemuseo</li>
                   <li>Paulon säätiö</li>
                   <li>Suomen lehtiyhtymä</li>
                   <li>Suomen Taideyhdistys</li>
                   <li>Taidekeskus Salmelan kokoelma</li>
                   <li>Varamiespalvelu-yhtiöt</li>
                   <li>Vaalijalan kuntayhtymä</li>
                   <li>Yksityiskokoelmat</li>
                   
                  
                 </ul>
                 
              
                
               
                   
                 </div>
                
                 <div className="col-sm-4">
                 <i className="fa fa-users"></i>
                 <ul >
                 <h2>Yhteisnäyttelyt</h2>
                 
                 <br></br>
                   <li>Kivi Paperi Vedos – Pro Litografia, Taidekeskus Mältinranta, Tampere       2019</li>
                   <li>Over the rainbow, Galleria G, Helsinki					         2015</li>
                   <li>Verlan tehdasmuseo, Jaala 						         2013</li>
                   <li>Taide on totta - kivilitografianäyttely, Savonlinnan maakuntamuseo          2011</li>
                   <li>Argos Art, Stockmann, Helsinki 						         2011</li>
                   <li>Valoa - Ryhmä 6, Stoan galleria, Helsinki 				         2010</li>
                   <li>Ryhmä 6, Hangon kaupungintalon galleria				         2009</li>
                   <li>Ryhmä 6, Järvenpää-talo 							         2008</li>
                   <li>Ryhmä 6, Hangon kaupungintalon galleria 			 	         2007</li>
                   <li>Aava - ryhmä, Seinäjoen Taidehalli 					         2006</li>
                   <li>Janne & Pekka Parviainen, Savoy-teatteri, Helsinki  			         2005</li>
                   <li>Heini Maaranen, Janne Parviainen & Pekka Parviainen, Järvenpää-talo      2005</li>
                   <li>Ryhmä motivazione, Järvenpää-talo 					         2005</li>
                   <li>Ryhmä 6, Galleria Allinna, Riihimäki 					         2005</li>
                   <li>Pekka Halosen Akatemian päättötyönäyttely, Kaapelitehdas, Helsinki        2004</li>
                   <li>Janne & Pekka Parviainen, Stoan galleria, Helsinki 			         2003</li>
                   <li>Kolme, Galleria Alli, Kerava 						         2003</li>
                 </ul>
                 <i className="fa fa-users"></i>
                 <ul >
                 <h2>Ryhmä- ja yhteisnäyttelyt ulkomailla</h2>
                 
                 <br></br>
                   <li>Villa Des Arts, Casablanca, Marokko 					         2017</li>
                   <li>Diez, kulttuurikeskus, Saksa						         2017</li>
                   <li>Kölnin kulttuurikeskus, Köln, Saksa					         2017</li>
                   <li>Nassau, kaupunginmuseo, Saksa						         2017 </li>
                   <li>Suomalaista litografiaa, Villa Des Arts, Rabat, Marokko 		         2016</li>
                   <li>International Lithographic Symposium, Tidaholm, Ruotsi		         2015</li>
                   <li>Lihulan musiikkipäivät, Lihula,Viro					         2014</li>
                   <li>Palazzo Ducale, Genova, Italia 						         2013</li>
                   <li>Novosibirskin grafiikan triennale, Venäjä				         2012</li>
                   <li>Graphics festival, Yekaterinburg, Venäjä 				         2012</li>
                   <li>Ural Division of Fortum, Tyumen, Venäjä 				         2012</li>
                   <li>Baltian maiden grafiikan biennale, Kaliningrad, Venäjä 		         2011</li>
                   <li>Museu Forte Copacabana, Rio de Janeiro, Brasilia 			         2010</li>
                   <li>Galeria do Palacio, Portugal 						         2009</li>
                   <li>Ryhmä Motivazione ,Arkeologinen museo, Ventimiglia, Italia 		         2005</li>
                   <li>Susanna Autio, Janne Parviainen, Pekka Parviainen, Jogeva, Viro 	         2005</li>
                   
                 </ul>
                 
                 
                 </div>
                 </div>
               
               
              
            </div>
        )
    }
}


export default Cs;