<template>
	<v-row
		no-gutters
	>
		<v-col
		>
			<v-card
				class="pa-2"
				elevation="0"
				tile
			>
				<v-card-title class="card-title">
					Guarde suas séries e filmes favoritos e não fique mais perdido
				</v-card-title>
				<v-card-subtitle>
					Você nunca mais irá esquecer de assistir
				</v-card-subtitle>
				<v-card-actions>
					<v-btn
						class="ma-2"
						color="secondary"
					>
						Criar conta
					</v-btn>
					<v-btn
						class="ma-2"
						outlined
						color='indigo'
					>
						Já possuo uma conta
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>

		<v-col
		>
			<v-card
				class="pa-2"
				elevation="0"
				tile
			>
				<v-img
          src="@/assets/images/svg_movie_night.svg"
          aspect-ratio="1.7"
        ></v-img>
			</v-card>
		</v-col>

	</v-row>
</template>

<script>
export default {
	name: 'Home',
}
</script>s
