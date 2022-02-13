import * as React from 'react';
import TextField from '@mui/material/TextField';

const SignUpTextFields = () => {
  return (
    <div>
        <div>
            <TextField 
            required
            id="outlined-required"
            label="First name"
            sx={{
                fontFamily: "DM Sans"
            }}
            />
            <TextField
            required
            id="outlined-required"
            label="Last name"
            />
        </div>
        <div>
            <TextField fullWidth
            required
            id="outlined-required"
            label="Username"
            />
        </div>
        <div>
            <TextField fullWidth
            required
            id="outlined-required"
            label="Phone number"
            />
        </div>
        <div> 
            <TextField fullWidth
            required
            id="outlined-required"
            label="Password"
            />
        </div>
        <div> 
            <TextField fullWidth
            required
            id="outlined-required"
            label="Confirm password"
            />
        </div>
    </div>
  );
}

export default SignUpTextFields;
