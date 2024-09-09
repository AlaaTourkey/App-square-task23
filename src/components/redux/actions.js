import { useState } from "react";
import axios from "axios";
export function search() {
  return (dispatch) => dispatch({ type: 'SEARCH'  , payload :target.value})
  
}

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post("https://backend.profferdeals.com/api/admin/login", {
        email,
        password,
      });

      if (data) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        localStorage.setItem("authToken", data.token);
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
}

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem("authToken");
  };
};