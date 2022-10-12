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
		">
			<h1 class="
				rounded
				flex
				justify-center
				shadow-lg
				rounded bg-black
			">
				<Background2 class="absolute h-full w-full" />
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
		<div class="py-6 lg:py-12"></div>
		<div class="flex flex-col gap-4 lg:gap-8">
			<div class="flex justify-center gap-6 lg:gap-12">
				<Git repo="pea" />
				<Git repo="bot" />
				<Git repo="website" />
			</div>
			<div class="flex justify-center gap-6 lg:gap-12">
				<Crate version="0.4.0" crate="pea" />
				<Crate version="0.1.0" crate="pea-core" />
				<Crate version="0.1.0" crate="pea-address" />
			</div>
			<div class="flex justify-center gap-6 lg:gap-12">
				<Crate version="0.1.0" crate="pea-amount" />
				<Crate version="0.1.0" crate="pea-tree" />
				<Crate version="0.1.0" crate="pea-node" />
			</div>
			<div class="flex justify-center gap-6 lg:gap-12">
				<Crate version="0.1.0" crate="pea-wallet" />
			</div>
		</div>
		<div class="py-6 lg:py-12"></div>
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