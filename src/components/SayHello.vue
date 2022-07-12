<template>
     <button @click="$emit('onSayHello')">Say Hello</button>
</template>
<script>
export default {
    name:'SayHellow'
}
</script>