import { createStore } from "redux";

const initialState = {
  isLoggedIn: "unknown",
  loggedInUser: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        isLoggedIn: true,
        loggedInUser: action.payload
      };

    case "LOGGED_OUT":
      return {
        ...state,
        isLoggedIn: false
      };

    default:
      return state;
  }
};

const initializeStore = (state = initialState) => createStore(reducer, state);

export default initializeStore;
