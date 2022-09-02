<style scoped>
	.full-height {
		height: 100vh;
		/* scroll-snap-align: start; */
	}
	h1 {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 4rem;
		animation: fade 1s;
	}
	img {
		animation: logo 1s;
	}
	@keyframes fade {
		0% {
			opacity: 0;
		}
		25% {
			opacity: 0;
			-webkit-transform: translate(0, 10rem);
		}
		75% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes logo {
		0% {
			-webkit-transform: translate(10rem, 0);
		}
	}
</style>
<template>
	<div class="m-2 sm:m-6">
		<div class="
			mx-auto
			w-full
			flex
			flex-col
			justify-center
			prose md:prose-lg
			md:max-w-7xl
			relative
			my-20 md:my-40
		">
			<h1 class="
				rounded
				flex
				justify-center
				shadow-lg
			">
				<Background2 class="absolute h-full w-full rounded" />
				<img class="h-20 sm:h-28 md:h-40 z-10" src="/peacash3.svg" alt="">
			</h1>
		</div>
		<div class="
			mx-auto
			w-full
			flex
			flex-col
			justify-center
			prose md:prose-lg
			md:max-w-7xl
			grid md:grid-cols-2 gap-2 sm:gap-6
		">
			<Card name="High energy efficiency" description="Proof-of-Stake (PoS) has tiny energy consumption compared to conventional blockchains." />
			<Card name="152 bytes per Transaction" description="Reducing the transaction size allows for more transactions to fit inside a block." />
			<Card name="Rust" description="The original source code is written in Rust." />
			<div class="col-span-full my-20 md:my-40"></div>
		</div>
	</div>
	<Bg />
</template>
<script>
export default {
    data() {
		return {
		}
	}
}
</script>