import React, { useState } from "react";
import { Redirect } from "react-router-dom"
import { NotificationManager } from "react-notifications"
import "../App.css"
import { Typography, Container, TextField, Grid, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import styled from 'styled-components'
import API from "../utils/API";

const MyTextField = styled(TextField)`
    .MuiInputBase-input {
        color: white;
    }
    .MuiInputLabel-root {
        color: white;
    }
    .MuiOutlinedInput-root {
    &:hover 
        fieldset {
        border-color: white
    } 
    &.Mui-focused 
        fieldset {
        border-color: white
}}`


function Login() {

    const LoginBox = {
        background: "#993955",
        width: "90%",
        maxWidth: "500px",
        marginTop: 35,
        marginBottom: 35,
        borderRadius: 20,
        padding: 30
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [value, setValue] = useState("register");
    const [type, setType] = useState("");
    const [key, setKey] = useState("")
    const [redirect, setRedirect] = useState(null)


    function keyCheck(key) {
        if (key == "GET DUNKED ON") {
            return 1
        } else return 0
    }

    const Register = e => {
        e.preventDefault();
        let allowed = keyCheck(key)
        if (allowed === 1) {
            const userData = {
                username: username,
                type: type,
                email: email,
                password: password,
                alpha: allowed
            };
            API.userRegister(userData)
                .then(res => {
                    console.log(res)
                    API.userLogin(userData)
                        .then(res => {
                            console.log(res)
                            NotificationManager.success("Welcome!", "You're In!", 4000)
                            setRedirect('/game')
                        })
                        .catch(err => {
                            console.log(err);
                            console.log(err.response)
                            NotificationManager.error("Something is....... wrong", "uh oh!", 4000)
                        })
                })
                .catch(err => {
                    console.log(err);
                    console.log(err.response)
                    NotificationManager.error("Something is....... wrong", "uh oh!", 4000)
                })
        } else NotificationManager.warning("that isn't the key /:", "lmao", 4000)
    }

    const Login = e => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        };
        API.userLogin(userData)
            .then(res => {
                console.log(res)
                NotificationManager.success("Welcome back!", "Heyooooooo!", 4000)
                setRedirect('/game')
            })
            .catch(err => {
                console.log(err);
                console.log(err.response)
                NotificationManager.error("Something is....... wrong", "uh oh!", 4000)
            })
    }


    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleChangeType = (e) => {
        setType(e.target.value);
    }

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <Container style={LoginBox}>
            <div>
                <Typography variant="h4">Welcome to the <b>Moving Day</b> Alpha.</Typography>
                <hr />
                <FormControl component="fieldset">
                    <Typography variant="subtitle2"><i>What do you want from me?</i></Typography>
                    <RadioGroup aria-label="login" name="login1" value={value} onChange={handleChange}>
                        <FormControlLabel value="login" control={<Radio />} label="Login" />
                        <FormControlLabel value="register" control={<Radio />} label="Register" />
                    </RadioGroup>
                </FormControl>
                <hr /> {value == "login" ? (
                    <Typography variant="subtitle2"><i>Remind me who you are again?</i></Typography>
                ) : (<div></div>
                    )} {value == "register" ? (
                        <Typography variant="subtitle2"><i>Ok word, welcome, whatever, who the hell are you?</i></Typography>
                    ) : (<div></div>)}
                <br></br>
                <form>
                    <Grid container spacing={3}>
                        {value == "register" ? (
                            <Grid item xl={6}>
                                <MyTextField
                                    variant="outlined"
                                    type="email"
                                    label="Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>) : (<div></div>)}
                        {value == "register" ? (
                            <Grid item xl={6}>
                                <RadioGroup row aria-label="type" name="type" value={type} onChange={handleChangeType}>
                                    <FormControlLabel value="nerd" control={<Radio />} label="Nerd" />
                                    <FormControlLabel value="cool" control={<Radio />} label="Cool" />
                                </RadioGroup>
                            </Grid>) : (<div></div>)}
                        <Grid item xs={6}>
                            <MyTextField
                                variant="outlined"
                                type="email"
                                label="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <MyTextField
                                variant="outlined"
                                type="password"
                                label="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        {value == "register" ? (
                            <Grid item xs={12}>
                                <MyTextField
                                    variant="outlined"
                                    type="email"
                                    label="Key (leave blank if none)"
                                    onChange={(e) => setKey(e.target.value)}
                                />
                            </Grid>
                        ) : (<div></div>)}
                    </Grid>
                    <br></br>
                    <Container maxWidth="xs">
                        {value == "login" ? (
                            <Button variant="contained" onClick={Login}>Login</Button>
                        ) : (
                                <Button variant="contained" onClick={Register}>Register</Button>)}
                    </Container>
                </form>
            </div>
        </Container>
    )
}

export default Login