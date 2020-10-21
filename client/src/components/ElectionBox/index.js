import React, { useState } from 'react';
import API from '../../utils/API'
import { Twemoji } from 'react-emoji-render';
import { Typography, Container, Grid, Button, Card } from '@material-ui/core';

function ElectionBox(props) {
    console.log(props)
    let cityName = props.props.cityName
    let bizName = props.props.election.biz.name
    let fourthName = props.props.election.fourth.name
    let jazzName = props.props.election.jazz.name
    let nessName = props.props.election.ness.name

    const section = {
        boxShadow: "10px 10px black"
    }

    const height = {
        height: "100%"
    }

    const loch = {
        background: "#698F3F",
        color: "white",
        padding: 10,
    }

    const business = {
        background: "#773344",
        color: "white",
        padding: 10,
    }

    const jazz = {
        background: "#048BA8",
        color: "white",
        padding: 10
    }

    const fourth = {
        background: "#B80C09",
        color: "white",
        padding: 10
    }

    const title = {
        fontWeight: 700,
        fontStyle: "italic"
    }

    const button = {
        background: "black",
        borderRadius: "20px",
        color: "white",
        padding: 2,
        fontSize: 16,
        minHeight: 50,
        margin: "0 auto",
        display: "block",
        marginTop: 10,
        marginBottom: 10,
    }

    const buttonContent = {
        justifyContent: "center",
        alignItems: "center"
    }

    const emoji = {
        fontSize: 18,
        marginLeft: 5,
        marginRight: 5
    }

    const body = {
        textAlign: "justify",
        textJustify: "inter-word",
        margin: "5px"
    }

    const titleBox = {
        background: "black",
        textAlign: "center",
        padding: 20,
        borderRadius: 40,
        maxWidth: "800px"
    }

    function voteNess() {
        console.log("vote ness")
    }

    function voteBiz() {
        console.log("vote biz")
    }

    function voteJazz() {
        console.log("vote jazz")
    }

    function voteFourth() {
        console.log("vote fourth")
    }

    return (
        <Container maxWidth="lg">
            <Container style={titleBox}>
                <Typography variant="h4">
                    <i><b>THE NEW CITY OF {cityName.toUpperCase()} NEEDS A MAYOR!</b></i>
                </Typography>
                <Typography variant="body1">
                    Election Day nears! Read about your four potential candidates.
                </Typography>
            </Container>
            <br />
            <br />
            <Grid container spacing={3}>
                <Grid item sm={6} style={height}>
                    <div style={section}>
                        <Card>
                            <div style={loch} id="ness-card">
                                <Typography variant="h3" style={title}>{nessName}</Typography>
                                <Typography variant="h5" style={title}>of the LOCH NESS MONSTER PARTY</Typography>
                                <hr />
                                <Typography variant="body2" style={body}>Worshippers of the sea beasts,
                                the Party's goal is to uproot the current Nessie-denying world order.
                                With {nessName} at the helm, {cityName} will tend towards a more chaotic society;
                                townies will unpredictably switch friendships and sometimes you'll just lose points
                                because the Party thrives in chaos. Bless This Ness. <Twemoji style={emoji} text=":dragon_face:" /></Typography>
                                {/* <br /> */}
                                {/* <Button style={button} id="ness" onClick={voteNess}>
                                    <Grid container spacing={1} style={buttonContent}>
                                        <Grid item sm={2}><Twemoji style={emoji} text=":dragon_face:" /></Grid>
                                        <Grid item sm={8}>BLESS THIS NESS</Grid>
                                        <Grid item sm={2}><Twemoji style={emoji} text=":dragon_face:" /></Grid>
                                    </Grid>
                                </Button> */}
                            </div>
                        </Card>
                    </div>
                </Grid>
                <Grid item sm={6}>
                    <div style={section}>
                        <Card>
                            <div style={business} id="biz-card">
                                <Typography variant="h3" style={title}>{bizName}</Typography>
                                <Typography variant="h5" style={title}>of the BUSINESS TIME PARTY</Typography>
                                <hr />
                                <Typography variant="body2" style={body}>{cityName} will become Stonk City with
                                the Business Time Party's Master Plan. Under {bizName}'s boring, boring leadership,
                                you can expect the expected. The Master Plan says so. Says it right there. "Under no
                                circumstances should you expect anything unexpected as this is a waste of resources."
                                Introduces a new NPC: Landlords. Gunshot Gunshot Gunshot Cash Register Noise.
                                <Twemoji style={emoji} text=":moneybag:" /> </Typography>
                                {/* <br /> */}
                                {/* <Button style={button} id="biz" onClick={voteBiz}>
                                    <Grid container spacing={1} style={buttonContent}>
                                        <Grid item xs={2}><Twemoji style={emoji} text=":moneybag:" /></Grid>
                                        <Grid item xs={8}>STONKS SEASON</Grid>
                                        <Grid item xs={2}><Twemoji style={emoji} text=":moneybag:" /></Grid>
                                    </Grid>
                                </Button> */}
                            </div>
                        </Card>
                    </div>
                </Grid>
                <Grid item sm={6}>
                    <div style={section}>
                        <Card>
                            <div style={jazz} id="jazz-card">
                                <Typography variant="h3" style={title}>{jazzName}</Typography>
                                <Typography variant="h5" style={title}>of the THAT'S JAZZ PARTY</Typography>
                                <hr />
                                <Typography variant="body2" style={body}>The Party focused on kicking it's feet up and
                                shrugging off the cries of agony in the streets. {bizName} will make sure that {cityName} is
                                a cool city, daddy-o. Moving days will have longer windows, and sometimes you'll even find
                                a trumpet in the fridge of your new place. Now That's Jazz, Baby! <Twemoji style={emoji} text=":saxophone:" /></Typography>
                                {/* <br /> */}
                                {/* <Button style={button} id="jazz" onClick={voteJazz}>
                                    <Grid container spacing={1} style={buttonContent}>
                                        <Grid item xs={2}><Twemoji style={emoji} text=":saxophone:" /></Grid>
                                        <Grid item xs={8}>THAT'S JAZZ, BABY</Grid>
                                        <Grid item xs={2}><Twemoji style={emoji} text=":saxophone:" /></Grid>
                                    </Grid>
                                </Button> */}
                            </div>
                        </Card>
                    </div>
                </Grid>
                <Grid item sm={6}>
                    <div style={section}>
                        <Card>
                            <div style={fourth} id="fourth-card">
                                <Typography variant="h3" style={title}>{fourthName}</Typography>
                                <Typography variant="h5" style={title}>of the FOURTH PARTY</Typography>
                                <hr />
                                <Typography variant="body2" style={body}>Finally, a Party for the rest of us! The Fourth Party is the fourth party out
                                of the four parties, {fourthName} being the fourth candidate out of the four candidates. They value whatever things
                                haven't already been valued and are vehemently against whatever things have already been valued. Expect {cityName} to be
                                a little .... odd. Head Empty No Thoughts. <Twemoji style={emoji} text=":four:" /> </Typography>
                                {/* <Button style={button} id="fourth" onClick={voteFourth}>
                                    <Grid container spacing={1} style={buttonContent}>
                                        <Grid item xs={2}><Twemoji style={emoji} text=":four:" /></Grid>
                                        <Grid item xs={8}>HEAD EMPTY NO THOUGHTS</Grid>
                                        <Grid item xs={2}><Twemoji style={emoji} text=":four:" /></Grid>
                                    </Grid>
                                </Button> */}
                            </div>
                        </Card>
                    </div>
                </Grid>
            </Grid>
            <br />
            <hr />
            <br />
        </Container>
    )
}

export default ElectionBox