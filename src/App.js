import {useState} from 'react';
import './App.css';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';

function App() {
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
          [newIdentifier]:+newValue
      }
  });
}
  return (
   <>
   <Header />
   <UserInput userInput={userInput} onChange ={handleChange}/>
   <Result input={userInput}/>
   </>
  );
}

export default App;