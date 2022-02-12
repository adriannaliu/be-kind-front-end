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
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Username"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Phone number"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Password"
        />
    </div>
  );
}

export default SignUpTextFields;
