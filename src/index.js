import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
Axios.defaults.headers['AUTHORIZATION'] = 'AUTH TOKEN';

Axios.interceptors.request.use(
	function(config) {
		// Do something before request is sent
		console.log(config);
		return config;
	},
	function(error) {
		// Do something with request error
		console.log(error);
		return Promise.reject(error);
	}
);

// Add a response interceptor
Axios.interceptors.response.use(
	function(response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		console.log(response);
		return response;
	},
	function(error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		console.log(error);
		return Promise.reject(error);
	}
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
