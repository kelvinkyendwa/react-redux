import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => (dispatch) => {
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((res) => res.json())
		.then((posts) =>
			dispatch({
				type: FETCH_POSTS,
				payload: posts,
			}),
		);
};
export const addPost = (postData) => (dispatch) => {
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(postData),
	})
		.then((response) => response.json())
		.then((postData) =>
			dispatch({
				type: NEW_POST,
				payload: postData,
			}),
		);
};
