import React, { useState } from "react";


import Typography from '@mui/material/Typography';

import TransitionsModal from "./TransitionsModal";
import NodeInput from "../Input/InputNote.jsx";
import { DuplicateButtonModal } from "../Buttons/Buttons";

function DuplicateNoteModal(props) {

    const { duplicateModalOpen, setDuplicateModalOpen } = props;
    const [newTitle, setNewTitle] = useState({
        title: props.curTitle + "(Copy)"
    });

    function handleDuplicateClick(){
        props.handleDuplicateClick(newTitle.title);
    }

    function loadDuplicatModalContent() {
        setDuplicateModalOpen(true);

        return <React.Fragment>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    Enter name for the duplicated note
                </Typography>
                <div className="input-modal" >
                    <NodeInput name="title"
                        placeholder="Enter title..."
                        maxLength="24"
                        note={newTitle}
                        value={newTitle.title}
                        setNote={setNewTitle}
                    /> </div>

                <DuplicateButtonModal text={"Duplicate"} handleClick={handleDuplicateClick}></DuplicateButtonModal>
        </React.Fragment>
    }

    

    return <TransitionsModal modalOpen={duplicateModalOpen} setModalOpen={setDuplicateModalOpen} content={loadDuplicatModalContent} />;
}

export default DuplicateNoteModal;
