import { useSelector, useDispatch } from "react-redux";
// import { Component } from "react";
// import { connect } from "react-redux";


import classes from "./Counter.module.css";

const Counter = () => {
  const dispatchFunction = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatchFunction({type: "increment"});
  };

  const decrementHandler = () => {
    dispatchFunction({type: "decrement"});
  };

  const decreaseHandler = () => {
    dispatchFunction({type: "decrease", number: 10});
  };

  const increaseHandler = () => {
    dispatchFunction({type: "increase", number: 10});
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decreaseHandler}>-10</button>
        <button onClick={decrementHandler}>-</button>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>+10</button>
      </div>
      <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   };

//   decrementHandler() {
//     this.props.decrement();
//   };

//   toggleCounterHandler() {};

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Счётчик</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.decrementHandler.bind(this)}>-</button>
//           <button onClick={this.incrementHandler.bind(this)}>+</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Спрятать / Показать</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return { 
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
