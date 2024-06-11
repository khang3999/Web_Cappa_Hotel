import React from 'react';
import '../../css/loader.css'; // Create this file for styling
import { DotLottiePlayer } from "@dotlottie/react-player";

const Loader = () => (
  <div className="loader-container">
     <DotLottiePlayer src="images/loading-animation.json" autoplay loop />    
  </div>
);

export default Loader;
