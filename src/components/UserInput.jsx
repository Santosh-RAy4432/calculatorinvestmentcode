import { useState } from "react";


export default function UserInput(){
    const [userInput,setUserInput]=useState({
        initialInvestment: 20000,
        annualInvestment: 3000,
        expectedReturn: 8,
        duration: 20,
    });

    function handleChange(newIdentifier, newValue){
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [newIdentifier]:newValue
            }
        });
    }
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <labe>Initial Investment</labe>
                    <input type="number" required 
                    value={userInput.initialInvestment}
                    onChange={(event)=>handleChange('initialInvestment', event.target.value)}/>
                </p>
            </div>
            <p>
                <label>Annual Investment</label>
                <input type="number" required 
                value={userInput.annualInvestment}
                onChange={(event)=>handleChange('annualInvestment', event.target.value)}/>
            </p>
            <p>
                <label>Expected Return</label>
                <input type="number" required 
                value={userInput.expectedReturn}
                onChange={(event)=>handleChange('expectedReturn', event.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required 
                value={userInput.duration}
                onChange={(event)=>handleChange('duration', event.target.value)}/>
            </p>

        </section>
    );
}