import { configureStore } from "@reduxjs/toolkit";
import { createReduxHistoryContext, reachify } from "redux-first-history";
import { createBrowserHistory } from 'history';
import { combineReducers } from "redux";

import authSlice from "../features/auth/reducers/authSlice";
import streamSlice from "../features/stream/reducers/streamSlice";

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

//todo: remove router?

const store = configureStore({
    reducer:
        combineReducers({
            auth: authSlice,
            router: routerReducer,
            stream: streamSlice
        })
    ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware)
})

export const history = createReduxHistory(store);

export default store