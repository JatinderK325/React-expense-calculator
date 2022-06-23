import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

  function yearSelectHandler(event) {
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearSelectHandler}>
          {/* here we have set value as props.selected to get initial value as 2020 in the dropdown menu.  */}
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;