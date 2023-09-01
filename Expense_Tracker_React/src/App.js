import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import Newexpense from './components/NewExpenses/Newexpense';
import './App.css'
const  App=(props)=>{
  let [income ,setIncome] = useState();
  const getIncome = (event)=>{
    setIncome(event.target.value);
  }
  
  
  let DUMMY_Expense = [];
  let [array,setArray] = useState(DUMMY_Expense);

  const saveExpenseDataHandler = (entereddata)=>{
       const expensedata = {
        ...entereddata
       }
      
       setIncome(income - entereddata.amount);

       console.log(expensedata);
       const updatedarray =[expensedata,...array];
       setArray(updatedarray); 

  } 

  if(income<=0)
  {
    alert("Your Income is finished");
  }
    return (
    <div>
      <div className="income">
        <h1>Track your Expenses</h1>
        <input type="number" id = "in" value ={income} onChange={getIncome} />
        <span id = "income">{income}</span>
      </div>
      <div className="heading">
        <h1>Enter your Income</h1>
        <Newexpense passdata = {saveExpenseDataHandler}/>
        <Expenses item = {array}/>
      </div>
    </div>
    );
}
export default App;