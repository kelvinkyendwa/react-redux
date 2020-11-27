import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}
	render() {
		const postsItems = this.props.posts.map((post) => (
			<div key={post.id}>
				<h5>{post.title}</h5>
				<p>{post.body}</p>
				<hr />
			</div>
		));
		return (
			<div>
				<h3>Posts </h3>
				{postsItems}
			</div>
		);
	}
}
Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
	//posts var from root reducer
	posts: state.posts.items,
});
export default connect(mapStateToProps, { fetchPosts })(Posts);
