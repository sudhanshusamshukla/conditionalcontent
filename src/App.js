import React, { useState } from 'react';
import Expenses from "./components/Expenses";
import NewExpense from '../src/components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Samsung TV',
    amount: 194.12,
    date: new Date(2019, 7, 14),
  },
  {
    id: 'e3',
    title: 'HP Laptop',
    amount: 994.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: 'e4',
    title: 'Juicer',
    amount: 44.12,
    date: new Date(2019, 6, 14),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
