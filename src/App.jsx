import { Header } from "./components/Header"
import { UserInput } from "./components/UserInput"
import { Results } from "./components/Results";
import { useState } from "react";

function App() {

  const [userInput , setUserInput] = useState({
    initialInvestment:2000,
    annualInvestment:1000,
    expectedReturn:500,
    duration:10,
  });

  const isInputValid = userInput.duration >= 1 ;

  function handleChange(inputIdetifier,newValue){
    setUserInput(
       (prevValue)=>{
          return  {  ...prevValue,[inputIdetifier] : +newValue }
       }
    );
  }
  return <>
   <Header />
   <UserInput onChange={handleChange} userInput={userInput}/>
   {isInputValid ?   <Results userInput={userInput} /> : <p className="center">Please Enter a Duration greater then 0</p> }

  </>
   
  
}

export default App
