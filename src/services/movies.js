import { http } from '@/plugins/axios'

export default {
	listar: (req) => {
		return http.get(`search/movie?api_key=${process.env.VUE_APP_API_TMDB}&language=en-US&page=1&include_adult=false&query=$${req}`)
	}
}
