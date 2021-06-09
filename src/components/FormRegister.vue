<template>
	<v-form
		class="register-form"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      label="Nome"
      required
    ></v-text-field>
		<v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
					v-model="date"
					:value="computedDateFormattedDatefns"
					clearable-
					label="Data de Nascimento"
					readonly
					v-bind="attrs"
					v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
				locale="br"
        :active-picker.sync="activePicker"
        :max="new Date().toISOString().substr(0, 10)"
        min="1950-01-01"
        @change="save"
      ></v-date-picker>
    </v-menu>


    <v-text-field
      v-model="email"
      :rules="rules.emailRules"
      label="E-mail"
      required
    ></v-text-field>

		<v-text-field
			v-model="password"
			:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
			:rules="[rules.required, rules.min]"
			:type="showPassword ? 'text' : 'password'"
			name="input-10-1"
			label="Senha"
			hint="Mínimo 8 caracteres"
			counter
			@click:append="showPassword = !showPassword"
		></v-text-field>

		<v-text-field
			v-model="passwordConfirmation"
			:append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
			:rules="[rules.required, rules.passwordMatch]"
			:type="showPasswordConfirmation ? 'text' : 'password'"
			name="input-10-1"
			label="Confirmação de senha"
			hint="Mínimo 8 caracteres"
			counter
			@click:append="showPasswordConfirmation = !showPasswordConfirmation"
		></v-text-field>


		<v-btn
      :disabled="!valid"
      color="#6C63FF"
      class="mr-4 button"
      @click="validate"
    >
      Criar conta
    </v-btn>
	</v-form>

</template>

<script>
import { format, parseISO } from 'date-fns'

export default {
	name: 'FormRegister',
	data(){
		return {
			activePicker: null,
      menu: false,
			valid: true,
			name: '',
			date: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			showPassword: false,
			showPasswordConfirmation: false,
			rules: {
          required: value => !!value || 'Obrigatório.',
          min: v => v.length >= 8 || 'Mínimo 8 caracteres',
					passwordMatch: () => this.password === this.passwordConfirmation || ('As senhas não conferem'),
					emailRules: [
						v => !!v || 'Obrigatório',
						v => /.+@.+\..+/.test(v) || 'E-mail inválido'
					]
        },
		}
	},
	methods: {
		validate() {
			if(this.$refs.form.validate()){
				const userRegister = {
					name: this.name,
					dateBirth: 'datateste',
					email: this.email,
					password: this.password,
				}

				this.$emit('register', userRegister);
			}
		},
		save (date) {
			this.$refs.menu.save(date)
		},

	},
	computed: {
      computedDateFormattedDatefns () {
        return this.date ? format(parseISO(this.date), 'dd/MM/yyyy') : ''
      },
    },
	watch: {
		menu (val) {
			val && setTimeout(() => (this.activePicker = 'YEAR'))
		},
	},
}
</script>

<style lang='scss'>
.register-form {
  .button {
    color: $button-text-secondary-color;
    text-transform: none;
    width: 100%;
  }

}
</style>
