import React from "react";
import GreetingContainer from './greeting/greeting_container';
import Greeting from './greeting/greeting'
import SessionForm from "./session/session_form";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => {
    return (
    <div>
        <h1 id='app-title'>Ari Reads</h1>
        <Route path='/' component={GreetingContainer} />
        <Switch>
            <Route path='/signup' component={SessionForm} />
            <AuthRoute path='/login' component={SessionForm} />
        </Switch>
        {/* <ProtectedRoute path='/' component={LogoutContainer} /> */}
    </div>
    )
};

export default App;