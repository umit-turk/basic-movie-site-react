import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.increment);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  return (
    <>
    <div className="App">
      <h1>Number: {counter}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(5))}>+</button>
    </div>
    <div>
       {logged? 'there are some sensitive infos you should not see': "you are not logın"}
    </div>
    </>
  );
}

export default App;
