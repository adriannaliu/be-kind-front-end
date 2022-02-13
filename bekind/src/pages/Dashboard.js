import * as React from 'react';
import Box from '@mui/material/Box';
import DashboardTable from '../components/DashboardTable.js';
import DashboardButtons from '../components/DashboardButtons.js';

const Dashboard = () => {
  return (
    <Box justifyContent="space-between"
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
        <DashboardButtons/>
        <DashboardTable />
    </Box>
  );
}

export default Dashboard;
