<template>
<navbar></navbar>
<div class="section">
    <div class="container">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import 'bulma/css/bulma.css';
import navbar from './components/layout/navbar.vue';
export default {
    name: 'App',
    components: {
        navbar,
    }
}
</script>
