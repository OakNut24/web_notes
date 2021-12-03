
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

import Fab from "@mui/material/Fab";
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

export function SaveButton(props) {

    return <Tooltip title="Save" ransitionComponent={Zoom} TransitionProps={{ timeout: 100 }} arrow><div><Fab onClick={props.onClick}>
        <SaveOutlinedIcon />
    </Fab></div></Tooltip>;
}
export function CancelButton(props) {
    return <Tooltip title="Cancel" ransitionComponent={Zoom} TransitionProps={{ timeout: 100 }} arrow><div><Fab onClick={props.onClick}>
        <CancelOutlinedIcon />
    </Fab></div></Tooltip>;
}

export function DeleteButton(props) {
    if (props.status === "disabled") {
        return <Tooltip title="Delete" ransitionComponent={Zoom} TransitionProps={{ timeout: 100 }} arrow><div><Fab disabled onClick={props.onClick}>
            <DeleteForeverOutlinedIcon />
        </Fab></div></Tooltip>;
    } else {
        return <Tooltip title="Delete" ransitionComponent={Zoom} TransitionProps={{ timeout: 100 }} arrow><div><Fab onClick={props.onClick}>
            <DeleteForeverOutlinedIcon />
        </Fab></div></Tooltip>;
    }
}
export function TrashButton(props) {
    if (props.status === "disabled") {
        return <Tooltip title="Trash" ransitionComponent={Zoom} TransitionProps={{ timeout: 100 }} arrow><div><Fab disabled onClick={props.onClick}>
            <DeleteOutlinedIcon />
        </Fab></div></Tooltip>;
    } else {
        return <Tooltip title="Trash" ransitionComponent={Zoom} TransitionProps={{ timeout: 100 }} arrow><div><Fab onClick={props.onClick}>
            <DeleteOutlinedIcon />
        </Fab></div></Tooltip>;
    }
}

export function EditButton(props) {
    if (props.status === "disabled") {
        return <Tooltip title="Edit" ransitionComponent={Zoom} TransitionProps={{ timeout: 100 }} arrow><div><Fab disabled onClick={props.onClick}>
            <EditOutlinedIcon />
        </Fab></div></Tooltip>;
    } else {
        return <Tooltip title="Edit" ransitionComponent={Zoom} TransitionProps={{ timeout: 100 }} arrow><div><Fab onClick={props.onClick}>
            <EditOutlinedIcon />
        </Fab></div></Tooltip>;
    }

}

export function DuplicateButton(props) {

    if (props.status === "disabled") {
        return <Tooltip title="Duplicate" ransitionComponent={Zoom} TransitionProps={{ timeout: 100 }} arrow><div><Fab disabled onClick={props.onClick}>
            <ContentCopyOutlinedIcon />
        </Fab> </div></Tooltip>;
    } else {
        return <Tooltip title="Duplicate" ransitionComponent={Zoom} TransitionProps={{ timeout: 100 }} arrow><div><Fab onClick={props.onClick}>
            <ContentCopyOutlinedIcon />
        </Fab> </div></Tooltip>;
    }
}

export function ArchiveButton(props){
    if (props.status === "disabled") {
        return <Tooltip title="Archive" ransitionComponent={Zoom} TransitionProps={{ timeout: 100 }} arrow><div><Fab disabled onClick={props.onClick}>
            <ArchiveOutlined />
        </Fab> </div></Tooltip>;
    } else {
        return <Tooltip title="Archive" ransitionComponent={Zoom} TransitionProps={{ timeout: 100 }} arrow><div><Fab onClick={props.onClick}>
            <ArchiveOutlined />
        </Fab> </div></Tooltip>;
    }
}

export function UnarchiveButton(props){
    if (props.status === "disabled") {
        return <Tooltip title="Unarchive" ransitionComponent={Zoom} TransitionProps={{ timeout: 100 }} arrow><div><Fab disabled onClick={props.onClick}>
            <UnarchiveOutlinedIcon />
        </Fab> </div></Tooltip>;
    } else {
        return <Tooltip title="Unarchive" ransitionComponent={Zoom} TransitionProps={{ timeout: 100 }} arrow><div><Fab onClick={props.onClick}>
            <UnarchiveOutlinedIcon />
        </Fab> </div></Tooltip>;
    }
}


export function CreateNoteButton(props){

    return <div className="create-note" ><Fab  ><CreateOutlinedIcon /></Fab></div>
}

