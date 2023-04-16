import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('handleSubmit called')
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    handleInput(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        return (
            <div className='login-form'>
                <h2>Log In</h2>
                <form>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <br />
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;
