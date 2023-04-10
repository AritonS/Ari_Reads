import React from 'react';

class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const list = Object.assign({}, this.state);
        this.props.createList(this.props.userId, list)
            .then(() => this.setState({ name: '', description: '' }));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    placeholder="List Name"
                    required
                />

                <textarea
                    value={this.state.description}
                    onChange={this.handleChange('description')}
                    placeholder="Description"
                />

                <button type="submit">Create List</button>
            </form>
        );
    }
}

export default ListForm;
