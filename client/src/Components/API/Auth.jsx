import axios from "axios";
import { saveUserAuthState, saveUserInfo } from "../Services/localStorage";
import serviceUrl from "../Services/url";



const url = serviceUrl();


export const isUserAuthenticatedOnServer = async () => {//Check if the current client is authenticated on the server side. If yes - return the user object and save it to the localStorage.If not return false

    const response = await axios
        .get(url + "/auth/user", { withCredentials: true }) //WHEN LOCAL : http://localhost:5000/auth/user
        .catch((err) => {
            //Request the user data from the server -> Using a middleware to check if the user has been authenticated
            if (err) {
                console.log("Checked with the server and user is not authenticated");
                saveUserAuthState(false);
                saveUserInfo(null);
            }
        });

    if (response && response.data) {
        console.log("Checked with the server and user is authenticated");
        saveUserAuthState(true);
        saveUserInfo(response.data);
    }else{
        saveUserAuthState(false);
        saveUserInfo(null);
    }
};






