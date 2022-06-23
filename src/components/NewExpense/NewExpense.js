import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
         // here we are passing this data to the function that we receive on onAddExpense prop. we are lifting up the expenseData in the App component.
         setIsEditing(false);
        }   

        function startEditingHandler(){
            setIsEditing(true);
        }

        function stopEditingHandler(){
            setIsEditing(false);
        }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler}
            />}
        </div>
    );
}

export default NewExpense;