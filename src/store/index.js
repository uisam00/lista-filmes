import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/user'
import Movies from './modules/movies'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		User,
		Movies
	},
})
