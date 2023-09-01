import React from 'react';
import './Newexpense.css';
import Expenseform from './Expenseform'

const Newexpense=(props)=>{


    const saveExpenseDataHandler = (enteredexpensedata)=>{

        const expensedata ={
            ...enteredexpensedata
        }
        props.passdata(expensedata);
    }
return(
       
            <Expenseform onsaveExpenseData = {saveExpenseDataHandler} />
       
);
}
export default Newexpense;