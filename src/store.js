import {createStore, applyMiddleware, compose} from "redux";
import allReducers from "./rootReducer/rootReducer";
import thunk from "redux-thunk";

// to see reducer in redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// middleware to help async call
const enhancer = composeEnhancers(
     applyMiddleware(thunk),
);


const store = createStore(allReducers, enhancer);

export default store;