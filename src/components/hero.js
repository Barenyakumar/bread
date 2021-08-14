
import React from 'react'
// import MultiCarouselPage from './card'
// import pic from '../assets/hero.png'
import pic1 from '../assets/check.png'

// import data from './data'
// import Iframe from 'react-iframe'
import Heroo from './heroo'
import Profile from './profile'
import Cards from './card'
import Footer from './footer'


export default function Hero(){
    // const offers = data;
    return (
      <div className="wraps">

        

          <Heroo/>

          <Profile />
        
        <div className="img" >
        <img src={pic1} alt="" className="img-fluid" />
        </div>
        

        <div
          className="row"
          style={{ background: "black", height: "50vh" }}
        ></div>

        <div
          className="row"
          style={{ background: "black", height: "70vh" }}
          
        ><p className="text-center fs-1" style={{color:"white"}}>BROWSE ALL MY OFFERINGS</p> <Cards/></div> 

        <Footer/>


      </div>
    );
    
}
