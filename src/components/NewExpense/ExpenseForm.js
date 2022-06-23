import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm(props) {
    // more than one state in a same component are seperated from each other and they work individually. if title is updated, it will not impact amount or date and vice-versa.

    const [enteredTitle, setEnteredTitle] = useState(''); // in useState, we pass an initial value as an argument. here initial value of the textfield is empty.
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    }

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    }

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate}  min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;


/*
// Note: All three states are related to form so we can group them using an object. hence, we can use one state instead of 3 states like below.

const [userInput, setUserInput] = useState({          
    // so here we can group together our 3 states
        enteredTitle: '',   // empty string as an initial value
        enteredAmount: '',
        enteredDate: ''
    });

    function titleChangeHandler(event) {
        setUserInput({   // passing a new object on updation
            ...userInput, // pulling all the user inputs through spread operator. we need to do this becoz with this line we are getting the value of amount and date. we are ensuring that updation on title should not effect other two values(i.e user inputs). // here in this way, we are dependent on the previous state for updation.
            enteredTitle: event.target.value 
        }); 
    }

    function amountChangeHandler(event) {
        setUserInput({   // passing a new object on updation
            ...userInput, 
            enteredAmount: event.target.value
        });
    }

    function dateChangeHandler(event) {
        setUserInput({   // passing a new object on updation
            ...userInput, 
            enteredDate: event.target.value
        });
    }
*/
