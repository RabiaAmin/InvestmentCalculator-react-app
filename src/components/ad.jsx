import React from 'react'
import financeAd from "../assets/finance-ad.png";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
export const Ad = () => {
    useGSAP(()=>{
    
        gsap.from("#ad",{
        x: -1000,
        duration: 2,
        delay:0.5,
       
        });
    
      });
  return (
    <div id='ad' className="relative h-[100%] w-[34vw] rounded-md ml-4 mr-1 overflow-hidden">
    <img
      className="object-fill h-full w-full"
      src={financeAd}
      alt="money"
    />
    <button className="absolute bottom-10 left-9   border-[#28322F] border-2 hover:bg-[#28322F] text-[#28322F] hover:text-[#83E6C0] hover:scale-125 px-3 py-1 rounded shadow transition ease-in duration-300  delay-300">
      Contact us
    </button>
  </div>
  )
}
