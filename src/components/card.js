 import React from 'react'
 import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
 import '@brainhubeu/react-carousel/lib/style.css';
 import { Card,Button } from 'react-bootstrap';
 import data from './data'
 
 export default function Cards(){
     const offers =data;

     return(
        //  <div className="d-flex  "
        //  style={{ backgroundColor: "#ffffff",width:"100%", height: "65vh" , color:"black", fontSize:"30px" , fontFamily:"Sombra", position:"absolute" }}>
        //   <p className="title" style={{ width:"20rem", marginBottom:"33%" , textAlign:"center"}}> Start your day with the goodness of Yoga</p>
<Carousel
     
     plugins={[
    'arrows',
    'infinite',
    {
      resolve: slidesToShowPlugin,
      options: {
       numberOfSlides: 3
      }
    },
  ]}
  breakpoints={{
    640: {
      plugins: [
        'arrows',
        'infinite',
       {
         resolve: slidesToShowPlugin,
         options: {
          numberOfSlides: 1
         }
       },
     ]
    },
    900: {
      plugins: [
        'arrows',
        'infinite',
       {
         resolve: slidesToShowPlugin,
         options: {
          numberOfSlides: 3
         }
       },
     ]
    }
  }}
  style={{backgroundColor:"#121212" ,}}

>
{offers.map((offer,offerIndex)=>{
        const {id,image,day,time} = offer;
        return(
            <Card style={{ width: '18rem',marginTop:"3%", }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{day}
                    </Card.Title>
                    <Card.Title>{time}</Card.Title>
                    
                    <Button variant="primary"> Register</Button>
                </Card.Body>
            </Card>
        )
    })}
</Carousel>
// </div>

     );
 }