import React, { useState, useEffect } from "react";
import "../App.css";
import Interface from "../components/Game/Interface"
import { Box } from "@material-ui/core"

function Game() {

    const [userData, setUserData] = useState({
        username: "",
        place: 0,
        points: 0,
        type: ""
    })

    return (
        <Box m={5}>
            <Interface />
        </Box>
    )
}

export default Game