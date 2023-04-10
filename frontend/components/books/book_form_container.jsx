import { connect } from 'react-redux';
import BookForm from './book_form';
import { createBook } from '../actions/book_actions';

const mapStateToProps = (state, ownProps) => ({
    userId: state.session.currentUser.id,
    listId: ownProps.listId
});

const mapDispatchToProps = dispatch => ({
    createBook: (userId, listId, book) => dispatch(createBook(userId, listId, book))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
