import React from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
 const Expenses =  (props)=>{
    // console.log(props.item[0].title);
 return(<Card className = "expenses">
    {
      props.item.map(
         expense=>(
            <ExpenseItem 
            date =  {expense.date}
            title =  {expense.title}
            amount =  {expense.amount}
            />
         )
      )
    }
 </Card>)
}
export default Expenses;