<template>
  <div id="app">
    <!-- navbar -->
    <router-view name="header"/>
    <!-- content -->
    <div class="main-content">
      <router-view name="content"/>
    </div>
    <!-- footer -->
    <router-view name="footer"/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>
