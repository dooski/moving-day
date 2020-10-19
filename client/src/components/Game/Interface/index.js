import React, { useState } from 'react';
import API from '../../../utils/API'
import { Typography, Container, Grid, Button, Box } from '@material-ui/core';

function Interface() {

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
        width: "500px",
        border: "4px solid white",
        height: "500px",
        background: "black"
    }

    return (
        <div>
            <Container maxWidth="lg" style={battleBox}>
                <div style={body}>
                    <Typography variant="h3">Hello, Dooski.</Typography>
                    <hr />

                </div>
            </Container>
        </div>
    )
}

export default Interface