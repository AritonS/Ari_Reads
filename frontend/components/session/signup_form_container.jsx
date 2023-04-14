import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SignupForm from './signup_form';

// const mapStateToProps = (state, ownProps) => ({
//     errors: state.errors.session,
//     formType: 'signup'
// });

// const mapStateToProps = (state) => {
//     return {
//         loggedIn: state.session && state.session.isAuthenticated,
//         errors: state.errors.session
//     };
// };

// const mapStateToProps = (state) => ({
//     loggedIn: state?.session?.isAuthenticated,
//     errors: state?.errors?.signup,
// });


const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
});


// const mapDispatchToProps = (dispatch, ownProps) => {
//     console.log("createNewUser:", createNewUser);
//     return {
//         createNewUser: (user) => dispatch(createNewUser(user))
//     };
// };

export default connect(null, mapDispatchToProps)(SignupForm);