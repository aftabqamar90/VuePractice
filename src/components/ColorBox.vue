<template>
<div class="box box-color" @click="$emit('ChangeColor',color)" :style="{'background-color':color}"></div>
</template>
<script>

export default {
    name:'ColorBox',
    props:['color']
}
</script>
