import React, { Component } from 'react';

class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}
	componentWillMount() {
		// console.log(123);
		fetch('https://jsonplaceholder.typicode.com/users/1/posts')
			.then((res) => res.json())
            // .then((data) => console.log(data));
            .then(data => this.setState({posts: data}));
    }
    
	render() {
        const postItems = this.state.posts.map(post => (
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

export default Posts;
