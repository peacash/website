<style scoped>
    div {
        font-family: 'Courier New', Courier, monospace;
    }
</style>
<template>
    <div></div>
    <div class="mx-auto my-8">
        [
            <span class="px-2 py-1 rounded text-black" style="background-color: #f99;">public_key_input</span>,
            <span class="px-2 py-1 rounded text-black" style="background-color: #9f9;">amount</span>,
            <span class="px-2 py-1 rounded text-black" style="background-color: #99f;">deposit</span>,
            <span class="px-2 py-1 rounded text-black" style="background-color: #ff9;">fee</span>,
            <span class="px-2 py-1 rounded text-black" style="background-color: #f9f;">timestamp</span>,
            <span class="px-2 py-1 rounded text-black" style="background-color: #9ff;">signature</span>
        ]
    </div>
    <div class="flex flex-wrap justify-center">
        <Byte v-for="byte in public_key_input" :key="byte" :byte=byte
        style="background-color: #e66;" />
        <Byte v-for="byte in amount" :key="byte" :byte=byte
        style="background-color: #6e6;" />
        <Byte v-for="byte in deposit" :key="byte" :byte=byte
        style="background-color: #66e;" />
        <Byte v-for="byte in fee" :key="byte" :byte=byte
        style="background-color: #ee6;" />
        <Byte v-for="byte in timestamp" :key="byte" :byte=byte
        style="background-color: #e6e;" />
        <Byte v-for="byte in signature" :key="byte" :byte=byte
        style="background-color: #6ee;" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            public_key_input: [],
            amount: [],
            deposit: [],
            fee: [],
            timestamp: [],
            signature: []
        }
    },
    methods: {
        randomByte() {
            return Math.floor(Math.random()*256)
        },
        setBytes() {
            this.public_key_input = []
            this.amount = []
            this.deposit = []
            this.fee = []
            this.timestamp = []
            this.signature = []
            for (let i = 0; i < 32; i++) {
                this.public_key_input.push(this.randomByte())
            }
            for (let i = 0; i < 8; i++) {
                this.amount.push(this.randomByte())
            }
            for (let i = 0; i < 1; i++) {
                this.deposit.push(this.randomByte())
            }
            for (let i = 0; i < 8; i++) {
                this.fee.push(this.randomByte())
            }
            for (let i = 0; i < 8; i++) {
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