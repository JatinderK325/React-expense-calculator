import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../GeneralUI/Card';

function ExpenseItem(props) { // props make components reuseable and allow us to pass values from one component to another component.

    return (
        // wrapping up JSX code in our custom component called Card!,,, for supporting wrapping in custom components instead of inbuilt elements like div, we have to use {props.children} in Card component.
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;

// Note: In JSX code, there must have only one root element (eg div) and other elements should come inside that div.