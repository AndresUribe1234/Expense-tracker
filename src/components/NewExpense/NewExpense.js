import { useState } from "react";
import "./NewExpense.scss";

import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    console.log(expenseData);
    props.onAddExpenseData(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing === false && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing === true && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
