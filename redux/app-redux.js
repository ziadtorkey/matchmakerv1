import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import numberCalculator from "../functions/numberCalculator";

var todayDate = new Date();
var bd =
  todayDate.getFullYear() +
  "-" +
  (todayDate.getMonth() + 1) +
  "-" +
  todayDate.getDay();
//
// Initial State
//
const initialState = {
  rUserid: "",
  rUsername: "",
  rUserLoveNumber: 0,
  rBirthDate: bd,
  rEmail: "",
  rGender: "",
  rConnections: {},
  rRefreshToken: "",
  rProfilePicture: ""
};

//
// Reducer
//
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setUserName":
      return {
        ...state,
        currentUser: action.value
      };
    case "setBirthDate":
      return {
        ...state,
        rBirthDate: action.value,
        userLoveNumber: numberCalculator(action.value)
      };
    case "setNewUser":
      return {
        ...state,
        rUserid: action.rUserid,
        rUsername: action.rUsername,
        rBirthDate: action.rBirthDate,
        rEmail: action.rEmail,
        rGender: action.rGender,
        rRefreshToken: action.rRefreshtoken,
        rUserLoveNumber: numberCalculator(action.rBirthDate)
      };
    case "setUserData":
      return {
        ...state,
        rUserid: action.rUserid,
        rUsername: action.rUsername,
        rBirthDate: action.rBirthDate,
        rEmail: action.rEmail,
        rGender: action.rGender,
        rRefreshToken: action.rRefreshtoken,
        rUserLoveNumber: action.rUserLoveNumber
      };

    default:
      return state;
  }
};

//
// Store
//
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export { store };

//
// Action Creator
//

// Sample Action

const setUserName = username => {
  return {
    type: "setUserName",
    value: username
  };
};

const setBirthDate = rBirthdate => {
  return {
    type: "setBirthDate",
    value: rBirthdate
  };
};

const setNewUser = (
  rUserid,
  rUsername,
  rBirthDate,
  rEmail,
  rGender,
  rRefreshToken
) => {
  return {
    type: "setNewUser",
    rUserid: rUserid,
    rUsername: rUsername,
    rBirthDate: rBirthDate,
    rEmail: rEmail,
    rGender: rGender,
    rRefreshToken: rRefreshToken
  };
};

const setUserData = (
  rUserid,
  rUsername,
  rBirthDate,
  rEmail,
  rGender,
  rRefreshToken,
  rUserLoveNumber,
  rProfilePicture
) => {
  return {
    type: "setUserData",
    rUserid: rUserid,
    rUsername: rUsername,
    rBirthDate: rBirthDate,
    rEmail: rEmail,
    rGender: rGender,
    rRefreshToken: rRefreshToken,
    rUserLoveNumber: rUserLoveNumber,
    rProfilePicture
  };
};

export { setUserName, setBirthDate, setNewUser, setUserData };
