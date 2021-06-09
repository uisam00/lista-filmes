<template>
	<div>
		Olá, {{ [userName, dateBirth]  }}
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'Dashboard',
	data() {
		return {
			userName: '',
			dateBirth: '',
		}
	},
	computed: {
		...mapGetters(['currentUser'])
	},
	mounted() {
		this.dateBirth = this.currentUser.dateBirth
		this.userName = this.currentUser.name;
	}
}
</script>

<style lang="scss">

</style>
