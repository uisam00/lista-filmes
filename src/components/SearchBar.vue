<template>
  <div class="search-holder">
    <div class="search-bar">
			<div class="form-holder">
				<div class="navbarSearch">
					<input
						@change="onChange"
						@keyup="onChange"
						v-model="searchText"
						class="form-control navbar-search-input js-navbar-search-input nav-input js-filter-topics"
						type="text"
						placeholder="Pesquisar"
					/>
				</div>
				<v-icon class="icon">mdi-magnify</v-icon>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  computed: {},
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    onChange() {
      this.$emit("search", this.searchText);
    },
  },
};
</script>
<style lang="scss">
.search-holder {
	textarea:focus, input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
	}
	::-webkit-input-placeholder {
		color: #6C63FF;
		font: 14px verdana, arial, sans-serif;
	}

  .search-bar {
    .form-holder {
      position: relative;
    }
    .form-control {
      display: block;
      width: 100%;
      height: 34px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #6C63FF;
      border: 1px solid #6C63FF;
			border-radius: 30px;
      border-color: #6C63FF;
    }
    .navbar-search-input {
      height: 51px;
      font-size: 18px;
      padding: 6px 18px 7px 45px;
    }
    .icon {
      left: 12px;
      font-size: 18px;
      padding-left: 2px;
      opacity: 0.7;
      color: #6C63FF;
      position: absolute;
      top: 50%;
      left: 17px;
      transform: translateY(-50%) scale(1.1);
      opacity: 0.5;
      z-index: 2;
      transition: all 0.2s linear;
    }
  }
}
</style>
