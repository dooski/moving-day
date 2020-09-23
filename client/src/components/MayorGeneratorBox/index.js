import React, { useState, createRef } from 'react';
import API from '../../utils/API'
import { Twemoji } from 'react-emoji-render';
import { Typography, Container, Grid, Button, Card, CardContent } from '@material-ui/core';
import MayorCard from '../MayorCard'

function MayorGeneratorBox() {

    const [currentMayor, setCurrentMayor] = useState({})

    const mayorRef = createRef()

    const section = {
        boxShadow: "10px 10px black",
    };

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
        textJustify: "inter-word"
    }

    const empty = {
        height: 500
    }

    function NMG() {
        API.makeMayorNess()
            .then((res) => {
                let mayor = res.data
                console.log(mayor)
                setCurrentMayor(mayor)
            })
            .then(window.scrollTo(0, mayorRef.current.offsetTop))
    }

    function BMG() {
        API.makeMayorBiz()
            .then((res) => {
                let mayor = res.data
                console.log(mayor)
                setCurrentMayor(mayor)
            })
            .then(window.scrollTo(0, mayorRef.current.offsetTop))
    }

    function JMG() {
        API.makeMayorJazz()
            .then((res) => {
                let mayor = res.data
                console.log(mayor)
                setCurrentMayor(mayor)
            })
            .then(window.scrollTo(0, mayorRef.current.offsetTop))
    }

    function FMG() {
        API.makeMayorFourth()
            .then((res) => {
                let mayor = res.data
                console.log(mayor)
                setCurrentMayor(mayor)
            })
            .then(window.scrollTo(0, mayorRef.current.offsetTop))
    }

    return (
        <Container maxWidth="lg">
            <hr />
            <Typography variant="body1" style={body}>
                Hello, future tenant. Today, we will be plucking a few mayors out from the various mobs known as <b>Parties</b>.
                These are unlike the parties you know of. These <b>Parties</b> are in <b>bold font</b>. What's bold font,
                you may be asking? You'll just have to wait while I, uh, develop more. Anyway, here is the <i>RANDOM MAYOR
                GENERATOR</i>. This (or something like it) will be used in the game to pick who will be leading your city. Each
                mayor will mostly conform to their <b>Party's</b> vision for what your city and world should be like, though
                they have varying degrees of loyalty, compentency, and belief that there is a void swirling beneath the city,
                threatening to erase us all from existence. Oh, they also pick the moving days. For now, you can mess around
                and pick a party and see who we got.
            </Typography>
            <br />
            <hr />
            <br />
            <Grid container spacing={3}>
                <Grid item sm={6}>
                    <div style={section}>
                        <Card>
                            <div style={loch} id="ness-card">
                                <Typography variant="h5" style={title}>LOCH NESS MONSTER PARTY</Typography>
                                <hr />
                                <Typography variant="body2" style={body}>Worshippers of the sea beasts,
                                the Party's goal is to uproot the current
                                Nessie-denying world order. The Loch Ness Monster Party
                                thrives in chaos and will declare moving days seemingly
                                on a whim, aggressively avoiding patterns. Also, good
                                flavor text.</Typography>
                                <br />
                                <Button style={button} id="ness" onClick={NMG}>
                                    <Grid container spacing={1} style={buttonContent}>
                                        <Grid item sm={2}><Twemoji style={emoji} text=":dragon_face:" /></Grid>
                                        <Grid item sm={8}>BLESS THIS NESS</Grid>
                                        <Grid item sm={2}><Twemoji style={emoji} text=":dragon_face:" /></Grid>
                                    </Grid>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Grid>
                <Grid item sm={6}>
                    <div style={section}>
                        <Card>
                            <div style={business} id="biz-card">
                                <Typography variant="h5" style={title}>BUSINESS TIME PARTY</Typography>
                                <hr />
                                <Typography variant="body2" style={body}>Nothing says "mayor material"
                                like being completely bought out and controlled
                                by the suits, right? The Business Time Party focuses on
                                rigid laws, leading to standardized moving days outside
                                of the 9-5 business hours. They also have no concept
                                of sexual innuendos.</Typography>
                                <br />
                                <Button style={button} id="biz" onClick={BMG}>
                                    <Grid container spacing={1} style={buttonContent}>
                                        <Grid item xs={2}><Twemoji style={emoji} text=":moneybag:" /></Grid>
                                        <Grid item xs={8}>STONKS SEASON</Grid>
                                        <Grid item xs={2}><Twemoji style={emoji} text=":moneybag:" /></Grid>
                                    </Grid>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Grid>
                <Grid item sm={6}>
                    <div style={section}>
                        <Card>
                            <div style={jazz} id="jazz-card">
                                <Typography variant="h5" style={title}>THAT'S JAZZ PARTY</Typography>
                                <hr />
                                <Typography variant="body2" style={body}>The Party focused
                                on kicking it's feet up and shrugging off the cries of
                                agony in the streets. Moving days will be longer but happen less often.
                                The laissez-faire nature of the That's Jazz Party means more activity between moving days,
                                giving more oppurtunities to increase Cool Points.</Typography>
                                <br />
                                <Button style={button} id="jazz" onClick={JMG}>
                                    <Grid container spacing={1} style={buttonContent}>
                                        <Grid item xs={2}><Twemoji style={emoji} text=":saxophone:" /></Grid>
                                        <Grid item xs={8}>THAT'S JAZZ, BABY</Grid>
                                        <Grid item xs={2}><Twemoji style={emoji} text=":saxophone:" /></Grid>
                                    </Grid>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Grid>
                <Grid item sm={6}>
                    <div style={section}>
                        <Card>
                            <div style={fourth} id="fourth-card">
                                <Typography variant="h5" style={title}>FOURTH PARTY</Typography>
                                <hr />
                                <Typography variant="body2" style={body}>Finally, a Party for the rest of us! The Fourth Party is the fourth party out
                                of the four parties. The Party values whatever things haven't already been valued and
                                is vehemently against whatever things have already been valued. This ends up being a mix of anti-Bigfoot,
                    pro-dodgeball, pro-disco, and anti-candles.</Typography>
                                <br />
                                <Button style={button} id="fourth" onClick={FMG}>
                                    <Grid container spacing={1} style={buttonContent}>
                                        <Grid item xs={2}><Twemoji style={emoji} text=":four:" /></Grid>
                                        <Grid item xs={8}>HEAD EMPTY NO THOUGHTS</Grid>
                                        <Grid item xs={2}><Twemoji style={emoji} text=":four:" /></Grid>
                                    </Grid>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Grid>
            </Grid>
            <br />
            <hr />
            <br />
            {currentMayor.name ? (
                <MayorCard name={currentMayor.name}
                    party={currentMayor.party}
                    loyalty={currentMayor.loyalty}
                    competent={currentMayor.competent}
                    voidism={currentMayor.voidism} />) : (
                    <div style={empty}></div>
                )}

            <div ref={mayorRef}></div>
            <br></br>
        </Container>
    )
}

export default MayorGeneratorBox