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
			<div class="my-10"></div>
			<h1 class="mx-auto">Learn about Pea</h1>
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
			<h2 class="mx-auto">Efficient storage</h2>
			<p class="md:mx-12 lg:mx-24">
				Pea focuses on performance and efficiency.
				<br>
				It rarely happens that one needs to send exactly 100,000.01 coins.
			</p>
			<h3 class="mx-auto">Scientific notation</h3>
			<p class="md:mx-12 lg:mx-24">
				In order to save precious bytes, numbers are compressed using scientific notation.
				<br>
				A regular u128 takes up 16 bytes (max value of u128 is 340282366920938463463374607431768211455).
				<br>
				However very rarely do we actually care about pennies when transacting millions.
				<br>
				<!-- Keepking that in mind it is not necessary to be able to represent large numbers with such precision.
				<br> -->
				It is possible to compress the numbers down to just 4 bytes without loosing noticable precision.
				<br>
				Numbers can be compressed to just 4 bytes and still be usable in transactions.
				<br>
				<br>
				<br>
				The numbers that represent amount of coins in a transaction.
				Since u128 is represented by 16 bytes the position can be stored in a single hex value (0-F).
				Therefor the last byte is split into two parts.
				The first part contains significant figure.
				The second part contains the order of magnitude.
				The second half of the last byte contains the order of magnitude in hexadecimal.
			</p>
			<AmountBytes />
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