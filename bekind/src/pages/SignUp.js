import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import axios from 'axios';


const SignUp = () => {
  const [state, setState] = React.useState({
    username: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    password: '',
    confirm_password: '',
  });

  // const handleChange = (e) => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value.trim()
  //   })
  // }

  const handleSubmit = (e) => {
    //e.preventDefault()

    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';
    // axios.defaults.withCredentials = true;

    axios.post('https://bekindapi.herokuapp.com/signup/', {
      'first_name': state.first_name,
      'last_name': state.last_name,
      'username': state.username,
      'password': state.password,
      'confirm_password': state.confirm_password,
      'phone_number': state.phone_number,
    }).catch(e => console.log(e.response));
    // API CALL 
  }
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
      <h3 style={{ margin: "8px" }}>
        Welcome!
      </h3>
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
            value={state.first_name}
            onChange={e => setState({ ...state, first_name: e.target.value })}
          />
          <TextField
            required
            id="outlined-required"
            label="Last name"
            sx={{
              fontFamily: "DM Sans",
              maxWidth: "192px",
            }}
            value={state.last_name}
            onChange={e => setState({ ...state, last_name: e.target.value })}
          />
        </div>
        <div>
          <TextField fullWidth
            required
            id="outlined-required"
            label="Username"
            value={state.username}
            onChange={e => setState({ ...state, username: e.target.value })}
            sx={{
              fontFamily: "DM Sans",
            }}
          />
        </div>
        <div>
          <TextField fullWidth
            required
            id="outlined-required"
            label="Phone number"
            value={state.phone_number}
            onChange={e => setState({ ...state, phone_number: e.target.value })}
          />
        </div>
        <div>
          <TextField fullWidth
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={state.password}
            onChange={e => setState({ ...state, password: e.target.value })}
          />
        </div>
        <div>
          <TextField fullWidth
            required
            id="outlined-password-confirmation"
            label="Confirm password"
            type="password"
            value={state.confirm_password}
            // autoComplete="current-password"
            onChange={e => setState({ ...state, confirm_password: e.target.value })}
          />
        </div>
      </div>
      <div>
        <FormControlLabel
          control={<Checkbox style={{ color: "#656362" }} />}
          label="By checking this, you agree that your carrier may charge for SMS messages sent by BeKind."
          style={{
            maxWidth: "390px",
            textAlign: "left",
            fontFamily: "DM Sans",
            fontSize: "11px",
            color: "#656362",
            marginLeft: "5px",
            margin: "5px"
          }} />
      </div>
      <div>
        {/* fill in on click method !!! */}
        <Button
          variant="contained"
          style={{ backgroundColor: "#E2725B", width: "400px", margin: "5px" }}>
          <Link to="/dashboard" style={{ color: "#FFFFFF" }} onClick={() => handleSubmit()}>SIGN UP</Link>
        </Button>
      </div>
      <div style={{ color: "#656362" }}>
        Already have an account?&nbsp;&nbsp;
        <Link to="/login" style={{ color: "#656362" }}>Sign in</Link>
      </div>
    </Box>
  );
}

export default SignUp;
