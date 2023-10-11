import Carousel from './components/carousel';
import './slider.css';

// function App() {
//   return (
//     <div>
//       <h1>HELLO</h1>
//       <Carousel id="slider-1" />
//       <Carousel id="slider-2" />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import './slides.css';



function App() {

  const [isVideoMuted, setIsVideoMuted] = useState(true); // Primary mute button
  const [isVideoPlaying, setIsVideoPlaying] = useState(true); // To play the video on mouse movements
  const [isSlideVideoMuted, setIsSlideVideoMuted] = useState(true); // To play the slide video on mouse movements

  // Function to pause the video while scrolling through the events
  const toggleSlideMute = () => {
    setIsSlideVideoMuted(!isSlideVideoMuted);
  };

  // Function to pause the video while scrolling through the events
  const toggleVideoPlaying = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  // Function to mute and unmute the video
  const toggleMute = () => {
    setIsVideoMuted(!isVideoMuted);
  };

  // Function to play the video once the mouse moves
  const toggleVideo = () => {
    setIsVideoPlaying(true);
  };

  
  return (
    
    <div className="body">

      {/* Menu or Navigation Bar */}
      <div className="navbar" onMouseEnter={toggleVideo}>
        <a href="#ausec">
          <img
            className="logo"
            src="https://drive.google.com/uc?export=view&id=1_oq4l8QMlKmNihexLrWxW0-5Rfwp8wwU"
            alt="Logo"
          />
        </a>
        <a href="#home" className="space">
          Home
        </a>
        
        <a href="#about-us" className="space">
          About Us
        </a>
      </div>

      {/*  Promo Video Container */}
      <div className="container">
         
         {/*  Investiture Promotional Video */}
        <video className="Investiture1" preload="auto" muted={isVideoMuted}  autoPlay={isVideoPlaying} loop >
          <source
            src="https://drive.google.com/uc?export=download&id=1gEvm_Zkf1VukB3kB1WPRvQQN4-mZynR-"
            type="video/mp4"
          />
        </video>

        {/*  Enantra Logo */}
        <img id="overlay-image" class="imgg" src="https://drive.google.com/uc?export=view&id=1AvmcdE3ltY3LTX449WJVqhUzt_-G0uK3"/>
        
        {/*  Enantra Gist */}
        <div class="overlay-text">
          <p>Enantra is an AU courant entrepreneurship event aimed at envisioning<br/>
          and empowering the youth with the spirit of entrepreneurship and the art<br/>
          of corporate play.
          </p>
        </div>
        <br/>

        {/*  Instagram and AUSEC official page links */}
        <div class="hello">
          <a href="https://www.instagram.com/_ausec_/" target="_blank">
            <button class="glow-button" type="button" value="insta" >
              <div class="button_text">
                <img class="icn_size sizing"  src="https://drive.google.com/uc?export=view&id=1z-QVBlmroXCFrleAeEby-RVadcL79W7M"/>
                Instagram
                </div>
            </button> 
          </a>
          <a href="https://auced.com/ausec/" target="_blank">
            <button class="glow-button2" type="button" value="More info">
              <div class="button_text">
                <img class="icn_size sizing"  src="https://drive.google.com/uc?export=view&id=1nO_DPHSyUVRezuACV5k01tIx02TmHZDa"/>
                More info
              </div>
            </button>
          </a>
        </div> 

        {/*  Unmute button */}
        
          <button class="volume_button" id="unmute-button" onClick={toggleMute} >
            <img 
            className={`icn_size volume ${isVideoMuted ? 'muted' : ''}`} 
            id="speaker-icon"  
            src={!isVideoMuted ? 'https://drive.google.com/uc?export=view&id=1tGY1TLhfWO2rCReC1b9o8cFSTFnLRusc' : 'https://drive.google.com/uc?export=view&id=18s8rMz84keNue9BYu2pyln2l6HqdPpca'}
            />
          </button>
        
      
        

        {/* Gradient to blend in the video */}
        <div class="trans-slideshow"></div>
      
      </div>

      

      {/* Container to display Events */}
      <div class="Events-box" onMouseEnter={toggleVideoPlaying} onMouseLeave={toggleVideoPlaying} >
      <Carousel/>
      </div>

      {/*6DT */}
      <div class="Event_Category" onMouseEnter={toggleVideoPlaying} onMouseLeave={toggleVideoPlaying}>
        <div class="Event_category_tittle"> 6 Degree Talks</div>
        <div class="Carousel_Placer">

        

          <div class="slide">
            
            {/*Slide Image*/}
            <img class="slide_img"  src="https://drive.google.com/uc?export=view&id=1we_hJ-U0_C1j1s_26Ufi9FHgpEFcXpdC"/>

            {/*Hover div box*/}
            <div class="divbottom" >

              {/*Promo video of 6DT*/}
              <video className="slide_video" preload="auto" autoPlay muted={isSlideVideoMuted} loop >
                <source
                  src="https://drive.google.com/uc?export=download&id=1gEvm_Zkf1VukB3kB1WPRvQQN4-mZynR-"
                  type="video/mp4"
                />
              </video>

              {/*Drop down button*/}
              <button class="dropdown_button" id="unmute-button" >
                <img 
                className="icn_size dropdown"
                src="https://drive.google.com/uc?export=view&id=1AThSW1hjMviTJnrKddyji0mabb4RLqd1"
                />
              </button>

              {/*Guest list button*/}
              <div class="guest_list">
                <a href="https://en.wikipedia.org/wiki/Dhruv_Vikram">
                  <img  class="guest"
                    src="https://drive.google.com/uc?export=view&id=11bZkrkThn2x_d3pvVWVjT7NlKUYXQP6Z"
                  />
                </a>
                
                <a href="https://en.wikipedia.org/wiki/Vijay_Deverakonda">
                  <img  class="guest"
                  src="https://drive.google.com/uc?export=view&id=1Bs389ZSRu8hZYMGKOC2gef1NSXaeUKVk"
                  />
                </a>
                
                
              </div>

              {/*Volume button*/}
              <button class="volume_button slide_volume" id="unmute-button" onClick={toggleSlideMute} >
                <img 
                className={`icn_size volume ${isSlideVideoMuted ? 'muted' : ''}`} 
                id="speaker-icon"  
                src={!isSlideVideoMuted ? 'https://drive.google.com/uc?export=view&id=1tGY1TLhfWO2rCReC1b9o8cFSTFnLRusc' : 'https://drive.google.com/uc?export=view&id=18s8rMz84keNue9BYu2pyln2l6HqdPpca'}
                />
              </button>

              {/*tags*/}
              <div class="tags">
                
              </div>

            </div>

          </div>
          
        </div>
      </div>
         
      <div class="Event_Category" >
        <div class="Event_category_tittle"></div>
        <div class="Carousel_Placer">
          
        </div>
      </div>

    </div>
  );
}

export default App;