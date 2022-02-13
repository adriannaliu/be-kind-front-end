import * as React from 'react';
import Box from '@mui/material/Box';
import LogInTextFields from '../components/LogInTextFields.js';

const LogIn = () => {
  return (
    <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <h1>
            BeKind.
        </h1>
        <h3>
            Log In
        </h3>
        <LogInTextFields />
    </Box>
  );
}

export default LogIn;
