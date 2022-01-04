import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { requests } from "../apis";
import {CheckBox} from "@mui/icons-material";

const Dashboard = () => {
    const [title, setTitle] = useState('Not Found!');

    useEffect(() => {
        requests.get('/test').then((res: any) => {
            setTitle(res);
            console.log(res);
        });
    });
    return (
        <>
            {title}
            <CheckBox />
        </>
    )
}

export default Dashboard;
