import axios from 'axios';

const baseConfig = {
	baseURL: `https://api.themoviedb.org/3/`,

}

export const http = axios.create(baseConfig);
