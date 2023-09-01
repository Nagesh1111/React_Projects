import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';
import Card from '../UI/Card'
const ExpenseItem = (props)=>{

   return(
   <Card className="expenseitem">
    <h1>{props.title}</h1>
    <ExpenseDate date = {props.date}/>
    <h3>{props.amount}</h3>
   </Card>
   );
 }
 export default ExpenseItem;
