import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

// const mapStateToProps = ({ entities, session }) => {
//     const currentUser = entities.users[session.id];
//     return {
//         currentUser,
//     };
// };

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities && state.entities.users ? state.entities.users[state.session.id] : null
    };
};


const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
