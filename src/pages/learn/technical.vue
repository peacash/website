<template>
	<div class="
		mx-auto
		w-full
		h-full
		flex
		flex-col
		justify-center
		prose sm:prose-lg
		md:max-w-7xl
		grid md:grid-cols-2 gap-2 sm:gap-6
	">
		<Description class="col-span-full text-justify md:text-left">
			<div class="my-10"></div>
			<h1 class="mx-auto" style="font-weight: 300;">Technical</h1>
			<!-- <h2 class="mx-auto">Efficient storage</h2>
			<p class="md:mx-12 lg:mx-24">
				Pea focuses on performance and efficiency.
			</p>
			<div class="my-20"></div> -->
			<h2 class="mx-auto" style="font-weight: 300;">Scientific notation</h2>
			<p class="md:mx-12 lg:mx-24">
				Transaction amounts are compressed using scientific notation in order to save precious bytes.
				<br>
				<i>
					Very rarely do we actually care about pennies when transacting millions.
					<!-- In these edge cases we can just split it up into separate transactions. -->
				</i>
			</p>
			<AmountBytes />
			<p class="md:mx-12 lg:mx-24 italic">
				Visualization of a compressed number (4 bytes).
			</p>
			<div class="my-20"></div>
			<h2 class="mx-auto" style="font-weight: 300;">Block</h2>
			<div class="md:mx-12 lg:mx-24">
				<BlockBytes />
			</div>
			<p class="md:mx-12 lg:mx-24 italic">
				Visualization of a serialized block (148 bytes + transactions & stakes).
			</p>
			<div class="my-20"></div>
			<h2 class="mx-auto" style="font-weight: 300;">Transaction</h2>
			<div class="md:mx-12 lg:mx-24">
				<TransactionBytes />
			</div>
			<p class="md:mx-12 lg:mx-24 italic">
				Visualization of a serialized transaction (140 bytes).
			</p>
			<div class="my-20"></div>
			<h2 class="mx-auto" style="font-weight: 300;">Stake</h2>
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