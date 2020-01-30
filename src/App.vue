<!--suppress ALL -->
<template>
  <div id="app">
    <!-- header -->

    <!-- content -->
    <div class="main-content">
      <transition name="fade" mode="out-in">

      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  created() {
    // dispatch initialize stocks/initStocks
    this.$log.debug('Initial Stocks: ', this.$store.getters['stocks/getStocks']);
  }
}
</script>


<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
