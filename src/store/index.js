import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducer/index";
import thunk from "redux-thunk";

export default function configureStore(initialState) {

    console.log("2nd Store");
    return createStore(rootReducer,[initialState,applyMiddleware(thunk)],window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}



