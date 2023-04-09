import React from "react";
import GreetingContainer from './greeting/greeting_container';

const App = () => {
    return (
    <div>
        <h1 id='app-title'>Ari Reads</h1>
        <Switch>
            <AuthRoute path='/' component={GreetingContainer} />
            <Route path='/signup' component={SignupContainer} />
            <AuthRoute path='/login' component={LoginContainer} />
        </Switch>
        <ProtectedRoute path='/' component={LogoutContainer} />
    </div>
    )
};

export default App;