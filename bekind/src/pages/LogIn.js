import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import LogInTextFields from '../components/LogInTextFields.js';
import FormControlLabel from '@mui/material/FormControlLabel';

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
            <br></br>
            <div style={{color: "#656362"}}>
                Don't have an account?&nbsp;&nbsp;
                <Link to="/">Sign up </Link>
            </div> 
        </Box>
    );
}

export default LogIn;
