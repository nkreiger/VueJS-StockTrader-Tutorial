<template>
 <b-container class="text-center">
   <b-row>
     <b-col>
       <h1>{{ msg }}</h1>
     </b-col>
   </b-row>
 </b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({}),
  props: ['msg'],
  beforeCreate() {
  },
  created() {
  },
  beforeDestroy() {
  },
  destroyed() {
  }
}
</script>

<style scoped>

</style>
