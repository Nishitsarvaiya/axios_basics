import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Axios from 'axios';

class Blog extends Component {
	state = {
		posts: [],
		selectedPostId: null,
		error: false
	};

	componentDidMount() {
		Axios.get('/posts')
			.then(response => {
				const posts = response.data.slice(0, 6);
				const updatedPosts = posts.map(post => {
					return {
						...post,
						author: 'Nishit'
					};
				});
				this.setState({
					posts: updatedPosts
				});
				// console.log(response)
			})
			.catch(error => {
				this.setState({
					error: true
				});
				console.log(error);
			});
	}

	postSelectedHandler = id => {
		this.setState({
			selectedPostId: id
		});
	};

	resetFullPostHandler = () => {
		this.setState({
			selectedPostId: null
		});
	};

	render() {
		let posts = <p style={{ textAlign: 'center', fontSize: 36 }}>Fetching Posts...</p>;
		if (this.state.error === false) {
			posts = this.state.posts.map(post => {
				return <Post key={post.id} title={post.title} author={post.author} clicked={() => this.postSelectedHandler(post.id)} />;
			});
		} else {
			posts = <p style={{ textAlign: 'center', fontSize: 24 }}>Something went wrong Idiot! Take a look at the console.</p>;
		}

		return (
			<div>
				<section className='Posts'>{posts}</section>
				<section>
					<FullPost id={this.state.selectedPostId} reset={this.resetFullPostHandler} />
				</section>
				<section>
					<NewPost />
				</section>
			</div>
		);
	}
}

export default Blog;
