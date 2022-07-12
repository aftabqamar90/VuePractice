<template>
 <div id="app">
  Hello world
  <SayHello @onSayHello="HelloMethod"></SayHello>
  </div>
</template>

<script>
import   "bulma/css/bulma.css"
import  SayHello from "./components/SayHello"
export default {
  name: 'App',
  components: {
    SayHello
  },
  methods: {
    HelloMethod(param){
      alert(param);
    },
  },    
};
</script>
