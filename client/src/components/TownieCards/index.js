import React from "react";
import { Container, Typography, Grid } from "@material-ui/core"

function TownieCards(props) {
    console.log(props)
    const card = {
        background: "black",
        maxWidth: "220px",
        borderRadius: "20px",
        color: "white",
        padding: 7,
        fontSize: 16,
        minHeight: 20,
        margin: "0 auto",
        display: "block",
        marginTop: 2,
        marginBottom: 2,
        boxShadow: "0 0 20px #6EFAFB"
    }

    const cardContent = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <Container maxWidth="xl">
            <Grid container spacing={1}>
                {props.townies.map((townie) => (
                    <Grid item xs={12}>
                        <div style={card}>
                            <div style={cardContent}>
                                <Typography variant="body1"><i><b>{townie.username}</b> who is {townie.type}!</i></Typography>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default TownieCards