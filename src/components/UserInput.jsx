import React from 'react'

export const UserInput = ({onChange , userInput}) => {



  return (
    <section className=' p-10 h-[100%] w-[34vw] rounded bg-gradient-to-b from-[#307e6c] to-[#2b996d] ml-1 mt-1' id='user-input'>
        <div className="flex justify-evenly gap-6">
            <p>
                <label >Initial Investment</label>
                <input type="number" required value={userInput.initialInvestment}  onChange={(event)=>{onChange("initialInvestment", event.target.value)}}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required  value={userInput.annualInvestment}  onChange={(event)=>{onChange("annualInvestment", event.target.value)}}/>
            </p>
        </div>
        <div className="flex justify-evenly gap-6">
        <p>
                <label>Expected Return  </label>
                <input type="number" required  value={userInput.expectedReturn}  onChange={(event)=>{onChange("expectedReturn", event.target.value)}}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={userInput.duration}  onChange={(event)=>{onChange("duration", event.target.value)}}/>
            </p>
        </div>
    </section>
  )
}
