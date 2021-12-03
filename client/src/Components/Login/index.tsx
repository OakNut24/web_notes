import React from "react";
import { useHistory } from "react-router-dom";
import GoogleButton from "react-google-button";
import { Grid } from "@mui/material";
import { getUserAuthState } from "../Services/localStorage";
import { isUserAuthenticatedOnServer } from "../API/Auth";
import serviceUrl from "../Services/url";
import Header from "../Header";



function App() {
  const history = useHistory();
  const url = serviceUrl();




  async function authenticateAndRedirect() {
    const result = await isUserAuthenticatedOnServer();
    if (getUserAuthState()) {
      history.push("/notes");
    }else{
      /*Enter a snack saying the login us unsuccessful */
    }
  }

  const redirectToGoogleSSO = async () => {
    //Create a new window and a timer to check if the windows is closed in oreder to re
    let timer: NodeJS.Timeout | null = null;

    const googleLoginURL = url + "/auth/google"; //WHEN LOCAL : http://localhost:5000/auth/google
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          authenticateAndRedirect();
          if (timer) clearInterval(timer);
        }
      }, 500); //0.5 SEC
    }
  };

  return (
    <div>
      <Header />
      <div className="login-form-body">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
            xs={7}
          >
            <h1>Welcome to my notes app!</h1>
            <p>Please login with your google account</p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            container
            justifyContent="center"
            alignItems="center"
          >
            <GoogleButton onClick={redirectToGoogleSSO} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
