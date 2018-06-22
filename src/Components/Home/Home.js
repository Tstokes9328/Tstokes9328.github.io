import React, { Component } from 'react'
import {Parallax} from 'react-parallax';
import FontAwesome from 'react-fontawesome';

//Styling
import 'reset-css';
import './Home.css';

//Components
import Navbar from '../Navbar/Navbar';

export default class Home extends Component {
  
  render() {
    return (
      <div>
        
        {/* Parallax Header */}
        <Parallax 
        blur={.8}
        strength={200}
        bgImage={require('../../assets/skatepark-background.jpg')}
        bgImagAlt={'background-parallax-image'}
        bgHeight={'120vh'}
        bgWidth={'100rem'}
        >
          <div style={{height: '100vh'}}>
            <div className="parallax-title-container">
              <h1>TAYTE STOKES</h1>
                <hr />
              <h2>Web Developer</h2>
            </div>

            <div className="parallax-down-arrow">
              <div className="down-arrow"/>
            </div>
          </div>
        </Parallax>

        {/* Navbar */}
        <Navbar />

        {/* About Section */}
        <div className="about-section-container">

          <div className="about-section-title">
            <h1>ABOUT</h1>
          </div>

          <div className="about-section-picture">
          </div>

          <div className="about-section-intro">
            <h1>Hey, let me tell you about myself!</h1>
          </div>

          <div className="about-section-bio">
              <p>My name is Tayte Stokes. I am a web developer based in Lehi, Utah. I', just a simple guy who loves to do not-so-simple things. I found my passion for coding from building gaming computers, is that weird? I love being able to create something amazing from almost nothing and when I found out coding was pretty much that, that's what pulled me in.</p><br />

              <p>On top of technology and coding, my life is filled with many different passions. I love being outdoors and will never miss a chance to go camping! I grew up skateboarding which taught so many valuable lessons that I can apply to every aspect of my life and will be forever grateful!</p><br />

              <p>I'm also a serious food person so if you ever in the area and need someone to grab a slice of pizza with, let me know!</p>
          </div>
        </div>

        {/*  */}

      </div>
    )
  }
}
