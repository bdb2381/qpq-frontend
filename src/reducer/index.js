import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import changeStatus from "./requestStatus";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  status: changeStatus,
});

export default allReducers;
