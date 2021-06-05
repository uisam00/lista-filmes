<template>
	<v-row
		no-gutters
		justify="center"
		fill-height
	>
		<v-col
			lg="4"
			md="12"
			class="pr-6"
		>

			<v-card
				elevation="0"
				class="pa-4"
			>
				<v-card-title
					class="pa-0 mb-6 text-center"
				>
					Entrar
				</v-card-title>
				<form-login
					@login="loginWithFirebase"
				/>
			</v-card>

		</v-col>

		<v-col
			lg="4"
			md="12"
			class="pl-10"
		>
			<v-img
				class="mt-6"
				src="@/assets/images/login.svg"
			/>
		</v-col>
	</v-row>
</template>

<script>
import FormLogin from '@/components/FormLogin.vue';
export default {
	name: 'Login',
	components: {
		FormLogin,
	},
	methods: {
		loginWithFirebase(user) {
			console.log(user);
		}
	}
}
</script>

<style>

</style>
