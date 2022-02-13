import * as React from 'react';
import TextField from '@mui/material/TextField';

const SignUpTextFields = ({handleChange}) => {
  return (
    <div>
        <div>
            <TextField 
            required
            id="outlined-required"
            label="First name"
            sx={{
                fontFamily: "DM Sans",
                maxWidth: "192px",
            }}
            onChange={handleChange}
            />
            <TextField
            required
            id="outlined-required"
            label="Last name"
            sx={{
                fontFamily: "DM Sans",
                maxWidth: "192px",
            }}
            onChange={handleChange}
            />
        </div>
        <div>
            <TextField fullWidth
            required
            id="outlined-required"
            label="Username"
            onChange={handleChange}
            sx={{
                fontFamily: "DM Sans",
                // width: "1500px",
            }}
            />
        </div>
        <div>
            <TextField fullWidth
            required
            id="outlined-required"
            label="Phone number"
            onChange={handleChange}
            />
        </div>
        <div> 
            <TextField fullWidth
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
            />
        </div>
        <div> 
            <TextField fullWidth
            required
            id="outlined-password-confirmation"
            label="Confirm password"
            type="password"
            // autoComplete="current-password"
            onChange={handleChange}
            />
        </div>
    </div>
  );
}



export default SignUpTextFields;
