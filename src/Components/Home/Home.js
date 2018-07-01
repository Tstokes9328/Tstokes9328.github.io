import React, { Component } from "react";
import { Parallax } from "react-parallax";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Bootstrap
import {Carousel} from 'react-bootstrap';

//Styling
import "reset-css";
import "./Home.css";

//Components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Parallax Header */}
        <Parallax
          blur={0.8}
          strength={200}
          bgImage={require("../../assets/skatepark-background.jpg")}
          bgImagAlt={"background-parallax-image"}
          bgHeight={"120vh"}
          bgWidth={"100rem"}
        >
          <div style={{ height: "100vh" }}>
            <div className="parallax-title-container">
              <h1>TAYTE STOKES</h1>
              <hr />
              <h2>Web Developer</h2>
            </div>

            <div className="icon-container">
              <a href={"https://github.com/Tstokes9328"}>
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <a href={"https://www.linkedin.com/in/tayte-stokes-1a545b165/"}>
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
            </div>

            <div className="parallax-down-arrow">
              <div className="down-arrow" />
            </div>
          </div>
        </Parallax>

        {/* Proifle pic container */}
        <div className="about-me-container">
          <div className="profile-picture" />
        </div>

        {/* Bio Ccontainer */}
        <div className="bio-container">
          <h1>Hey, I'm Tayte!</h1>
          <p>I'm a simple guy who loves to do not so simple things. When I'm not hunched over my computer writing code you can catch me kicking butt in Super Smash Bros, burying my face in a killer book, or spending some time doing a couple of my hobbies.</p>
        </div>

        <div className="bottom-triangle"></div>

        {/* Hobbies */}
        <div className="hobbies-container">
          <div className="skateboard-hobby-container">
            <div className="skateboard-logo-container">
              <img
                src={"https://image.flaticon.com/icons/svg/66/66512.svg"}
                alt="sk8board"
              />
            </div>
            <h1>Skateboarding</h1>
            <p>I love skateboarding. It's been with me almost my whole life.</p>
          </div>

          <div className="snowboard-hobby-container">
            <div className="snowboard-logo-container">
              <img
                src={"https://image.flaticon.com/icons/svg/37/37714.svg"}
                alt="snowboard"
              />
            </div>
            <h1>Snowboarding</h1>
            <p>
              When the winter hits you can catch me on the slopes snowboarding
            </p>
          </div>

          <div className="videogame-hobby-container">
            <div className="videogame-logo-container">
              <img
                src={
                  "http://getdrawings.com/images/video-game-controller-drawing-27.png"
                }
                alt="controller"
              />
            </div>
            <h1>Video Games</h1>
            <p>Video games are something I'll never grow out of</p>
          </div>

          <div className="music-hobby-container">
            <div className="music-logo-container">
              <img
                src={"https://image.flaticon.com/icons/svg/32/32328.svg"}
                alt="music"
              />
            </div>
            <h1>Music</h1>
            <p>I'm bad at making it but I love listening to it</p>
          </div>
        </div>

          <div className="bottom-triangle-two"></div>

        {/* What I Do Section */}
        <div className="what-I-do-container">
          <h1>Here's what I do</h1>
          <div className="front-end-container">
            <div className="front-end-logo-container">
              <img src={require("../../assets/front-end-logo.png")} />
            </div>

            <h1>Front-End Development</h1>
            <p>
              Writing clean and efficiant code is what I strive for when
              developing in the front-end enviornment. My main focus is
              JavaScript's library, React and Redux.
            </p>
          </div>

          <div className="back-end-container">
            <div className="back-end-logo-container">
              <img src={require("../../assets/backend-logo.png")} />
            </div>

            <h1>Back-End Development</h1>
            <p>
              Server side code is some of my favorite. A NodeJs enviornment is
              where I like to do most of the dirty work and heavy lifting for my
              sites and applications.
            </p>
          </div>

          <div className="end-point-container">
            <div className="end-point-logo-container">
              <img src={require("../../assets/testing.png")} />
            </div>

            <h1>Unit & End Point Testing</h1>
            <p>
              Writing bug-free code is critical to a successful website or
              application. I try to achieve this by practicing test driven
              development (TDD)
            </p>
          </div>
        </div>

         <div className="bottom-triangle-three"></div>
        
        {/* Skills Section */}
        <div className="skills-section">
          <h1>Skills</h1>

          <div className="row-one">
            <div className="row-one-box-one">
              <img src={"http://tpeschke.com/images/javascript.svg"} />
              <h1>JAVASCRIPT</h1>
            </div>

            <div className="row-one-box-two">
              <img src={"http://tpeschke.com/images/react.svg"} />
              <h1>REACT</h1>
            </div>

            <div className="row-one-box-three">
              <img src={"http://tpeschke.com/images/redux.svg"} />
              <h1>REDUX</h1>
            </div>
          </div>

          <div className="row-two">
            <div className="row-two-box-one">
              <img src={"http://tpeschke.com/images/css3-color.svg"} />
              <h1>CSS 3</h1>
            </div>

            <div className="row-two-box-two">
              <img src={"http://tpeschke.com/images/html5-color.svg"} />
              <h1>HTML 5</h1>
            </div>

            <div className="row-two-box-three">
              <img src={"http://tpeschke.com/images/api.svg"} />
              <h1>RESTFUL API</h1>
            </div>
          </div>

          <div className="row-three">
            <div className="row-three-box-one">
              <img src={"http://tpeschke.com/images/nodejs.png"} />
              <h1>NODE JS</h1>
            </div>

            <div className="row-three-box-two">
              <img src={"http://tpeschke.com/images/express.png"} />
              <h1>EXPRESS JS</h1>
            </div>

            <div className="row-three-box-three">
              <img src={"http://tpeschke.com/images/azure-sql-database.png"} />
              <h1>MASSIVE</h1>
            </div>
          </div>

          <div className="row-four">
            <div className="row-four-box-one">
              <img src={"http://tpeschke.com/images/postgresql.svg"} />
              <h1>POSTGRESQL</h1>
            </div>

            <div className="row-four-box-two">
              <img
                src={
                  "https://pbs.twimg.com/profile_images/599259952574693376/DMrPoJtc_400x400.png"
                }
              />
              <h1>PASSPORT</h1>
            </div>

            <div className="row-four-box-three">
              <img src={"http://tpeschke.com/images/githubicon.svg"} />
              <h1>GITHUB</h1>
            </div>
          </div>

          <div className="row-five">
            <div className="row-five-box-one">
              <img src={"http://tpeschke.com/images/git.svg"} />
              <h1>GIT</h1>
            </div>

            <div className="row-five-box-two">
              <img
                src={
                  "http://tpeschke.com/images/postman-logo-F43375A2EB-seeklogo.com.png"
                }
              />
              <h1>POSTMAN</h1>
            </div>

            <div className="row-five-box-three">
              <img src={"http://tpeschke.com/images/jest.svg"} />
              <h1>JEST</h1>
            </div>
          </div>
        </div>

        <div className="bottom-triangle-four"></div>

        {/* Portfolio Section */}
        <div className="portfolio-container">
            <div className="portfolio-title-container">
                <h1>Portfolio</h1>
            </div>
            
            <div className="portfolio-project-one-container">
            <div className="portfolio-title-info-container">
                <div className="project-one-title">
                  <h1>Utah Car Meet</h1>
                </div>

                  <div className="project-one-info">
                    <p>Utah Car Meet is a Full-Stack web application I created to make an easier way for car enthusiasts in Utah to host and attend car meets.</p>
                    <br />
                    <p>On the front-end I used Javascript, React, and Redux to create a user friendly application. The back end consists of NodeJs, ExpressJs, and Massive to handle user data and connect to the database with PostgreSQL</p>
                  </div>
                  </div>

                  <div className="project-one-display">
                    <Carousel style={{border: '3px solid #F1ECE9'}}>
                      <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={require('../../assets/utahcarmeet.png')} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={require('../../assets/dashboardutm.png')} />
                      </Carousel.Item>
                    </Carousel>
                  </div>
              </div>
        </div>


        <div className="contact-container">
          <h2>
            <FontAwesomeIcon icon="envelope" /> Taytestokes9328@gmail.com
          </h2>
          <h3>
            <FontAwesomeIcon icon="mobile-alt" /> 801-664-9328
          </h3>
        </div>


        {/* Footer */}
        <Footer />
      </div>
    );
  }
}
