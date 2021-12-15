import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducer/index'


export let store = createStore(rootReducer, applyMiddleware(thunk));