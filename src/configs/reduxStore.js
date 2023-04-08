import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/reducers/authSlice";
import { createReduxHistoryContext, reachify } from "redux-first-history";
import { createBrowserHistory } from 'history';
import { combineReducers } from "redux";

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

const store = configureStore({
    reducer:
        combineReducers({
            auth: authSlice,
            router: routerReducer
        })
    ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware)
})

export const history = createReduxHistory(store);

export default store