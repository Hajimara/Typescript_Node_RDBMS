import ReactDOM from "react-dom";
import React from "react";
import {Provider} from "react-redux";

import App from "./App";
import configureStore from './modules/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
