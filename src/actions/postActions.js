import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => (dispatch) => {
	console.log('fetching');
	fetch('https://jsonplaceholder.typicode.com/users/1/posts')
		.then((res) => res.json())
		// .then(data => this.setState({posts: data}));
		.then((posts) =>
			dispatch({
				type: FETCH_POSTS,
				payload: posts,
			})
		);
};

export const createPost = (postData) => (dispatch) => {
    console.log('action called');
	fetch('https://jsonplaceholder.typicode.com/users/1/posts', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(postData),
	})
		.then((res) => res.json())
		// .then(data => console.log(data))
		.then((post) =>
			dispatch({
				type: NEW_POST,
				payload: post,
			})
		);
};
