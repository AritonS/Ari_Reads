import React from 'react';

class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            status: '0',
            total_pages: '',
            current_page: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const book = Object.assign({}, this.state);
        this.props.createBook(this.props.userId, this.props.listId, book)
            .then(() => this.setState({
                title: '',
                author: '',
                status: '0',
                total_pages: '',
                current_page: ''
            }));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange('title')}
                    placeholder="Title"
                    required
                />

                <input
                    type="text"
                    value={this.state.author}
                    onChange={this.handleChange('author')}
                    placeholder="Author"
                    required
                />

                <select value={this.state.status} onChange={this.handleChange('status')}>
                    <option value="0">Want to Read</option>
                    <option value="1">Currently Reading</option>
                    <option value="2">Finished Reading</option>
                </select>

                <input
                    type="number"
                    value={this.state.total_pages}
                    onChange={this.handleChange('total_pages')}
                    placeholder="Total Pages"
                />

                <input
                    type="number"
                    value={this.state.current_page}
                    onChange={this.handleChange('current_page')}
                    placeholder="Current Page"
                />

                <button type="submit">Add Book</button>
            </form>
        );
    }
}

export default BookForm;
