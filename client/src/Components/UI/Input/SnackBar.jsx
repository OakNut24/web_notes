import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props) {
  const { snack, setSnack } = props;


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') { //If the client clicks out side the alert do nothing
      return;
    }

    setSnack({ isOpen: false, message: snack.message, type: snack.type });
  };

  return (
    <Stack spacing={0} sx={{ width: '100%' }}>
      <Snackbar open={snack.isOpen} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}>
        <Alert onClose={handleClose} severity={snack.type} sx={{ width: '100%' }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
