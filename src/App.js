import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Result from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';

function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
});
const inputIsValid = userInput.duration>=1;


function handleChange(newIdentifier, newValue){
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [newIdentifier]:+newValue
      }
  });
}
  return (
   <>
   <Header />
   <UserInput userInput={userInput} onChange ={handleChange}/>
   {!inputIsValid && <p className='center'> Please Enter Valid duration</p>}
   {inputIsValid && <Result input={userInput}/>}
   </>
  );
}

export default App;