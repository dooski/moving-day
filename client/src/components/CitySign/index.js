import React from "react";
import { Container, Typography } from "@material-ui/core"

function CitySign(props) {
    const mainSign = {
        margin: "auto",
        padding: 10,
        borderRadius: 15,
        maxWidth: 500,
        backgroundColor: "#009900",
        border: "5px white solid",
        textAlign: "center",
    }

    const secSign = {
        margin: "auto",
        padding: 10,
        borderRadius: 15,
        maxWidth: 500,
        backgroundColor: "#0000FF",
        border: "5px white solid",
        textAlign: "center",
    }

    return (
        <Container maxWidth="xl">
            <div style={mainSign}>
                <Typography variant="body1">Welcome to</Typography>
                <Typography variant="h4"><b>{props.name}</b></Typography>
                <br />
                <Typography variant="h6">Mayor {props.mayor} </Typography>
                <Typography variant="h6"><b>POPULATION {props.population}</b></Typography>
            </div>
            <br />
            <div style={secSign}>
                <Typography variant="h6">A CITY {props.traits.primary.toUpperCase()} THAT IS {props.traits.secondary.toUpperCase()}</Typography>
            </div>
        </Container>
    )
}

export default CitySign