import React, { useState } from 'react';
import Card from './Card';
import ExpenseFilter from '../components/ExpenseFilter';
import './Expenses.css';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  //moving to new component ExpenseList
  // let expensesContent = <p style={{ color: '#fff' }}>No expenses found</p>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((exp) => (
  //     <ExpenseItem
  //       key={exp.id}
  //       title={exp.title}
  //       amount={exp.amount}
  //       date={exp.date}
  //     />
  //   ))
  // }


  return (
    <Card className="expenses" >


      <ExpenseFilter selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      /> */}
    </Card >
  );
}

export default Expenses;