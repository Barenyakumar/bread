import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import { Instagram , Facebook, Youtube, Twitter } from 'react-bootstrap-icons'


export default function Footer(){

    return(
        <section style={{backgroundColor:"#7352FF" , height:"25vh",}}>
            <div className="row justify-content-between">
                <div className="col-4 mt-5 ms-3 fw-bold " style={{color:"white"}}><p className=" fs-4" >Powered by bread</p>
                <button className="btn" style={{color:"white"}}>
                  {" "}
                  <Instagram />{" "}
                </button>
                <button className="btn" style={{color:"white"}}>
                  {" "}
                  <Facebook />{" "}
                </button>
                <button className="btn" style={{color:"white"}}>
                  {" "}
                  <Youtube />{" "}
                </button>
                <button className="btn" style={{color:"white"}}>
                  {" "}
                  <Twitter />{" "}
                </button>
                </div>
                <div className="col-3  mt-5 ms-5" style={{color:"white"}}><span><AiOutlineCopyrightCircle/></span> Bread 2021 All rights reserved
                <div className="mt-4" >
                <a href="#" className="btn " style={{color:"white"}}>Privacy</a>
                <a href="#" className="btn " style={{color:"white"}}>About</a>
                <a href="#" className="btn " style={{color:"white"}}>Time</a>
                </div>
                
                </div>
            </div>
           
        </section>
    )
}