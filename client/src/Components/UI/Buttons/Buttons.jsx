import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import SaveIcon from '@mui/icons-material/Save';

export const SettingsButton = styled(Button)(({ theme }) => ({ //Export the custom made settings button 
    color: theme.palette.getContrastText(blue[100]),
    backgroundColor: blue[100],
    '&:hover': {
        backgroundColor: blue[50], //When hovering change the color of the background
    },
}));

export function DuplicateButtonModal(props) {

    return <Box >
        <Button variant="contained" endIcon={<SaveIcon />} onClick={props.handleClick}>
            {props.text}</Button>
    </Box>;
}



