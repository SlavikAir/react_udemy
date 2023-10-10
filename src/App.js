import Card from "./components/Card";
import { ExpenseItem } from "./components/ExpenseItem";
import "./_App.css"

function App() {
  const expenseData = [
    { title: "Car Insuranhce", price: 294.67, date: new Date(2021, 2, 28) },
    { title: "Car Insuranhce", price: 294.67, date: new Date(2021, 2, 28) },
  ];

  return(
    <Card className="expense">
      {expenseData.map((item, index)=> <ExpenseItem expense={item} key={index} />)}
    </Card>
    
  ) 
}

export default App;
