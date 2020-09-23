import React from "react";
import { Container, Typography, Grid } from "@material-ui/core"

function TownieCards(props) {
    const card = {
        background: "black",
        borderRadius: "20px",
        color: "white",
        padding: 10,
        fontSize: 16,
        minHeight: 50,
        margin: "0 auto",
        display: "block",
        marginTop: 10,
        marginBottom: 10,
        boxShadow: "0 0 40px #6EFAFB"
    }

    const cardContent = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <Container maxWidth="xl">
            <br></br>
            <Grid container spacing={5}>
                {props.townies.map((townie) => (
                    <Grid item lg={3} sm={6}>
                        <div style={card}>
                            <div style={cardContent}>
                                <Typography variant="h6"><b><i>{townie.name}</i></b></Typography>
                            </div>
                            <div style={cardContent}>
                                <Typography variant="subtitle1">who is {townie.type}!</Typography>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default TownieCards