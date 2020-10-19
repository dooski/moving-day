import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"
import "../App.css";
import Interface from "../components/Game/Interface"
import { Box } from "@material-ui/core"
import API from "../utils/API";

function Game() {
    const [userData, setUserData] = useState({
        name: "",
        place: 0,
        points: 0,
        type: ""
    })
    const [userRedirect, setUserRedirect] = useState(0)
    const [load, setLoad] = useState(0)

    useEffect(() => {
        API.loadUser()
            .then((res) => {
                console.log(res.data);
                setUserData({ ...userData, name: res.data.username })
                setLoad(1)
            })
            .catch((err) => {
                console.log(err);
                setUserRedirect(1);
            });
    }, []);

    if (userRedirect === 1) {
        return <Redirect to="/login" />;
    }

    return (
        <div>
            {load == 0 ? (
                <div></div>) : (

                    <Box m={5}>
                        <Interface props={userData} />
                    </Box>
                )}
        </div>
    )
}

export default Game