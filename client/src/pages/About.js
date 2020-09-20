import React from "react";
import "../App.css"
import { Typography, Container, Grid, Button, Card, CardContent } from '@material-ui/core'
import logo from "../imgs/logo.png"

function About() {
    const AboutBox = {
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
        maxWidth: "100%"
    }

    return (
        <Container style={AboutBox}>
            <div>
                <Typography variant="h2">It is, regrettably, <b><i>Moving Day</i></b>.</Typography>
                <Typography variant="h5">A bad game in development about cities, moving, and being cooler than your friends.</Typography>
                <hr />
                <br />
                <Typography variant="body"><b>Moving Day</b> exists in a world where everyone rents and everyone must move
                when the Mayor decides it is, regrettably, Moving Day for all. Culture is dominated by Moving Day; it's
                all anyone wants to talk about. Moving Days come on average every three or four days,
                and every day in between is just getting ready for the next one. Scouting out the rarest apartments,
                assembling crews to move quicker, arming themselves against hostile furniture, committing acts of
                sabatoge against their friends, all in the name of being the coolest in the neighborhood. Sure, tenants
                could ban together and stand up against the tyrannical political machine that profits off such constant
                moving, but I mean, that wouldn't be very cool. </Typography>
                <br />
                <br />
                <Typography variant="body">So where is this game? Welp, it's not made yet. <b>Moving Day</b> is still
                deep in the early stages of development, but this site will for now serve as a hub for the different
                bits and pieces that will eventually comprise what industry experts call a full game. For now, you can run through the sorts
                of Mayors who will rule and ruin your lives. Soon, you'll be able to generate the cities where those
                Mayors will rule and ruin, as well as the Townies you'll bump into.</Typography>
            </div>
            <img src={logo} style={center}></img>
        </Container>
    )
}

export default About