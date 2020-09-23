import React from "react"
import { Typography, Card, CardContent } from '@material-ui/core'

function MayorCard(props) {
    const mayorcard = {
        background: "black",
        boxShadow: "5px 5px 10px 10px white",
        borderRadius: 20,
        color: "white",
        maxWidth: 500,
        margin: "0 auto",
        display: "block",
    }

    const right = {
        textAlign: "right"
    }

    function attrTranslate(x) {
        if (x === 0) {
            return "None at All"
        } if (x === 1) {
            return "Abysmal"
        } if (x === 2) {
            return "Low"
        } if (x === 3) {
            return "Average"
        } if (x === 4) {
            return "High"
        } if (x === 5) {
            return "Super Duper High"
        }
    }

    return (
        < Card style={mayorcard} >
            <CardContent >
                <Typography variant="h6"><i>Bow down before . . .</i></Typography>
                <Typography variant="h4"><b><u>{props.name.toUpperCase()}</u></b></Typography>
                <Typography variant="h6" style={right}><i>of the <b>{props.party}</b>.</i></Typography>
                <hr />
                <Typography variant="h6">Loyalty: {attrTranslate(props.loyalty)}</Typography>
                <Typography variant="h6">Competency: {attrTranslate(props.competent)}</Typography>
                <Typography variant="h6">Voidism: {attrTranslate(props.voidism)}</Typography>
            </CardContent>
        </Card >
    )
}

export default MayorCard