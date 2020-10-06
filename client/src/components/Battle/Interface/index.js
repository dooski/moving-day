import React, { useState } from 'react';
import API from '../../../utils/API'
import { Typography, Container, Grid, Button, Box } from '@material-ui/core';

function Interface() {

    const [currentOpponent, setCurrentOpponent] = useState({})

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
        textJustify: "inter-word"
    }

    const battleBox = {
        width: "350px",
        border: "4px solid white",
        length: "500px"
    }

    return (
        <div>
            <Container maxWidth="lg">
                <Box style={battleBox}>

                </Box>
            </Container>
            {currentOpponent.name ? (
                <div>
                    {/* content goes here */}
                </div>
            ) : (
                    <div></div>
                )}
            <br></br>
        </div>
    )
}

export default Interface