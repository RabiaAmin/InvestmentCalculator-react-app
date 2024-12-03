import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

export const Caption = () => {
    useGSAP(()=>{
    
        gsap.from("#caption",{
        x: -1000,
        duration: 2,
        delay:0.5,
       
        });
    
      });
  return (
    <div id='caption'  className="bg-[#28322f] h-[100%] w-[25vw] rounded-md ml-4 mt-1 mr-2 mb-2 p-5">
    <h1 className="text-[2.5vmax] font-extrabold font-serif ">
      See Your Future Wealth Today
    </h1>
    <h3 className="text-[1.3vmax] text-[#83E6C0]">
      With Our Simple Investment Calculator
    </h3>{" "}
  </div>
  )
}
