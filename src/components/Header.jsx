import React from 'react'
import logo from "../assets/investment-calculator-logo.png"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

export const Header = () => {

  useGSAP(()=>{
    
    gsap.from("#header_div",{
    x: -1000,
    duration: 2,
    delay:0.5,
    });

  });
 
  return (
    <header id='header_div' >
        <div className='flex justify-center items-center overflow-hidden  text-center bg-[#297060] h-[20vh] w-[60vw] rounded-md ml-4 mt-4 mr-2 mb-2'>
        
        <img  className='object-bottom' src={logo} alt="Logo" />
        <h1 className='text-2xl bold font-serif'>Investment Calculator</h1>
        </div>

       
       
    </header>
  )
}
