import Card from "./Card";
import { ExpenseDate } from "./ExpenseDate";
import "./_Card.css"

export const ExpenseItem = ({ expense: { date, title, price } }) => {

  return (
    <Card className="width">
      <ExpenseDate date={date}/>
      <div className="">
        <h2>{title}</h2>
        <div className="">${price}</div>
      </div>
    </Card>
  );
};


