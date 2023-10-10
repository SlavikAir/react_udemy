import Card from "./Card";
import "./_Card.css"

export const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <Card className="date">
      <div className="data">{month}</div>
      <div className="">{day}</div>
      <div className="">{year}</div>
    </Card>
  );
};
