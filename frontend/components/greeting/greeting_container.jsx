import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ entities, session }) => {
    const currentUser = entities.users[session.id];
    return {
        currentUser,
    };
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
