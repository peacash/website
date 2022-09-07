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
			<!-- <h2 class="mx-auto">Efficient storage</h2>
			<p class="md:mx-12 lg:mx-24">
				Pea focuses on performance and efficiency.
			</p>
			<div class="my-20"></div> -->
			<h3 class="mx-auto">Scientific notation</h3>
			<p class="md:mx-12 lg:mx-24">
				The 128-bit unsigned integer type (u128) has a maximum value of 340282366920938463463374607431768211455.
				Transaction amounts are compressed using scientific notation in order to save precious bytes.
				<br>
				<i>
					Very rarely do we actually care about pennies when transacting millions.
					In these edge cases we can just split it up into separate transactions.
				</i>
			</p>
			<AmountBytes />
			<p class="md:mx-12 lg:mx-24 italic">
				Visualization of a compressed number (4 bytes).
			</p>
			<div class="my-20"></div>
			<h3 class="mx-auto">Block</h3>
			<div class="md:mx-12 lg:mx-24">
				<BlockBytes />
			</div>
			<p class="md:mx-12 lg:mx-24 italic">
				Visualization of a serialized block (148 bytes + transactions & stakes).
			</p>
			<div class="my-20"></div>
			<h3 class="mx-auto">Transaction</h3>
			<div class="md:mx-12 lg:mx-24">
				<TransactionBytes />
			</div>
			<p class="md:mx-12 lg:mx-24 italic">
				Visualization of a serialized transaction (140 bytes).
			</p>
			<div class="my-20"></div>
			<h3 class="mx-auto">Stake</h3>
			<div class="md:mx-12 lg:mx-24">
				<StakeBytes />
			</div>
			<p class="md:mx-12 lg:mx-24 italic">
				Visualization of a serialized stake (109 bytes).
			</p>
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