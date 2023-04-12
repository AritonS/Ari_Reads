import { connect } from 'react-redux';
import createNewUser from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup'
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     createNewUser: (user) => dispatch(createNewUser(user))
// });

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("createNewUser:", createNewUser); // Add this line
    return {
        createNewUser: (user) => dispatch(createNewUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);