<template>
<div class="movies-toolbar">
    <v-app-bar
      color="blue"
			elevation="0"
      dark
			height="180"
    >
      <v-toolbar-title class="title-toolbar">

				<v-btn
					color="#6C63FF"
					text
					to="/"
					class="button"
					v-if="!hasSession"
				>
					Filmes
				</v-btn>
			</v-toolbar-title>

      <v-spacer></v-spacer>

			<v-btn
				class="ma-2 buttons"
				outlined
				color="#6C63FF"
				@click="goTo('register')"
				v-if="!hasSession"
			>
				Criar conta
			</v-btn>

			<v-btn
				class="ma-2 create-account buttons"
				color="#6C63FF"
				@click="goTo('login')"
				v-if="!hasSession"
			>
				Entrar
			</v-btn>

			<v-btn
				class="ma-2 create-account buttons"
				color="#6C63FF"
				@click="goTo('addmovie')"
				v-if="hasSession"
			>
				+ADD
			</v-btn>
			<v-btn
				icon
				color="#000"
				@click="logout"
				v-if="hasSession"
			>
				<v-icon>mdi-export</v-icon>
			</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as fb from '@/plugins/firebase.js';


export default {
	name: 'Toolbar',
	components: {

	},
	data: () => ({
      text: "",
      search: false,
			hasSessionUser: false,
    }),
	computed: {
		...mapGetters(['hasSession'])
	},
	methods: {
		goTo(name) {
			this.$router.push({ name: name })
		},
		logout() {
			fb.auth.signOut().then(() => {
				this.$router.replace('home')
				this.$router.go(0)
			})
			.catch((err) => {
				this.error = err.message;
				alert("Erro " + err.message)
			})
		}
	},


}
</script>

<style lang="scss">

.movies-toolbar {

	margin: 0 100px;

	.title-toolbar {
		color: $button-color;
		font-family: 'Roboto-Bold';
	}

	.input-field {
		background-color: #6C63FF;
	}

}
</style>
