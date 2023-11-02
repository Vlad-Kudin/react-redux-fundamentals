import { createSlice } from '@reduxjs/toolkit';
import { legacy_createStore } from 'redux';

const initialState = {
  counter: 0,
  isCounterInvisible: false
}

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.number;
    },
    decrease(state, action) {
      state.counter = state.counter - action.number;
    },
    setCounterVisibility(state) {
      state.isCounterInvisible = !state.isCounterInvisible;
    },
  }
})

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      isCounterInvisible: state.isCounterInvisible,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      isCounterInvisible: state.isCounterInvisible,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.number,
      isCounterInvisible: state.isCounterInvisible,
    };
  }
  if (action.type === "decrease") {
    return {
      counter: state.counter - action.number,
      isCounterInvisible: state.isCounterInvisible,
    };
  }
  if (action.type === "visibility") {
    return {
      counter: state.counter,
      isCounterInvisible: !state.isCounterInvisible,
    };
  }

  return state;
};

const store = legacy_createStore(counterReducer);

export default store;