import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        console.log('SignupForm props:', props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('Signup handleSubmit called');
        console.log(this.props);
        const user = Object.assign({}, this.state);
        this.props.createNewUser(user);
    }


    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        const errors = this.props.errors ? this.props.errors.map((error, idx) => (
            <li key={`error-${idx}`}>{error}</li>
        )) : null;

        const formHeader = this.props.formType === "login" ? "Log in" : "Sign up";
        const altFormLink = this.props.formType === "login" ? "/signup" : "/login";
        const altFormText = this.props.formType === "login" ? "Sign up" : "Log in";

        return (
            <div>
                <h2>{formHeader}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update("username")}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                        />
                    </label>
                    <br />
                    <input type="submit" value={formHeader} />
                </form>
                <Link to={altFormLink}>{altFormText}</Link>
                <ul>{errors}</ul>
            </div>
        );
    }
}

export default SignupForm;
