import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  Redirect
} from "react-router-dom";
import { HomeScreen } from "../components/HomeScreen";
import { Pdf } from "../components/Pdf";


export const Routes = () => {


    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomeScreen}/>
                <Route exact path="/pdf" component={Pdf} />
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}
