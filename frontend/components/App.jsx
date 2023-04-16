import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import Signup from "./session/signup_container";
import Login from "./session/login_container";
import NavBar from "./nav_bar/nav_bar";
import ListContainer from './lists/list_container'
import SplashContainer from "./splash/splash_container";

const App = () => {
    return (
    <div>
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={SplashContainer} />
        <AuthRoute path='/signup' component={Signup} />
        <ProtectedRoute path='/books' component={ListContainer}/>
    </div>
    )
};

export default App;