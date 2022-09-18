import React from "react";
import "./App.css";
import { increment, decrement } from "./Actions/counterActions";
import { useSelector, useDispatch } from "react-redux";
const App2 = () => {
  const count = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default App2;
