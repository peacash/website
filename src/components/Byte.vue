<template>
    <div class="
        p-1
        m-1
        rounded
    ">
        <div class="
            flex
            rounded
            uppercase
            px-2 md:px-3
            md:py-1
            bg-white
        ">{{ toHexString(byte) }}</div>
    </div>
</template>
<script>
export default {
    methods: {
        toHexString(byte) {
            return ('0' + (byte & 0xFF).toString(16)).slice(-2)
        }
    },
    props: {
        byte: Number
    }
}
</script>