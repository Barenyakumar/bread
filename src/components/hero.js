import React from 'react'
import pic1 from '../assets/check.png'
import Heroo from './heroo'
import Profile from './profile'
import Cards from './card'
import Footer from './footer'


export default function Hero(){
    
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
