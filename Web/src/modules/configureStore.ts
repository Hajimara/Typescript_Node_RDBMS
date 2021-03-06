import {applyMiddleware, createStore} from "redux";
import { createBrowserHistory } from 'history';
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';

import rootReducer, {rootSaga} from "./index";
// const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {

    const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ));
    sagaMiddleware.run(rootSaga);
    return store;
}
