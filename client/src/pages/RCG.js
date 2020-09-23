import React from "react";
import "../App.css";
import CGB from "../components/CityGeneratorBox"
import { Box } from "@material-ui/core"

function RCG() {
    return (
        <Box m={5}>
            <CGB />
        </Box>
    )
}

export default RCG