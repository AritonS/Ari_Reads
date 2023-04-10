import { connect } from 'react-redux';
import ListForm from './list_form';
import { createList } from '../actions/list_actions';

const mapStateToProps = state => ({
    userId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
    createList: (userId, list) => dispatch(createList(userId, list))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
