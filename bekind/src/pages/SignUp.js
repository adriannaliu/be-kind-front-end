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
            '& .MuiTextField-root': { m: 1, width: '400px' },
        }}
        noValidate
        autoComplete="off">
        <h1>
            BeKind.
        </h1>
        <h3 style={{margin: "8px"}}>
            Welcome!
        </h3>
        <SignUpTextFields />
        <div>
          <FormControlLabel 
            control={<Checkbox defaultChecked style={{color: "#C0B5AB"}} />} 
            label="By checking this, you agree that your carrier may charge for SMS messages sent by BeKind." 
            style={{
              maxWidth: "375px",
              textAlign: "left",
              fontFamily: "DM Sans",
              fontSize: "11px",
              color: "#C0B5AB",
            }}/>
        </div>
        <br></br>
        <div>
          {/* fill in on click method !!! */}
          <Button 
            variant="contained"
            style={{backgroundColor: "#E2725B", width: "400px"}}
            onClick={() => {
            return;
          }}>SIGN UP
          </Button>
        </div>
        <br></br>
        <div>
          Already have an account?&nbsp;&nbsp;
        <Link to="/login">Sign in</Link> 
        </div>
        <Link to="/dashboard">Dashboard (TEMP)</Link> 
    </Box>
  );
}

export default SignUp;
