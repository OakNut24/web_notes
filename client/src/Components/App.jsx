import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginApp from "./Login/index";
import { LoginSuccess } from "./Login/LoginSuccess";
import NotesApp from "./Notes/index.jsx";
import CheckAuth from "./Login/CheckAuth";

function App() {



  return <div> <Switch>
    <Route exact path="/" > <CheckAuth/>  <LoginApp /> </Route>
    <Route exact path="/notes"> <CheckAuth/> <NotesApp /> </Route>
    <Route exact path="/login/success" component={LoginSuccess} />
    <Route exact path="/login/error" ><NotesApp />Error logging in. Please try again later</Route>
  </Switch> </div>;

}



export default App;