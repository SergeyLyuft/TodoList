import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from "redux-saga";
import {createStore, applyMiddleware, combineReducers} from "redux";
import reduser from "./redux/reduser";
import userReduser from "./redux/userReduser";
import {Provider} from "react-redux";
import mySaga from "./saga";
import { SnackbarProvider } from "notistack";

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    combineReducers({reduser, userReduser}),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <SnackbarProvider>
            <App/>
        </SnackbarProvider>
    </Provider>
);

reportWebVitals();
