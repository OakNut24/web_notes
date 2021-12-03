import React, { useState } from "react";

import Typography from '@mui/material/Typography';

import TransitionsModal from "./TransitionsModal";


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";

function OneActionModal(props) {

    const { modalOpen, setModalOpen } = props;


    function loadModalContent() {
        setModalOpen(true);

        return <React.Fragment>
            <Typography id="transition-modal-title" variant="h6" component="h2">
                {props.question}
            </Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12}> </Grid>
                <Stack direction="row" spacing={8} >
                    <Button variant="contained" color="success" onClick={() => { props.onClick() }}>
                        Yes
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => { setModalOpen(false) }}>
                        No
                    </Button>
                </Stack>
            </Grid>
        </React.Fragment>
    }



    return <TransitionsModal modalOpen={modalOpen} setModalOpen={setModalOpen} content={loadModalContent} />;
}

export default OneActionModal;
