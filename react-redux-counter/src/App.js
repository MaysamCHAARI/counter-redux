import "./App.css";
import { connect } from "react-redux";
import { increment, decrement } from "./Actions/counterActions";

function App(props) {
  return (
    <div className="App">
      <h1>{props.count}</h1>
      <button onClick={() => props.plusBtn()}>+</button>
      <button onClick={() => props.minusBtn()}>-</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.counterReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    minusBtn: () => dispatch(decrement()),
    plusBtn: () => dispatch(increment()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
