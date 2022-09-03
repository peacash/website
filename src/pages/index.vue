<style scoped>
	.full-height {
		height: 100vh;
		/* scroll-snap-align: start; */
	}
	h1 {
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
			my-6
			xl:my-12
		">
			<h1 class="
				rounded
				flex
				justify-center
				shadow-lg
			">
				<Background2 class="absolute h-full w-full rounded" />
				<img class="user-select-none h-28 md:h-40 z-10 w-full px-6" src="/peacash.svg" alt="">
				<div class="absolute z-10 w-full h-full"></div>
			</h1>
		</div>
		<div class="col-span-full py-10 hidden md:block"></div>
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
			<Card name="High energy efficiency">
				<p class="text-black">Proof-of-Stake (PoS) has tiny energy consumption compared to conventional blockchains.</p>
			</Card>
			<Card name="152 bytes per Transaction">
				<p class="text-black">Reducing the transaction size allows for more transactions to fit inside a block.</p>
			</Card>
			<div class="col-span-full py-10 hidden md:block"></div>
			<Card name="Rust">
				<p class="text-black">The original source code is written in <a href="https://www.rust-lang.org">Rust</a>.</p>
			</Card>
			<Card name="Technical">
				<p class="text-black">You can <a href="https://github.com/pea-project/pea-paper">read the paper here</a>.</p>
			</Card>
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