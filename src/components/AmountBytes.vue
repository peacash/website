<style scoped>
    div {
        font-family: 'Courier New', Courier, monospace;
    }
</style>
<template>
    <div></div>
    <div class="flex flex-wrap justify-center my-4 text-black text-sm gap-2">
        <div class="px-2 py-1 rounded" style="background-color: #f99;">significant figure</div>
        <div class="px-2 py-1 rounded" style="background-color: #9f9;">order of magnitude</div>
    </div>
    <div class="flex flex-wrap justify-center">
        <Byte v-for="byte in amount.slice(0, 3)" :key="byte" :byte=byte
        style="background-color: #f99;" />
        <Byte v-for="byte in amount.slice(3)" :key="byte" :byte=byte
        style="background: linear-gradient(to right, #f99 50%, #9f9 50%)" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            amount: []
        }
    },
    methods: {
        randomByte() {
            return Math.floor(Math.random()*256)
        },
        setBytes() {
            this.amount = []
            for (let i = 0; i < 4; i++) {
                this.amount.push(this.randomByte())
            }
        }
    },
    mounted() {
        this.setBytes()
    }
}
</script>