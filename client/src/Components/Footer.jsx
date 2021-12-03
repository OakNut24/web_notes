import React from "react";
import { Grid } from "@mui/material";

function Footer() {
    const year = new Date().getFullYear();


    return <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs>
            <footer><p>Copyrights ⓒ {year} - Alon Ben Yaakov </p></footer>
        </Grid>
    </Grid>;
}


export default Footer;