<template>
	<div class="m-2 sm:m-6">
		<div class="
			mx-auto
			w-full
			flex
			flex-col
			justify-center
			prose sm:prose-lg
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
	</div>
	<div class="
		mx-auto
		w-full
		flex
		flex-col
		justify-center
		prose sm:prose-lg
		md:max-w-7xl
	">
		<h2 class="mx-auto py-10 uppercase select-none" style="font-weight: 300;">github</h2>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10">
			<Git class="mx-auto" repo="pea" />
			<Git class="mx-auto" repo="bot" />
			<Git class="mx-auto" repo="website" />
		</div>
		<h2 class="mx-auto py-10 uppercase select-none" style="font-weight: 300;">crates.io</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10">
			<Crate class="mx-auto" version="0.4.0" crate="pea" />
			<Crate class="mx-auto" version="0.1.0" crate="pea-core" />
			<Crate class="mx-auto" version="0.1.0" crate="pea-address" />
			<Crate class="mx-auto" version="0.1.0" crate="pea-amount" />
			<Crate class="mx-auto" version="0.1.0" crate="pea-tree" />
			<Crate class="mx-auto" version="0.1.0" crate="pea-node" />
			<Crate class="mx-auto" version="0.1.0" crate="pea-wallet" />
		</div>
		<div class="my-10"></div>
		<Description class="text-justify md:text-left">
			<div class="my-10"></div>	
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
			<div class="my-80"></div>
		</Description>
	</div>
</template>
<script>
export default {
	mounted() {
		document.title = "Pea";
	}
}
</script>