<style scoped>
    div {
        font-family: 'Courier New', Courier, monospace;
    }
</style>
<template>
    <div></div>
    <div class="mx-auto my-8">
        [
            <span class="px-2 py-1 rounded text-black" style="background-color: #f99;">previous_hash</span>,
            <span class="px-2 py-1 rounded text-black" style="background-color: #9f9;">timestamp</span>,
            <span class="px-2 py-1 rounded text-black" style="background-color: #99f;">public_key</span>,
            <span class="px-2 py-1 rounded text-black" style="background-color: #ff9;">signature</span>,
            <span class="px-2 py-1 rounded text-black" style="background-color: #f9f;">transactions</span>,
            <span class="px-2 py-1 rounded text-black" style="background-color: #9ff;">stakes</span>
        ]
    </div>
    <div class="flex flex-wrap justify-center">
        <Byte v-for="byte in previous_hash" :key="byte" :byte=byte
        style="background-color: #e66;" />
        <Byte v-for="byte in timestamp" :key="byte" :byte=byte
        style="background-color: #6e6;" />
        <Byte v-for="byte in public_key" :key="byte" :byte=byte
        style="background-color: #66e;" />
        <Byte v-for="byte in signature" :key="byte" :byte=byte
        style="background-color: #ee6;" />
        <Byte v-for="byte in transactions" :key="byte" :byte=byte
        style="background-color: #e6e;" />
        <Byte v-for="byte in stakes" :key="byte" :byte=byte
        style="background-color: #6ee;" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            previous_hash: [],
            timestamp: [],
            public_key: [],
            signature: [],
            transactions: [],
            stakes: []
        }
    },
    methods: {
        randomByte() {
            return Math.floor(Math.random()*256)
        },
        setBytes() {
            this.previous_hash = []
            this.timestamp = []
            this.public_key = []
            this.signature = []
            this.transactions = []
            this.stakes = []
            for (let i = 0; i < 32; i++) {
                this.previous_hash.push(this.randomByte())
            }
            for (let i = 0; i < 8; i++) {
                this.timestamp.push(this.randomByte())
            }
            for (let i = 0; i < 32; i++) {
                this.public_key.push(this.randomByte())
            }
            for (let i = 0; i < 64; i++) {
                this.signature.push(this.randomByte())
            }
            for (let i = 0; i < 4; i++) {
                this.transactions.push(this.randomByte())
            }
            for (let i = 0; i < 4; i++) {
                this.stakes.push(this.randomByte())
            }
        }
    },
    mounted() {
        this.setBytes()
    }
}
</script>