import React from 'react'
import prof from '../assets/profile.png'
import { Instagram , Facebook, Youtube, Twitter , Linkedin, GeoAltFill, ChatRightFill} from 'react-bootstrap-icons'


export default function Profile(){

    return(
       
        <div className="container-fluid" style={{backgroundColor: "#ffffff" , width: "50vw", position:"absolute" ,        marginTop:"10%", marginLeft:"25%"}}>
          <div className="row">
            <div className="col-2">
            {" "}
              <img src={prof}  alt="profile pic here" />{" "}
            </div>
          <div className="col-md-4 col-sm-2 ">
            <div className="row ">
              <div className="col  ">
                <button className="btn btn-outline-primary " type="submit">
                  {" "}
                  Yoga
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-primary" type="submit">
                  {" "}
                  Wellness
                </button>
              </div>
              <div className="col mt-2">
                <button className="btn btn-outline-primary" type="submit">
                  {" "}
                  Fitness
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div className="row  offset-md-4">
              <button className="btn btn-outline-primary " type="submit">
                {" "}
                Book Trial 
              </button>
            </div>
            <div className="row mt-2  offset-md-4">
              <button className="btn btn-outline-primary" type="submit">
                {" "}
                Contact Me
              </button>
            </div>
          </div>

        </div>

        {/* 2nd row */}
        <div className="row mt-4" id="para">
          <h2>Jane Doe</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            natus similique? Accusantium dolor ipsa rerum hic at laborum
            officia enim corrupti officiis quos aliquam minus sed ex iusto
            maxime, ut asperiores voluptas. Tempore eaque accusantium
            facilis, voluptatum quod doloribus totam?
          </p>
          <div className="wrap-icons mb-4">
            <div className="row">
              <div className="col-1">
                <button className="btn">
                  {" "}
                  <Instagram />{" "}
                </button>
              </div>
              <div className="col-1">
                <button className="btn">
                  <Facebook />
                </button>
              </div>
              <div className="col-1">
                <button className="btn">
                  <Youtube />
                </button>
              </div>
              <div className="col-1">
                <button className="btn">
                  <Twitter />
                </button>
              </div>
              <div className="col-1">
                <button className="btn">
                  <Linkedin />
                </button>
              </div>
              <div className="col-1">
                <button className="btn">
                  <Instagram />
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-auto">
              <GeoAltFill />
            </div>
            <div className="col-auto ">
              <h5>Lives in</h5>
            </div>
            <div className="col-auto">
              <a
                href="#para"
                className="btn btn-secondary btn-lg disabled btn-sm"
                tabindex="-1"
                role="button"
                aria-disabled="true"
              >
                New Delhi
              </a>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-auto">
              <ChatRightFill />
            </div>
            <div className="col-auto ">
              <h5>Speaks</h5>
            </div>
            <div className="col-auto">
              <a
                href="#para"
                className="btn btn-secondary btn-lg disabled btn-sm"
                tabindex="-1"
                role="button"
                aria-disabled="true"
              >
                English
              </a>
            </div>
            <div className="col-auto">
              <a
                href="#para"
                className="btn btn-secondary btn-lg disabled btn-sm"
                tabindex="-1"
                role="button"
                aria-disabled="true"
              >
                Hindi
              </a>
            </div>
            <div className="col-auto">
              <a
                href="#para"
                className="btn btn-secondary btn-lg disabled btn-sm"
                tabindex="-1"
                role="button"
                aria-disabled="true"
              >
                {" "}
                Punjabi
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="row"></div>
            <div className="col-5">
              <h4>Check out my video about 30 min yoga for beginners</h4>{" "}
              <h5 className="mt-5 text-primary">Contact me</h5>
            </div>

            <div className="col-7">
              {" "}
              <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/_gaU47NVUPs" allowfullscreen></iframe>
              </div>



              
            </div>
          </div>
          <div className="row mt-5 ms-1 border rounded">
            <p className="mt-4">
              Subscribe to my profile and never miss another update from me.
            </p>
            <div className="col-8">
              <form>
                <div className="input-group mb-4 ">
                  <input
                    type="text"
                    id="email"
                    class="form-control"
                    placeholder="Enter your Email"
                  />
                </div>
              </form>
            </div>
            <div className="col-4">
              <button className="btn btn-primary " type="submit">
                {" "}
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    

    )
}