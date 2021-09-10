import { applyMiddleware, combineReducers,createStore } from "redux";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    //state ung dung
})

export const store = createStore(rootReducer,applyMiddleware(thunk));