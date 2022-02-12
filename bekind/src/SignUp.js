import * as React from 'react';
import Box from '@mui/material/Box';
import SignUpTextFields from './components/SignUpTextFields.js';

const SignUp = () => {
  return (
    <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <SignUpTextFields />
    </Box>
  );
}

export default SignUp;
