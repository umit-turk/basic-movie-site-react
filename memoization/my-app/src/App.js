import { useState, useMemo, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("")

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1)
  }, [])

 /*  const data = useMemo(() => {
    return calculateObject(number);
  }, [number]); */

 /*  const data = calculateObject(); */

  return (
    <div className="App">
      <Header increment={increment}  />
      <h1>{number}</h1>
      <br></br>
      <br></br>
      <input value={text} onChange={({target})=> setText(target.value)} />
    </div>
  );
}
/* function calculateObject(number) {
  console.log("Calculating...")
  for(let i =0; i<1000000000; i++){}
  console.log("Calculating completed.")
  return {name: "Ümit", number}
} */

export default App;

//{} === {} false [] === [] false
