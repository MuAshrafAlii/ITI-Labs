<template>
<h1>hello from APP.vue</h1>

<formComponent/>
</template>

<script>

import formComponent from './components/form.vue'
export default {
  name: 'App',
  components: {
    formComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
