import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ books, deleteBook }) => {
    return (
        <div className="list">
            <h2>Your Books</h2>
            <ul className="book-list">
                {books.map(book => (
                    <li key={book.id} className="book-list-item">
                        <Link to={`/books/${book.id}`}>
                            <h3>{book.title}</h3>
                            <p>Author: {book.author}</p>
                            <p>Status: {book.status}</p>
                        </Link>
                        <button onClick={() => deleteBook(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
