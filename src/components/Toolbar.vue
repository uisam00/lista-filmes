<template>
<div class="movies-toolbar">
    <v-app-bar
      color="transparent"
			elevation="0"
      dark
			height="180"
    >
      <v-app-bar-nav-icon
				color="black"
			></v-app-bar-nav-icon>

      <v-toolbar-title class="title-toolbar">Filmes</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text color="#000">
				Button
      </v-btn>

      <v-btn text color="#000">
				Button
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
	name: 'Toolbar',
}
</script>

<style lang="scss">
.movies-toolbar {
	margin: 0 100px;

	.title-toolbar {
		color: $button-color;
		font-family: 'Roboto-Bold';
	}
}
</style>
