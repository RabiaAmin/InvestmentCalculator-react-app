import React from 'react'
import {calculateInvestmentResults,formatter} from "../util/investment"

export const Results = ({userInput}) => {
    const resultsData = calculateInvestmentResults(userInput);
    const totalInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
  return (
    <table id='result'>
       <thead>
        <tr>
            <th> Year</th>
            <th>Investment value</th>
            <th>Interest (year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
       </thead>
       <tbody>
        {
            resultsData.map((yearData)=>{
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - totalInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
            
            return <tr key={yearData.year}>
                 <td>{yearData.year}</td>
                 <td>{formatter.format(yearData.valueEndOfYear)}</td>
                 <td>{formatter.format(yearData.interest)}</td>
                 <td>{formatter.format(totalInterest)}</td>
                 <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            })
        }
       </tbody>
    </table>
  )
}
