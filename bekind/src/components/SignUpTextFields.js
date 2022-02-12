import * as React from 'react';
import TextField from '@mui/material/TextField';

const SignUpTextFields = () => {
  return (
    <div>
        <div>
            <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="First name"
            />
            <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Last name"
            />
        </div>
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
            id="outlined-required"
            label="Required"
            defaultValue="Phone number"
            />
        </div>
        <div> 
            <TextField fullWidth
            required
            id="outlined-required"
            label="Required"
            defaultValue="Password"
            />
        </div>
    </div>
  );
}

export default SignUpTextFields;
