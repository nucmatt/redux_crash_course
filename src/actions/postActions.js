import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    console.log('fetching');
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
			.then((res) => res.json())
            // .then(data => this.setState({posts: data}));
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
            }));
}
