import React from "react";
import { useHistory } from "react-router-dom";

import { getUserAuthState } from "../Services/localStorage";

import { isUserAuthenticatedOnServer } from "../API/Auth";



//This component is used in the App.jsx
//It will be rendered on every index.jsx to insure the authentication of the client upon loading the page.
//Its not suppose to keep track of the client auth on real time only upon refresh

export default function CheckAuth(props) {

    const history = useHistory();

    async function authenticateAndRedirect() {
        await isUserAuthenticatedOnServer();
        if (getUserAuthState()) {
            history.push("/notes");
        }else{
            history.push("/");
        }
    }
    function isLoggedIn(){
        authenticateAndRedirect();
    }
    return <React.Fragment>{isLoggedIn()}</React.Fragment>;
}
