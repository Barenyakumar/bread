
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

        {/* <div
          className="d-flex justify-content-center "
          style={{ backgroundColor: "#7352FF",width:"100%", height: "65vh" , color:"white", fontSize:"30px" , fontFamily:"Sombra", position:"absolute" }}
        >
          <p className=" fs-1  " style={{ font:"Sombra", color:"white" ,width:"30rem", justifyContent: "center" }}>Start your day with the goodness of Yoga</p>
           <p className="title" style={{ width:"20rem"}}> Start your day with the goodness of Yoga </p>
        </div> */}

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
