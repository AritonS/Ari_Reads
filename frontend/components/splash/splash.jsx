import React from 'react';
import { Link } from 'react-router-dom';
import SignupContainer from '../session/signup_container';
import LoginContainer from '../session/login_container';

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <>
                <SignupContainer />
                <LoginContainer />
                <div className='splash'>
                    <h1>Welcome to Ari Reads</h1>
                    <nav className='splash-header'>
                        <Link className='signup-btn' to='/signup'>Sign Up</Link>
                        <Link className='login-btn' to='/login'>Log In</Link>
                    </nav>
                </div>
            </>
        );
    }
}

export default Splash;
