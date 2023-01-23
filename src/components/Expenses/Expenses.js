import "./Expenses.scss";
import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card";
import DateSelector from "./DateSelector";

function Expenses(props) {
  const [yearFiltered, setYearFilter] = useState("2023");

  const yearSelectorHandler = (yearSelected) => {
    setYearFilter(yearSelected);
  };

  const expensesToDisplay = props.expensesData.filter(
    (expense) => expense.date.getFullYear() === +yearFiltered
  );

  return (
    <div>
      <Card className="expenses">
        <DateSelector
          onSelectYear={yearSelectorHandler}
          selected={yearFiltered}
        />
        {expensesToDisplay.length === 0 && (
          <p>Theres no expenses for {yearFiltered}</p>
        )}
        {expensesToDisplay.length > 0 &&
          expensesToDisplay.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              price={expense.amount}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
