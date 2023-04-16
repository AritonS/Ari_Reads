import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);