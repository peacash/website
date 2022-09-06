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
		<!-- <div class="col-span-full py-10 hidden md:block"></div> -->
	</div>
	<div class="
		mx-auto
		w-full
		h-full
		flex
		flex-col
		justify-center
		prose md:prose-lg
		md:max-w-7xl
		grid md:grid-cols-2 gap-2 sm:gap-6
	">
		<Description class="col-span-full">
			<h2 class="mx-auto uppercase" style="font-weight: 300;">what is peacash?</h2>
			<p class="md:mx-12 lg:mx-24">
				Peacash is a "green" peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world.
				Peacash is highly energy efficient.
				Proof-of-Stake (PoS) which is used by Peacash, has tiny energy consumption compared to conventional blockchains.
				<!-- Peacash is an open source, global payment network that is fully decentralized without any central authorities. -->
				The entire network is secured by mathematics.
				Individuals are empowered to control their own finances.
				Peacash features fast transaction confirmation times (only a few seconds) and improved storage efficiency.
				Transaction sizes are small, only 152 bytes in size, which allows for more transactions to fit inside a block.
				Peacash focuses on simplicity and performance.
				The original source code is written in Rust "A language empowering everyone to build reliable and efficient software".
			</p>
			<div class="my-20"></div>
			<h2 class="mx-auto uppercase" style="font-weight: 300;">anatomy of pea</h2>
			<h3 class="mx-auto uppercase" style="font-weight: 300;">block</h3>
			<h4 class="mx-auto uppercase" style="font-weight: 300;">148+ bytes</h4>
			<BlockBytes />
			<div class="my-20"></div>
			<h3 class="mx-auto uppercase" style="font-weight: 300;">transaction</h3>
			<h4 class="mx-auto uppercase" style="font-weight: 300;">140 bytes</h4>
			<TransactionBytes />
			<div class="my-20"></div>
			<h3 class="mx-auto uppercase" style="font-weight: 300;">stake</h3>
			<h4 class="mx-auto uppercase" style="font-weight: 300;">109 bytes</h4>
			<StakeBytes />
			<div class="my-40"></div>
		</Description>
	</div>
</template>
<script>
export default {
    data() {
		return {
		}
	}
}
</script>