import React from "react";
import GreetingContainer from './greeting/greeting_container';
import Greeting from './greeting/greeting'
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupForm from "./session/signup_form";
import LoginForm from "./session/login_form";

const App = () => {
    return (
    <div>
        <h1 id='app-title'>Ari Reads</h1>
        <Route path='/' component={GreetingContainer} />
        <Switch>
            <Route path='/signup' component={SignupForm} />
            <AuthRoute path='/login' component={LoginForm} />
        </Switch>
        {/* <ProtectedRoute path='/' component={LogoutContainer} /> */}
    </div>
    )
};

export default App;