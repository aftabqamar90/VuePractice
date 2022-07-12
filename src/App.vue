<template>
 <div id="app">
    <div class="section">
      <div class="container">
          <div class="box">
              Hello world
          </div>
      </div>
    </div>
  </div>
</template>
<style>
.box-color:hover{
  cursor: pointer;
  opacity:0.6
}
</style>
<script>
import   "bulma/css/bulma.css"
export default {
  name: 'App',
  components: {},
  methods:{
    ChangeColor(color){
        this.boxColor=color;
      }
    },
} 
</script>
