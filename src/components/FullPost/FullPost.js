import React, { Component } from 'react';

import './FullPost.css';
import Axios from 'axios';

class FullPost extends Component {
	state = {
		loadedPost: null
	};

	componentDidUpdate() {
		if (this.props.id) {
			if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
				Axios.get('/posts/' + this.props.id).then(response => {
					this.setState({
						loadedPost: response.data
					});
				});
			}
		}
	}

	deletePostHandler = () => {
		Axios.delete('/posts/' + this.props.id).then(response => {
			console.log(response);
		});
		this.setState({
			loadedPost: null
		});
		this.props.reset();
	};

	render() {
		let post = <p style={{ textAlign: 'center', fontWeight: 600 }}>Please select a Post!</p>;
		if (this.props.id) {
			post = <p style={{ textAlign: 'center', fontWeight: 600 }}>Loading...!</p>;
		}
		if (this.state.loadedPost) {
			post = (
				<div className='FullPost'>
					<h1>{this.state.loadedPost.title}</h1>
					<p className='loadedPostBody'>{this.state.loadedPost.body}</p>
					<div className='Edit'>
						<button onClick={this.deletePostHandler} className='Delete'>
							CLOSE
						</button>
					</div>
				</div>
			);
		}

		return post;
	}
}

export default FullPost;
