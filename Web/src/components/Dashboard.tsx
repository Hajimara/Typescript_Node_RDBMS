import React, { useEffect, useState } from 'react';
import {Box, Grid} from '@mui/material';
// import { requests } from "../apis";
import {CheckBox} from "@mui/icons-material";
import '../style/Dashboard.css';

const Dashboard = () => {
    const [title, setTitle] = useState('Not Found!');
    //
    // useEffect(() => {
    //     requests.get('/test').then((res: any) => {
    //         setTitle(res);
    //         console.log(res);
    //     });
    // });

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
            {/*  menu bar  */}
            </Grid>
            <Grid item xs={10}>
            </Grid>
        </Grid>
    )
}

export default Dashboard;
