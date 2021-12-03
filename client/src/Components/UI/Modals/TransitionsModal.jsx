import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { modalStyle } from "./styles";
import Fade from '@mui/material/Fade';





export default function TransitionsModal(props) {
  const { modalOpen, setModalOpen } = props;
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* Prevent looping the display of the modal when the user is clicking outside of the modal */}
        <Fade in={modalOpen}>
          <Box sx={modalStyle}>

            {modalOpen ? props.content() : ""}
          </Box>
        </Fade>

      </Modal>
    </div>
  );
}