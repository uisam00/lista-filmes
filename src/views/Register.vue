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
					Criar sua conta
				</v-card-title>
				<form-register
					@register="createFirebaseUder"
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
				src="@/assets/images/welcome_cats.svg"
			/>
		</v-col>
	</v-row>

</template>

<script>
import FormRegister from '@/components/FormRegister.vue';
export default {
	name: 'Register',
	components: {
		FormRegister,
	},
	methods: {
		createFirebaseUder(user){
			console.log(user);
		}
	}
}
</script>

<style>

</style>
