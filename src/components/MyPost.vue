<template>
<div class="column is-multiline">
    <div class="column is-3" v-for="post in posts" :key="post.id">
        <PostItem  :post="post"/>
    </div>
    
</div>
</template>
<script>
import PostItem from  "./PostItem";

export default {
    name :'MyPost',
    components : {
        PostItem,
    },
    props:["posts"]
}
</script>
