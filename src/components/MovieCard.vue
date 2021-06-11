<template>
	<div class="movie-card">
		<div class="overlay"></div>

		<v-img
			src=´https://image.tmdb.org/t/p/w200{{filme.poster_path}}´

		/>

		<!-- <MovieControls type={type} movie={movie} /> -->
	</div>
</template>

<script>
export default {
	name: 'MovieCard',
	props: {
		filme: {
			type: Object,
		},
	},

}
</script>
			src=``
			alt={`${movie.title} Poster`}
<style lang="scss">
	.movie-card {
		width: 100%;
		border-radius: 5px;
		overflow: hidden;
		position: relative;
		border: 0;
		display: block;
		.overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: 2px solid transparent;
			transition: all 0.3s ease;
		}
	}
</style>
