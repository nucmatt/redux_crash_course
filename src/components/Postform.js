import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
        // You can have separate onChange events for each input 'name' but that gets ugly quickly. By using e.target.name and setting it to the event targets name value, you can use the same onChange event for each named input in the form.
		this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }
		// This fetch is moved to postActions for Redux.
        // fetch('https://jsonplaceholder.typicode.com/users/1/posts', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(post)
        // })
        // .then(res => res.json())
		// .then(data => console.log(data))
		
		// Call action
		this.props.createPost(post);
    }
	render() {
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title: </label>
						<br />
						<input
							type='text'
							name='title'
							onChange={this.onChange}
							value={this.state.title}
						/>
					</div>
					<br />
					<div>
						<label>Body: </label>
						<br />
						<textarea
							name='body'
							onChange={this.onChange}
							value={this.state.body}
						/>
					</div>
					<br />
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

Postform.propTypes = {
	createPost: PropTypes.func.isRequired,
}

// export default Postform;
export default connect(null, { createPost })(Postform);
