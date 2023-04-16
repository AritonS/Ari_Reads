import React from 'react';
import { connect } from 'react-redux';
import List from './list';
import { fetchBooks, deleteBook } from '../../actions/book_actions';

const mapStateToProps = state => {
    return {
        books: Object.values(state.books)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const listId = ownProps.match.params.listId;
    return {
        fetchBooks: () => dispatch(fetchBooks(listId)),
        deleteBook: bookId => dispatch(deleteBook(listId, bookId))
    };
};

class ListContainer extends React.Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, deleteBook } = this.props;
        return <List books={books} deleteBook={deleteBook} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
