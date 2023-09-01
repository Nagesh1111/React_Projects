import React ,{useState} from 'react';
import './Expenseform.css';
const Expenseform = (props)=>{

  const [enteredtitle,setenteredtitle] = useState('');
  const [enteredamount,setenteredamount] = useState('');
  const [entereddate,setentereddate] = useState(''); 
  const titleChangeHandler = (event)=>{
       setenteredtitle(event.target.value);
  };
  const amountChangeHandler = (event)=>{
    setenteredamount(event.target.value);
  };
  const dateChangeHandler = (event)=>{
    setentereddate(event.target.value);
  };
  const submitHandler = (event)=>{
    event.preventDefault();
    const expense = {
      title :enteredtitle,
      amount :enteredamount,
      date :new Date(entereddate)
    }

   props. onsaveExpenseData(expense);
  //  console.log(expense);
    setenteredamount('');
    setentereddate('');
    setenteredtitle('');
   
  };
  
return(
    <form className='formdata' onSubmit = { submitHandler }>

        <div className='container'>
          <div className='expense-type'>
            <label>Type of Expense</label>
            <input type="text" placeholder='Type of Expense'value = {enteredtitle} onChange={titleChangeHandler}/>
          </div>
          <div className='expense-date'>
            <label>Date</label>
            <input type="date" value = {entereddate} onChange={dateChangeHandler} />
          </div>
          <div className='amount'>
            <label>Amount</label>
            <input type="number" placeholder='Enter Amount' value = {enteredamount}  onChange={amountChangeHandler}/>
          </div>
        </div>
        <button type = "submit">Add Expense</button>
    </form>
);
}
export default Expenseform;