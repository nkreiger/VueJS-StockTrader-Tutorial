<!--suppress ALL -->
<template>
  <div id="app">
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

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>