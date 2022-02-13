import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DashboardTable from '../components/DashboardTable.js';
import TextField from '@mui/material/TextField';

const Dashboard = () => {
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
            <div>
                <h2 style={{ color: '#E2725B' }}>
                    BeBuds
                    <TextField 
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        label="Username"
                    />
                    <Button variant="contained" style={{ backgroundColor: '#E2725B' }}>
                        Add Friend
                    </Button>
                </h2>
            </div>
            <br></br>
            <DashboardTable />
            <br></br>
            <Button variant="contained" style={{ backgroundColor: '#E2725B' }}>
                Log Out
            </Button>
        </Box>
    );
}

export default Dashboard;
