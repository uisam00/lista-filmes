<template>
	<v-row
		class="login"
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
      >
        <v-card-title class="pa-0 card-title mb-14">Entrar</v-card-title>
        <form-login
          @login="loginWithFirebase"
        />
        <line-or />
        <v-row justify="center mt-10 mb-10">
          <v-col
					>
						<outlined-button
							text="Não possuo conta"
							route="register"
						/>
					</v-col>
						<v-col>
							<filled-button
								text="Entrar com Facebook"
								icon="mdi-facebook"
								@click="loginWithFacebook"
							/>
						</v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col
      lg="4"
      md="12"
      class="pl-10"
    >
      <v-img
        src="@/assets/images/login.svg"
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';
import LineOr from '@/components/LineOr.vue'
import OutlinedButton from '@/components/OutlinedButton.vue'
import FilledButton from '@/components/FilledButton.vue'
import FormLogin from '@/components/FormLogin.vue'
import firebase from 'firebase';

export default {
  name: 'Login',
  components: {
    LineOr,
    FilledButton,
    OutlinedButton,
    FormLogin
  },
  methods: {
    ...mapActions(['addUser']),
    loginWithFirebase(user) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
          this.addUser({
						name: data.user.displayName,
						email: data.user.email
					})
          this.$router.push({ name: 'dashboard' });
        })
        .catch(err => {
          this.error = err.message;
        })
    },
  },
}
</script>

<style lang="scss">
.login {
	.card-title {
		text-align: left;
		display: block;
		color: $button-color;
		font-family: 'Roboto-bold';
	}

}
</style>
