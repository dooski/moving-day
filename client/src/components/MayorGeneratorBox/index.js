import React from 'react';
import { Twemoji } from 'react-emoji-render';
import { Typography, Container, Grid, Button, Card } from '@material-ui/core'

function MayorGeneratorBox() {

    const section = {
        height: "100%",
    };

    const loch = {
        background: "#698F3F",
        color: "white",
        padding: 10
    }

    const business = {
        background: "#773344",
        color: "white",
        padding: 10
    }

    const jazz = {
        background: "#048BA8",
        color: "white",
        padding: 10
    }

    const button = {
        background: "black",
        borderRadius: "25%",
        color: "white",
        padding: 10,
        fontSize: 20,
        minHeight: 50,
        marginTop: 10,
        marginLeft: "8%",
        marginRight: "8%",
        marginBottom: 10,
    }

    const emoji = {
        fontSize: 35,
        marginLeft: 5,
        marginRight: 5
    }

    return (
        <Container maxWidth="lg">
            <Typography variant="h6">
                Hello, future tenant. Today we will be pulling a new mayor
                out of the ether using the RANDOM MAYOR GENERATOR. It's
                very painful for them I'd imagine. Or at least disorienting.
                To begin, select one of these parties.
            </Typography>
            <br />
            <Grid container spacing={3}>
                <Grid item sm>
                    <div style={section}>
                        <Card>
                            <div style={loch}>
                                <Typography variant="h6">LOCH NESS MONSTER PARTY</Typography>
                                <hr />
                                <Typography variant="p">Worshippers of the sea beasts,
                                the Party's goal is to uproot the current
                                Nessie-denying world order. The Loch Ness Monster Party
                                thrives in chaos and will declare moving days seemingly
                                on a whim, aggressively avoiding patterns. Also, good
                                flavor text.</Typography>
                                <br />
                                <Button style={button} id="nessies">
                                    <Twemoji style={emoji} text=":dragon_face:" />
                                   BLESS THIS NESS
                                    <Twemoji style={emoji} text=":dragon_face:" />
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Grid>
                <Grid item sm>
                    <div style={section}>
                        <Card>
                            <div style={business}>
                                <Typography variant="h6">BUSINESS TIME PARTY</Typography>
                                <hr />
                                <Typography variant="p">Nothing says "mayor material"
                                like being completely bought out and controlled
                                by the suits, right? The Business Time Party focuses on
                                rigid laws, leading to standardized moving days outside
                                of the 9-5 business hours. They also have no concept
                                of sexual innuendos.</Typography>
                                <br />
                                <Button style={button} id="bizzies">
                                    <Twemoji style={emoji} text=":city_sunrise:" />
                                    STONKS SEASON
                                    <Twemoji style={emoji} text=":city_sunrise:" />
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Grid>
                <Grid item sm>
                    <div style={section}>
                        <Card>
                            <div style={jazz}>
                                <Typography variant="h6">THAT'S JAZZ PARTY</Typography>
                                <hr />
                                <Typography variant="p">The Party focused
                                on kicking it's feet up and shrugging off the cries of
                                agony in the streets. Moving days will be longer but happen less often.
                                The laissez-faire nature of the That's Jazz Party means more activity between moving days,
                                giving more oppurtunities to increase Cool Points.</Typography>
                                <br />
                                <Button style={button} id="jazzes">
                                    <Twemoji style={emoji} text=":saxophone:" />
                                    THAT'S JAZZ, BABY!
                                    <Twemoji style={emoji} text=":saxophone:" />
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MayorGeneratorBox