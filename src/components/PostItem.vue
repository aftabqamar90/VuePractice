<template>
<div class="card">
            <div class="card-content">
                <h4 class="title is-6">
                {{post.name}}
                </h4>
            </div>
        </div>
</template>
<script>
export default {
    name: 'PostItem',
    props:["post"]
};
</script>
