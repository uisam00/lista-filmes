<template>
<div class="movies-toolbar">
    <v-app-bar
      color="transparent"
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
					v-if="(hasSession == false)"
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
				v-if="(hasSession == false)"
			>
				Criar conta
			</v-btn>

			<v-btn
				class="ma-2 create-account buttons"
				color="#6C63FF"
				@click="goTo('login')"
				v-if="(hasSession == false)"
			>
				Entrar
			</v-btn>


		<search-bar
			v-if="hasSession"
		/>

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
import SearchBar from '@/components/SearchBar.vue'
import * as fb from '@/plugins/firebase.js';

export default {
	name: 'Toolbar',
	components: {
		SearchBar
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
				console.log(err);
			})
		}
	},
	data() {
		return {
			hasSessionUser: false,
		}
	},
	computed: {
		...mapGetters(['hasSession'])
	},
}
</script>

<style lang="scss">
	input{
		color: black;
	}
.movies-toolbar {

	margin: 0 100px;

	.title-toolbar {
		color: $button-color;
		font-family: 'Roboto-Bold';
	}
	.search-bar{
		max-width: 200px;
		color: #6C63FF;
		.v-input__slot{
			border: 1px solid #6C63FF;
			border-radius: 30px;
		}
		.v-input__prepend-inner{
			position:absolute;
			right:15px;
		}
		.v-icon {
			color: #6C63FF;
		}
		.v-label{
			color: #6C63FF;
		}
	}

}
</style>
