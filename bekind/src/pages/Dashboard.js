import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DashboardTable from '../components/DashboardTable.js';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import axios from 'axios';

const Dashboard = () => {

    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    axios.get('https://bekindapi.herokuapp.com/current-user/')
    .then(response => console.log(response.data))

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <h1 style={{ color: '#E2725B' }}>
                Hi, Emily!
            </h1>
            <p>
                “If you have a choice between being right and being kind..."
            </p>
            <h1>
                BeKind.
            </h1>
            <h2 style={{ color: '#E2725B' }}>
                BeBuds
            </h2>
            <div>
                <div>
                    <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        label="Username"
                        width="250px"
                    />
                </div>
                <div>
                    <Button variant="contained" style={{ backgroundColor: '#E2725B' }}>
                        Add Friend
                    </Button>
                </div>
            </div>
            <br></br>
            <DashboardTable />
            <br></br>
            <Button variant="contained" style={{ backgroundColor: '#E2725B' }} onClick={() => {
                axios.get('https://bekindapi.herokuapp.com/logout/')
                    .then(response => response.data.detail === 'success' ? console.log('success') : console.log('fail'))
                    .catch(error => console.log(error))
            }}>
                <Link to="/" style={{ color: "#FFFFFF" }}
                >Log out </Link>
            </Button>
        </Box>
    );
}

export default Dashboard;
