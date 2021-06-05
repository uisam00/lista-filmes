<template>
	<v-row
    no-gutters
    justify="center"
    class="home"
	>
		<v-col
			lg="5"
      md="12"
      class="column-cards"
		>
			<v-card
				class="pa-0"
        elevation="0"
        tile
			>
				<v-card-title class="card-title">
					Guarde suas séries e filmes favoritos
				</v-card-title>
				<v-card-subtitle class="card-subtitle">
					Você nunca mais vai esquecer de assistir
				</v-card-subtitle>
				<v-card-text>
					<v-btn
						class="ma-2 create-account buttons"
						color="#6C63FF"
						@click="goTo('register')"
					>
						Criar conta
					</v-btn>
					<v-btn
						class="ma-2 buttons"
						outlined
						color="#6C63FF"
						@click="goTo('login')"
					>
						Já possuo uma conta
					</v-btn>
				</v-card-text>
			</v-card>
		</v-col>

		<v-col
      lg="4"
      md="12"
      class="pl-10"
		>
			<v-card
        class="pa-0"
        elevation="0"
        tile
			>
				<v-img src="@/assets/images/svg_movie_night.svg" ></v-img>
			</v-card>
		</v-col>

	</v-row>
</template>

<script>
export default {
	name: 'Home',
	methods: {
		goTo(name) {
			this.$router.push({ name: name })
		}
	}
}
</script>s

<style lang="scss">
.home {
	.column-cards {
		height: 100%;

		.card-title {
			font-family: 'Roboto-bold';
      font-size: 40px;
      margin-bottom: 10px;
      line-height: 40px;
      word-break: break-word;
		}

		.card-subtitle {
      font-family: 'Ubuntu-Regular';
      font-size: 20px;
      margin-bottom: 80px;
      word-break: break-word;
    }
			.buttons {
      text-transform: none;
      font-family: 'Roboto-Bold';
      height: 48px;
    }
    .create-account {
      color: $button-text-secondary-color;
    }
	}
}
</style>
