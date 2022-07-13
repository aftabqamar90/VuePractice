<!-- eslint-disable vue/multi-word-component-names -->
<template >
    <users />
</template>

<script>
import users from '../users/users.vue';
export default 
{
    // eslint-disable-next-line vue/multi-word-component-names
    name :'Home',
    components:
    {
        users
    }
}
</script>