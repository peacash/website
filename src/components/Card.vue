<template>
    <div class="
        flex
        flex-col
        bg-white
        rounded
        px-12
        pb-4
        shadow-lg
    ">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        description: String,
        image: String
    }
}
</script>