import React from "react";
import design_icon from "../assets/images/design-icon.png"

const ServicesCards = () => {
  return (
    <div className="flex flex-col p-7 mt-6">
      <div className="
      card flex  flex-col gap-6 bg-grey-15 p-9 border border-grey-20
      
      ">
        <div className="flex  gap-4 items-center">
            <div className="bg-black p-5  rounded-radius-8"> 
            <img className="w-[40px] h-[40px] " src={design_icon} alt=""  />
            </div>
          
          <h3>Design</h3>
        </div>
        <div>
          <p className='
          text-left text-grey-90 pr-6 leading-7
          
          '>
            At Squareup, our design team is passionate about creating stunning,
            user-centric designs that captivate your audience and elevate your
            brand. We believe that great design is not just about aesthetics;
            it's about creating seamless and intuitive user experiences.
          </p>
        </div>
        <div className=" flex">
            <a href="#" className="bg-grey-30 text-white rounded-[6px] text-center w-[100%] text-[16px] py-3.5">Learn More</a>
        </div>
      </div>

      <div className="
      card flex  flex-col gap-6 bg-grey-15 p-9 border border-grey-20
      
      ">
        <div className="flex  gap-4 items-center">
            <div className="bg-black p-5  rounded-radius-8"> 
            <img className="w-[40px] h-[40px] " src={design_icon} alt=""  />
            </div>
          
          <h3>Design</h3>
        </div>
        <div>
          <p className='
          text-left text-grey-90 pr-6 leading-7
          
          '>
            At Squareup, our design team is passionate about creating stunning,
            user-centric designs that captivate your audience and elevate your
            brand. We believe that great design is not just about aesthetics;
            it's about creating seamless and intuitive user experiences.
          </p>
        </div>
        <div className=" flex">
            <a href="#" className="bg-grey-30 text-white rounded-[6px] text-center w-[100%] text-[16px] py-3.5">Learn More</a>
        </div>
      </div>


     
    </div>
  );
};



export default ServicesCards;
