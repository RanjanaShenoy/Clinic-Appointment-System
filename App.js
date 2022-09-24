import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import img1 from "./images/image_1.jpg";
import img2 from "./images/image_2.jpg";
import img3 from "./images/image_3.jpg";
import img4 from "./images/image_4.jpg";

class App extends Component {
  
  render(){
    return (
      <div className="page">
        <br/>
         <header className="Bar">Apollo Hospitals
         <p id="header-style-1">Your Family Healthcare</p>
           <p id="header-style-2">Phone: 08181 228390 | email: healthcare_shimoga@apollogroups.com &nbsp;&nbsp;</p>
         </header>
         <br/>
         <marquee direction="left" id="marke-style">Click here! annual report 2020-21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Free treatment for BPL Card holders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are hiring medical staff!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register for Arogya Seva card</marquee>
         <br/>
         <body>
         <br/>
         <marquee direction="right">
          <img src={img1} id="img-style"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={img2} id="img-style"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={img3} id="img-style"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={img4} id="img-style"/>
         </marquee>
         <br/>
         <br/>
        <HomePage/>
        <br/><br/>
        </body>
        </div>

       
    );
  }
}


export default App;
