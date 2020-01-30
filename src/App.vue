<!--suppress ALL -->
<template>
  <div id="app">
<<<<<<< HEAD
    <!-- navbar -->
    <router-view name="header"/>
    <!-- content -->
    <div class="main-content">
      <transition name="fade" mode="out-in">
        <router-view name="content"/>
      </transition>
    </div>
    <!-- footer -->
    <router-view name="footer"/>
=======
    <img alt="Vue logo" src="./assets/logo.png" style="max-width: 5vw;">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
>>>>>>> d3c8cfe7eb1d1ec806d37a20d55d8e99976b6e96
  </div>
</template>

<script>

export default {
  name: 'app',
  created() {
    this.$store.dispatch('stocks/initStocks');
    this.$log.debug('Initial Stocks: ', this.$store.getters['stocks/getStocks']);
  }
}
</script>

<<<<<<< HEAD
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
=======
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
>>>>>>> d3c8cfe7eb1d1ec806d37a20d55d8e99976b6e96
