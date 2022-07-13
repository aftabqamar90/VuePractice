<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/About">About</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'App',
  components: {
    Hello
  }
}
</script>
