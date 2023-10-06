import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
        <h2 className="hero-title my-3">Discover The Latest In Tech</h2>

      <div className="hero-container my-3 container-fluid">
        <div className="hero-items">
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6340/6340278_sd.jpg;maxHeight=640;maxWidth=550"
            alt="watch"
          />
          <Link className="title" to="" >Apple-Watch</Link>
        </div>
        <div className="hero-items">
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6340/6340292_sd.jpg;maxHeight=640;maxWidth=550"
            alt="watch"
          />
        </div>
        


     
    
      </div>
    </>
  );
};

export default Hero;
