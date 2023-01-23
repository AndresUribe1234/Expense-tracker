import "./Expenses.scss";
import { useState } from "react";

import Card from "./../UI/Card";
import DateSelector from "./DateSelector";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
        <ExpensesChart expenses={expensesToDisplay} />

        <ExpensesList expenses={expensesToDisplay} />
      </Card>
    </div>
  );
}

export default Expenses;
