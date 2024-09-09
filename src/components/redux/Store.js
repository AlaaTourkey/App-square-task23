import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducer";
import { thunk } from "redux-thunk";

let middleWare =[thunk]

// Initial state
const initialState = { isAuthenticated: false, user: 'Alaa Tourkey', search: '',authToken: null };


export const store = createStore(reducer,initialState ,applyMiddleware(...middleWare));