import React, { useState } from 'react';
import API from '../../utils/API'
import CitySign from '../CitySign'
import TownieCards from '../TownieCards'
import { Typography, Container, Grid, Button, Card, CardContent } from '@material-ui/core';

function CityGeneratorBox() {

    const [currentCity, setCurrentCity] = useState({})

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

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    function MakeCity() {
        API.makeCity()
            .then((res) => {
                let city = res.data
                city.townies = shuffle(res.data.townies)
                console.log(city.townies)
                setCurrentCity(city)
            })

    }


    return (
        <div>
            <Container maxWidth="lg">
                <hr />
                <Typography variant="body1" style={body}>
                    Hello, future tenant. It's time to build a city. When I say <i>build</i>, I really mean click one button and let an algorithim decide your fate.
                Sound a bit unfair? Looking for a bit more customization? Well, tough, just be glad it isn't possible to generate Cleveland.* The <b>Random City Generator </b>
                will assemble a full city for you with a name, some traits that may or may not mean anything, and several townies you could find there. Click the button
                to get started and decide your urban fate!

            </Typography>
                <br />
                <Typography variant="body2" style={body}>
                    *In the full game, three cities will be generated and you will get to select onen when you first make a game session.
                    Then, you and your group will each vote on a mayor which will influence the types of people who live there. So, you will
                    have a bigger say in the city you live in! Don't worry though, you still won't end up in Cleveland.
            </Typography>
                <br />
                <Button style={button} onClick={MakeCity}>Make a City</Button>
                <br />
                <hr />
                <br />
            </Container>
            {currentCity.name ? (
                <div>
                    <CitySign name={currentCity.name}
                        mayor={currentCity.mayor}
                        population={currentCity.population}
                        traits={currentCity.traits}
                        townies={currentCity.townies} />
                    <TownieCards townies={currentCity.townies} />
                </div>
            ) : (
                    <div></div>
                )}
            <br></br>
        </div>
    )
}

export default CityGeneratorBox