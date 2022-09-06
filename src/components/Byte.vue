<template>
    <div class="
        p-2
    ">
        <div style="height: .8rem;" class="
            flex
            rounded
            uppercase
            text-xs
            text-black
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