import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';


const buttonTheme = createTheme({ palette: { primary: { main: '#E2725B' } } })

const LogInTextFields = () => {
  return (
    <div>
        <div>
            <TextField fullWidth
            required
            id="outlined-required"
            label="Required"
            defaultValue="Username"
            />
        </div>
        <div>
            <TextField fullWidth
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            />
        </div>
        <br></br>
        <div>
            <Button variant="contained" style={{backgroundColor: '#E2725B'}}>
                Sign In
            </Button>
        </div>
    </div>
  );
}

// for future reference for password errors
// <TextField
//     error   
//     id="outlined-error-helper-text"
//     label="Error"
//     defaultValue="Hello World"
//     helperText="Incorrect entry."
// />

export default LogInTextFields;
