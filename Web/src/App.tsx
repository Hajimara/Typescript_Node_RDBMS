import React, {useEffect} from 'react';

import './App.css';
import Dashboard from "./components/Dashboard";
import Login from "./components/Auth/Login";
import {getCheckSessionAsync, setObject, setStringArr} from "./modules/redux-saga-test/actions";
import {useDispatch} from "react-redux";
import {RootState} from "./modules";
import {GetCheckSessionPramType} from "./apis/test/tyep";

// 최상단 컴포넌트
const App: React.FC = () => {
    const dispatch = useDispatch();
    const session = sessionStorage.getItem('login');

    useEffect(() => {
        dispatch(setStringArr(['a', 'b', 'c']));
        dispatch(setObject({
            a: ['a', 'b', 'c'],
            b: 2,
            c: 'bye'
        }));
        const id: GetCheckSessionPramType = {
            id: '123'
        };

        console.log(id);
        dispatch(getCheckSessionAsync.request(id));
    });

    return (
        session ? <Dashboard /> : <Login />
    );
};

export default App;
