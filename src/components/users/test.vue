<template>
    <div class="box">
        <div class="columns">
                <div class="column is-4">
                    <img :src="'https://i.pravatar.cc/300?img='+user.id" />
                </div>
                <div class="column is-8">
                    <h1 class="title">{{user.name}}</h1>
                    <p>Name: {{user.name}}</p>
                    <p>Email: {{user.email}}</p>
                    <p>Phone: {{user.phone}}</p>
                    <p>Website: {{user.website}}</p>
                    <p>Comapny: {{user.company.name}}</p>
                    <button @click="back" class="button is-dark is-warning">Back</button>
                </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'test',
    data(){
        return {
            user:null
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    },
    async created(){
        const id = this.$route.query.id;
        const result = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
        this.user = result.data;
    }
}
</script>
