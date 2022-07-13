<template>
    <div class="columns is-multiline">
        <div class="column is-3 has-text-centered" v-for="user in users" :key="user.id"> 
            <div class="card">
                <div class="card-image"> 
                    <img :src="'https://i.pravatar.cc/300?img='+user.id" />
                </div>
                <div class="card-content">
                    <h2>
                        {{user.name}}
                    </h2>
                    <a class="button is-info" :href="'/#/test?id='+user.id">View Profile</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'users',
    data() {
        return {
            users: []
        }
    },
    async created() {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = result.data;
    },
}
</script>
