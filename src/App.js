import React, { useState } from 'react'
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [msg, setMsg] = useState('');
  
  function validateNum(){
    if(num1 == "" && num2 == ""){
      setMsg("Error : Num 1 and Num 2 can't be empty")
      setResult("")
      return false;
    }
    if(num1 == ""){
      setMsg("Error : Num 1 can't be empty")
      setResult("")
      return false;
    }
    if(num2 == ""){
      setMsg("Error : Num 2 can't be empty")
      setResult("")
      return false;
    }
    return true;
  }

  function calculate(op){
    let ans;
    if(validateNum()){
      if(op === '+'){
        ans = Number(num1) + Number(num2);
      } else if(op === '-'){
        ans = Number(num1) - Number(num2);
      } else if(op === '*'){
        ans = Number(num1) * Number(num2);
      } else {
        ans = Number(num1) / Number(num2);
      }

      setMsg("Success : Your result is shown above!")
      setResult(`Result= ${ans}`);
    }
  }

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div>
        <div className="inputs">
          <input type="text" id="num1" placeholder="Num 1" onChange={e => {setNum1(e.target.value)}}/>
          <input type="text" id="num2" placeholder="Num 2" onChange={e => setNum2(e.target.value)}/>
        </div>
        <div className="buttons">
          <input type="button" value="+" onClick={() => calculate('+')}/>
          <input type="button" value="-" onClick={() => calculate('-')}/>
          <input type="button" value="*" onClick={() => calculate('*')}/>
          <input type="button" value="/" onClick={() => calculate('/')}/>
        </div>
        <div className='result'>{result}</div>
        <div className={(msg=="Success : Your result is shown above!")?"success":"error"}>{msg}</div>
      </div>
    </div>
  );
}

export default App;
