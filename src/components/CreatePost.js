import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../actions/postActions";

class CreatePost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			body: "",
			title: "",
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();
		const post = {
			title: this.state.title,
			body: this.state.body,
		};
		//call action
		this.props.addPost(post);
	}
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							for="postTitle"
						>
							Post Title
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							id="postTitle"
							value={this.state.title}
							onChange={this.onChange}
							type="text"
							name="title"
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 
                        px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						></input>
					</div>
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							for="postBody"
						>
							Post Body
						</label>
					</div>
					<div className="md:w-2/3">
						<textarea
							name="body"
							onChange={this.onChange}
							value={this.state.body}
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 
                        px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						></textarea>
					</div>
					<button className="bg-black-500 text-white" type="submit">
						Create
					</button>
				</form>
				<br />
			</div>
		);
	}
}

CreatePost.propTypes = {
	addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(CreatePost);
