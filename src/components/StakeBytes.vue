<style scoped>
    div {
        font-family: 'Courier New', Courier, monospace;
    }
</style>
<template>
    <div></div>
    <div class="flex flex-wrap justify-center my-4 text-black text-sm gap-2">
        <div class="px-2 py-1 rounded" style="background-color: #f99;">public_key</div>
        <div class="px-2 py-1 rounded" style="background-color: #9f9;">amount</div>
        <div class="px-2 py-1 rounded" style="background-color: #ff9;">fee</div>
        <div class="px-2 py-1 rounded" style="background-color: #99f;">deposit</div>
        <div class="px-2 py-1 rounded" style="background-color: #f9f;">timestamp</div>
        <div class="px-2 py-1 rounded" style="background-color: #9ff;">signature</div>
    </div>
    <div class="flex flex-wrap justify-center">
        <Byte v-for="byte in public_key" :key="byte" :byte=byte
        style="background-color: #f99;" />
        <Byte v-for="byte in amount" :key="byte" :byte=byte
        style="background-color: #9f9;" />
        <Byte v-for="byte in fee" :key="byte" :byte=byte
        style="background-color: #ff9;" />
        <Byte v-for="byte in deposit" :key="byte" :byte=byte
        style="background-color: #99f;" />
        <Byte v-for="byte in timestamp" :key="byte" :byte=byte
        style="background-color: #f9f;" />
        <Byte v-for="byte in signature" :key="byte" :byte=byte
        style="background-color: #9ff;" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            public_key: [],
            amount: [],
            fee: [],
            deposit: [],
            timestamp: [],
            signature: []
        }
    },
    methods: {
        randomByte() {
            return Math.floor(Math.random()*256)
        },
        setBytes() {
            this.public_key = []
            this.amount = []
            this.deposit = []
            this.fee = []
            this.timestamp = []
            this.signature = []
            for (let i = 0; i < 32; i++) {
                this.public_key.push(this.randomByte())
            }
            for (let i = 0; i < 4; i++) {
                this.amount.push(this.randomByte())
            }
            for (let i = 0; i < 4; i++) {
                this.fee.push(this.randomByte())
            }
            for (let i = 0; i < 1; i++) {
                this.deposit.push(this.randomByte())
            }
            for (let i = 0; i < 4; i++) {
                this.timestamp.push(this.randomByte())
            }
            for (let i = 0; i < 64; i++) {
                this.signature.push(this.randomByte())
            }
        }
    },
    mounted() {
        this.setBytes()
    }
}
</script>