<template>
		<v-row class="search-bar">
			<v-col>
				<v-text-field
					class="input-field"
					v-model="text"
					:append-icon-cb="() => {}"
					placeholder="Pesquisar"
					single-line

					color="white"
					hide-details
				></v-text-field>
			</v-col>
			<v-col>
				<v-btn
					icon
					color="#000"
					@click="searchMovie()"
				>
					<v-icon>mdi-magnify</v-icon>
				</v-btn>
			</v-col>
		</v-row>
		<movie-card :filme="movie1"/>
</template>

<script>
import Movie from '@/services/movies'
import MovieCard from '../components/MovieCard.vue'
export default {
	name: "AddMovie",
	components: {
		MovieCard
	},
	data() {
			return{
				text: "",
				search: false,
				movie1: null
			}
		},

		methods: {
		goTo(name) {0
			this.$router.push({ name: name })
		},
		closeSearch() {
			this.search=false;
			this.text="";
		},
		searchMovie() {
			Movie.listar(this.text).then(response=> {
				this.movie1 = response.data.results[0];
			})
		},
	},
}
</script>

<style lang="scss">
.container--fluid {
    height: 10em;
    position: relative;
	.search-bar{
    margin: 0;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);

		input{
			width: 350px;
		}
	}
}


</style>
