import React, { useState } from 'react';
import API from '../../../utils/API'
import { Typography, Container, Grid, Button, Box } from '@material-ui/core';

function Interface(props) {
    let user = props.props
    const button = {
        background: "black",
        borderRadius: "20px",
        color: "white",
        padding: 10,
        fontSize: 16,
        minHeight: 70,
        margin: "0 auto",
        display: "block",
        marginTop: 10,
        marginBottom: 10,
        boxShadow: "0 0 40px #6EFAFB"
    }

    const body = {
        textAlign: "justify",
        textJustify: "inter-word",
        margin: "5px"
    }

    const battleBox = {
        width: "100%",
        maxWidth: "500px",
        border: "4px solid white",
        background: "black"
    }

    return (
        <div>
            <Container maxWidth="lg" style={battleBox}>
                <div style={body}>
                    <Typography variant="h3">Hello, {user.username}!</Typography>
                    <hr />
                    <Typography variant="h5">You <i>do</i> seem pretty {user.type}! Please stand by
                    indefinitely while a society is formed.</Typography>
                    <br />
                </div>
            </Container>
        </div>
    )
}

export default Interface