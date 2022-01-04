import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@mui/material";

import theme from "./utiles/theme";
import './App.css';
import Dashboard from "./components/Dashboard";


const App: React.FC = () => {

    return (
        <Dashboard />
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
