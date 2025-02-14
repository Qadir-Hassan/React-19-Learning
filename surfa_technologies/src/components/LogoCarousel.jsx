import React from "react";

import zapier_logo from "../assets/images/zapier-logo.png";
import spotify_logo from "../assets/images/spotify-logo.png";
import zoom_logo from "../assets/images/zoom-logo.png";
import slack_logo from "../assets/images/slack-logo.png";
import amazon_logo from "../assets/images/amazon-logo.png";
import adobe_logo from "../assets/images/adobe.png";

const logos = [
  { imgPath: zapier_logo, alt: "zapier logo" }, // Added alt text
  { imgPath: spotify_logo, alt: "spotify logo" }, // Added alt text
  { imgPath: zoom_logo, alt: "zoom logo" }, // Added alt text
  { imgPath: slack_logo, alt: "slack logo" }, // Added alt text
  { imgPath: amazon_logo, alt: "amazon logo" }, // Added alt text
  { imgPath: adobe_logo, alt: "adobe logo" }, // Added alt text

];

const LogoCarousel = () => {
  return (
    <div className="
    flex items-center justify-center  gap-x-0.5 gap-y-0.5 flex-wrap
    md:justify-center mt-2.5 pt-7
    lg:justify-center
   
    
    
    ">
      {logos.map(
        (
          item,
          index // Added index for key prop
        ) => (
          <div
            key={index} // Important: Add a unique key prop
            className="
            icon-box bg-grey-15 py-7 px-9 flex justify-center items-center self-stretch w-[45%] border border-grey-10
            md:w-[30%] justify-items-start md:items-stretch
            lg:w-[15%] lg:self-stretch
        
            
            "
        
            
          >  
            <img src={item.imgPath} alt={item.alt} />
          </div>
        )
      )}
    </div>
  );
};

export default LogoCarousel;
