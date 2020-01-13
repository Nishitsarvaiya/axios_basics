// Axios Instance can be used when you want a specific configuration for different parts of your application.
// Axios Instance considers the default global configuration and overwrites the specified properties.

// ================== HOW TO USE ==================== //
// Simply create as many instances as you want using the Axios.create() method and specifying the properties.
// and then import this file into the places where you want to use the instance.
// It works exactly as when you import Axios default package.

import Axios from 'axios';

const instance = Axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers['Content-type'] = 'application/json';

export default instance;
