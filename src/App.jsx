import { Header } from "./components/Header";
import { UserInput } from "./components/UserInput";
import { Results } from "./components/Results";
import { useState } from "react";
import moneyGrowth from "./assets/money-growth.png";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { Caption  } from "./components/Caption";
import { Ad } from "./components/ad";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 2000,
    annualInvestment: 1000,
    expectedReturn: 500,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;

  function handleChange(inputIdetifier, newValue) {
    setUserInput((prevValue) => {
      return { ...prevValue, [inputIdetifier]: +newValue };
    });
  }


  useGSAP(()=>{
    
    gsap.from("#money-div",{
    y: 500,
    duration: 2,
    delay: 0.5,
   
    });

  });

  return (
    <>
      <div className="flex  justify-evenly overflow-hidden">
        <div className="flex-col">
          <Header />
          <div className="flex h-[35vh] ">
            <Caption />
            <UserInput onChange={handleChange} userInput={userInput} />
          </div>
          <div className="flex h-[35vh] mt-4">
           <Ad/>
            <div id="money-div" className="bg-[#307F6C] h-[100%] w-[25vw] rounded-md  ml-2 overflow-hidden ">
              <img className=" object-fill " src={moneyGrowth} alt="money" />
            </div>

          </div>
        </div>
           
        {isInputValid ? (
          <Results userInput={userInput} />
        ) : (
          <div className="flex justify-center items-center h-[94vh] w-[40vw]  rounded-md  border-[#307F6C] border-2 ml-0 mt-4 mr-4 mb-2">

            <p >Please Enter a Duration greater then 0</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
