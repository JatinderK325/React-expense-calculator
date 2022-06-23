import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


// App.js: this is a root component.
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // this is html code in js file called JSX(javascript xml, html is a xml ) code(special syntax invented by react). It is a invalid syntax but it will work becoz of our project set-up, this code will be tranformed by npm start process behind the scene and then delivered to the browser.
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

// we can build our own, custom html elements with react. we build components that are basically custom html element. we do this with declarative approach. Declarative approach means react defines the desired states and figure out the actual javascript DOM instructions.
export default App;


// Imperative approach: normal js uses imperative approach.
// const para = document.createElement('p');
// para.textContent = 'This is first paragraph';
// document.getElementById('root').append(para);
