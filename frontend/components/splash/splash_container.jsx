import { connect } from 'react-redux';
import { createNewUser, login, logout } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities && state.entities.users ? state.entities.users[state.session.id] : null
    };
};


const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    createNewUser: (user) => dispatch(createNewUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
