<template>
  <div class="outlined-button">
    <v-btn
      class="ma-2 configuration"
      outlined
      height="48"
      color="#6C63FF"
			width="100%"
			@click="goTo(route)"
    >
      {{ text }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'FilledButton',
  props: {
    text: String,
		route: String,
  },
  methods: {
    goTo(name) {
      this.$router.push({ name: name })
    }
  }
}
</script>

<style lang="scss">
.outlined-button {
  .configuration {
    text-transform: none;
    font-family: 'Roboto-Bold';
    height: 48px;
  }
}
</style>
