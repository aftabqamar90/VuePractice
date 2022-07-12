<template>
     <button @click="$emit('onSayHello','With Parameter')">Say Hello</button>
</template>
<script>
export default {
    name:'SayHellow'
}
</script>