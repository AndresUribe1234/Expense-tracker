import "./Expenses.scss";

import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card";

function Expenses(props) {
  const expenses = props.expensesData;
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        price={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        price={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        price={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        price={expenses[3].amount}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
