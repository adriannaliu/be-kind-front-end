import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DashboardTable from '../components/DashboardTable.js';

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
        <h1 style={{color: '#E2725B'}}>
            Hi, Emily!  
        </h1>
        <p>
        “If you have a choice between being right and being kind..."
        </p>
        <h1>
            BeKind.
        </h1>
        <h2 style={{color: '#E2725B'}}>
            BeBuds
        </h2>
        <div>
            <Button variant="contained" style={{backgroundColor: '#E2725B'}}>
                Add Friend
            </Button>
        </div>
        <br></br>
        <DashboardTable />
        <br></br>
        <Button variant="contained" style={{backgroundColor: '#E2725B'}}>
                Log Out
        </Button>
    </Box>
  );
}

export default Dashboard;
