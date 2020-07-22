import React, { Component } from 'react';
import PropTypes from 'prop-types';
// this import basically just connects your component that have Provider imported to the Redux store.
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
	// State is moved to the store.
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		posts: [],
	// 	};
	// }
	componentDidMount() {
		// console.log(123);
		// This fetch is moved to the postActions file for use in Redux.
		// fetch('https://jsonplaceholder.typicode.com/users/1/posts')
		// 	.then((res) => res.json())
        //     // .then((data) => console.log(data));
		//     .then(data => this.setState({posts: data}));
		// Now when the component mounts it will automatically fetch posts via the prop fetchPosts() imported above.
		this.props.fetchPosts();
	}
	
	componentWillReceiveProps(nextProps) {
		if(nextProps.newPost) {
			this.props.posts.unshift(nextProps.newPost);
		}
	}
    
	render() {
        // const postItems = this.state.posts.map(post => (
		const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
		return (
			<div>
				<h1>Posts</h1>
                { postItems }
			</div>
		);
	}
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	newPost: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
	posts: state.posts.items,
	newPost: state.posts.item
})

// export default Posts;
export default connect(mapStateToProps, { fetchPosts })(Posts);
