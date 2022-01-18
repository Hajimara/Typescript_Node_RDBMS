import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@mui/material";

import theme from "./utiles/theme";
import './App.css';
import Dashboard from "./components/Dashboard";
import Login from "./components/Auth/Login";

// 최상단 컴포넌트
const App: React.FC = () => {
    const session = sessionStorage.getItem('login');

    return (
        session ? <Dashboard /> : <Login />
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
