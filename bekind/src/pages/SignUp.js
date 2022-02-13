import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from'@mui/material/Button';
import Checkbox from'@mui/material/Checkbox';
import FormControlLabel from'@mui/material/FormControlLabel';
import SignUpTextFields from '../components/SignUpTextFields.js';

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
            BeKind.
        </h1>
        <h3>
            Welcome!
        </h3>
        <SignUpTextFields />
        <div>
          <FormControlLabel control={<Checkbox defaultChecked />} label="By checking this, you agree that your carrier may charge for SMS messages sent by BeKind." />
        </div>
        <div>
          {/* fill in on click method !!! */}
          <Button variant="contained" onClick={() => {
            return;
          }}>SIGN UP</Button>
        </div>
        <div>
          Already have an account?&nbsp;&nbsp;
        <Link to="/login">Sign in</Link> 
        </div>
        <Link to="/dashboard">Dashboard (TEMP)</Link> 
    </Box>
  );
}

export default SignUp;
