import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"
import "../App.css";
import Interface from "../components/Game/Interface"
import TownieCards from "../components/TownieCards"
import { Box, Container, Typography } from "@material-ui/core"
import API from "../utils/API";

function Game() {
    const [userData, setUserData] = useState()
    const [citizens, setCitizens] = useState()
    const [userRedirect, setUserRedirect] = useState(0)
    const [load, setLoad] = useState(0)

    const townieRow = {
        maxWidth: "600px",
        width: "100%"
    }

    const card = {
        background: "black",
        borderRadius: "20px",
        maxWidth: "450px",
        color: "white",
        padding: 10,
        fontSize: 16,
        margin: "0 auto",
        display: "block",
        marginTop: 20,
        marginBottom: 10,
    }

    useEffect(() => {
        API.loadUser()
            .then((res) => {
                setUserData(res.data)
                setLoad(1)
            })
            .catch((err) => {
                console.log(err);
                setUserRedirect(1);
            })
        API.loadAllUsers()
            .then((res) => {
                console.log({
                    townies:
                        res.data
                })
                setCitizens(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    if (userRedirect === 1) {
        return <Redirect to="/login" />;
    }

    if (!userData || !citizens) {
        return <p>one sec </p>
    } else return (
        <div>
            {console.log(userData)}
            {load == 0 ? (
                <div></div>) : (
                    <Box m={5}>
                        <Interface props={userData} />
                        <Container style={card}>
                            <Typography variant="subtitle1"><i>THE PROTO-SOCIETAL SOUP CURRENTLY CONSISTS OF: </i></Typography>
                        </Container>
                        <Container style={townieRow}>
                            <TownieCards townies={citizens} />
                        </Container>

                    </Box>
                )}
        </div>
    )
}

export default Game