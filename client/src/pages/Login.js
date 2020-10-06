import React, { useState, useEffect } from "react";
import "../App.css"
import { Typography, Container, Grid, Button, Card, CardContent } from '@material-ui/core'
import logo from "../imgs/logo.png"
import API from "../utils/API";

function Login() {
    const LoginBox = {
        background: "#000000",
        width: "90%",
        marginTop: 35,
        marginBottom: 35,
        boxShadow: "5px 5px 10px 10px white",
        borderRadius: 20,
        padding: 30
    }

    const center = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
        maxWidth: "500px"
    }
    const [choice, setChoice] = useState("login")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Register = e => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        };
        API.userRegister(userData)
            .then(res => { console.log(res) })
            .catch(err => {
                console.log(err);
                console.log(err.response)
            })
    }
    const Login = e => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        };
        API.userLogin(userData)
            .then(res => { console.log(res) })
            .catch(err => {
                console.log(err);
                console.log(err.response)
            })
    }
    return (
        <Container style={LoginBox}>
            <div className="card-body">
                <h5 className="card-title">Log-In</h5>
                <hr />
                <form className="sign-in-form">
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success" onClick={Login}>Login</button>
                    <button type="submit" className="btn btn-success" onClick={Register}>Register</button>
                </form>
            </div>
        </Container>
    )
}

export default Login