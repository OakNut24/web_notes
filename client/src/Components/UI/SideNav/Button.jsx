import React, { useEffect, useState } from "react"
import { Grid } from "@mui/material";
import { SvgIcon } from '@mui/material';

export default function SideButton(props) {

    const [isSelected, setIsSelected] = useState(props.isSelected);

    function changeState(state){
        setIsSelected(state);
    }

    useEffect(() => changeState(props.isSelected), [props.isSelected])

    return <div onClick={() => {props.setCurCategory(props.category)}}><Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        
        className={isSelected ? "side-nav-button side-nav-button-selected" : "side-nav-button side-nav-button-not-selected"}
    > <Grid item xs={5} ><SvgIcon component={props.icon} className="side-nav-button-image" /></Grid> <Grid item xs={7}>{props.text}</Grid></Grid></div>
}            


