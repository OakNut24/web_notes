import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import { getUserInfo, userLoggedOut } from "./Services/localStorage";
import axios from "axios";
import { useHistory } from "react-router-dom";
import serviceUrl from "./Services/url";


import Grid from '@mui/material/Grid';
import NavMenu from "./UI/NavMenu";
function Header() {
    const userInfo = getUserInfo();
    const url = serviceUrl();
    const history = useHistory();

    const logOut = () => {
        if (userInfo) {
            axios.get(url + "/auth/logout", { withCredentials: true }) //WHEN LOCAL : http://localhost:5000/note/auth/logout
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    userLoggedOut();
                    history.push("/");
                })
        } else {
            userLoggedOut();
            history.push("/");

        }
    }



    return <header>
    
        <Grid container spacing={0} direction="row"
            justifyContent="left"
            alignItems="center">
            <Grid item xs={6} sm={4} md={3} lg={3} xl={3}>
                <span className="header-logo"><HighlightIcon fontSize="large" xs={{fontSize: "14px" ,color: "#fff"}}/></span><span>Notes</span>
            </Grid>
            <Grid item xs={2} sm={5} md={7} lg={8} xl={8}>
            </Grid>
            <Grid item xs={4} sm={3} md={1} lg={1} xl={1}>
                {userInfo ? <NavMenu firstName={userInfo.firstName} imageUrl={userInfo.image} logOut={logOut} />:""}
            </Grid>
        </Grid>

    </header>;
}


export default Header;


