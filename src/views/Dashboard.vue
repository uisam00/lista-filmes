<template>
	<div>
		Olá, {{ [userName]  }}
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		name: 'Dashboard',
		data() {
			return {
				userName: '',
			};
		},
		computed: {
			...mapGetters(['currentUser']),
		},
		mounted() {
			this.userName = this.currentUser.name;
		},
		methods: {

		}
	};
</script>

<style lang="scss">
</style>
