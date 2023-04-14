import React from "react";
import GreetingContainer from './greeting/greeting_container';
import Greeting from './greeting/greeting'
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import SignupForm from "./session/signup_form_container";
import LoginForm from "./session/login_form_container";
import NavBar from "./nav_bar/nav_bar";
import ListContainer from './lists/list_container'

const App = () => {
    return (
    <div>
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={GreetingContainer} />
        <AuthRoute path='/signup' component={SignupForm} />
        <ProtectedRoute path='/books' component={ListContainer}/>
    </div>
    )
};

export default App;