<template>
 <div id="app">
    <div class="section">
      <div class="container">
          <div class="box">
              <div class="columns">
                <div class="column is-4">
                    <div class="columns is-multiline">
                        <div class="column is-2" v-for="(color,index) in colors" :key="index">
                            <ColorBox @ChangeColor="ChangeColor" :color="color"></ColorBox>
                        </div>
                    </div>
                </div>
                <div class="column is-6 is-offset-2" :style="{'background-color':boxColor}">
                  <h1 class="title is-1 has-text-white">
                    {{boxColor}}
                  </h1>
                </div>
              </div>
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
import  ColorBox from "./components/ColorBox"
export default {
  name: 'App',
  components: {
    ColorBox
  },
  methods:{
    ChangeColor(color){
        this.boxColor=color;
      }
    },
   data() {
    return {
      boxColor: "#000",
      colors: [
        "#264653",
        "#2a9d8f",
        "#e9c46a",
        "#f4a261",
        "#e76f51",
        "#ffbe0b",
        "#fb5607",
        "#ff006e",
        "#8338ec",
        "#3a86ff",
        "#f94144",
        "#f3722c",
        "#f8961e",
        "#90be6d",
        "#43aa8b",
        "#577590",
        "#02c39a",
        "#028090"
      ]
    };
   },
};
</script>
