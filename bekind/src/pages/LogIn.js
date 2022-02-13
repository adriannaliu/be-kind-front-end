import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LogIn = () => {
    const [state, setState] = React.useState({
        username: '',
        password: '',
    });

    const handleSubmit = (e) => {

        axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
        axios.defaults.xsrfCookieName = 'csrftoken';

        axios.post('https://bekindapi.herokuapp.com/login/', {
            'username': state.username,
            'password': state.password,
        }).then((response) => {
            if (response.data.detail === 'success') {
                console.log('success!');
            }
        })
            .catch(e => console.log(e.response));
        // API CALL 
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <h1>
                BeKind.
            </h1>
            <h3 style={{ margin: "8px" }}>
                Log In
            </h3>
            <div>
                <div>
                    <TextField fullWidth
                        required
                        id="outlined-required"
                        label="Username"
                        value={state.username}
                        onChange={e => setState({ ...state, username: e.target.value })}
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
                <br></br>
                <Button variant="contained" style={{ backgroundColor: '#E2725B' }}>
                    <Link to="/dashboard" style={{ color: "#FFFFFF" }} onClick={() => handleSubmit()}
                    >SIGN IN</Link>
                </Button>
            </div>
            <br></br>
            <div style={{ color: "#656362" }}>
                Don't have an account?&nbsp;&nbsp;
                <Link to="/" style={{ color: "#656362" }}>Sign up </Link>
            </div>
        </Box>
    );
}

export default LogIn;
