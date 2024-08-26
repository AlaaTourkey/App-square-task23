// src/store.js
import { createStore } from "redux";

// Define action types
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
};

// Reducer function
function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}

// Create Redux store
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
