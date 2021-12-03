import React from "react"
import { Grid } from "@mui/material";
import SideButton from "./Button";

import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';

export default function SideNav(props) {




    return <Grid container
        direction="column" className="side-nav"
        justifyContent="flex-start"
        alignItems="stretch" item xs>
        <Grid item xs={1}>
            <SideButton icon={EventNoteOutlinedIcon} isSelected={props.curCategory === "notes" ? true : false} text={"Notes"} category="notes" setCurCategory={props.setCurCategory} ></SideButton>
        </Grid>


        <Grid item xs={1}>
            <SideButton icon={ArchiveOutlinedIcon} isSelected={props.curCategory === "archive" ? true : false} text={"Archive"} category="archive" setCurCategory={props.setCurCategory} />
        </Grid>
        <Grid item xs={1}>
            <SideButton icon={DeleteIcon} isSelected={props.curCategory === "trash" ? true : false} text={"Trash"} category="trash" setCurCategory={props.setCurCategory} />
        </Grid>
    </Grid>
}
