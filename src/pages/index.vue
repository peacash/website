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
		<div class="col-span-full grid md:grid-cols-2 lg:grid-cols-3 gap-y-10">
			<Git class="mx-auto" repo="pea" />
			<Git class="mx-auto" repo="bot" />
			<Git class="mx-auto" repo="website" />
		</div>
		<h2 class="mx-auto py-10 uppercase select-none" style="font-weight: 300;">crates.io</h2>
		<div class="col-span-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10">
			<Crate class="mx-auto" version="0.4.0" crate="pea" />
			<Crate class="mx-auto" version="0.1.0" crate="pea-core" />
			<Crate class="mx-auto" version="0.1.0" crate="pea-address" />
			<Crate class="mx-auto" version="0.1.0" crate="pea-amount" />
			<Crate class="mx-auto" version="0.1.0" crate="pea-tree" />
			<Crate class="mx-auto" version="0.1.0" crate="pea-node" />
			<Crate class="mx-auto" version="0.1.0" crate="pea-wallet" />
		</div>
		<div class="my-80"></div>
	</div>
</template>
<script>
export default {
	mounted() {
		document.title = "Pea";
	}
}
</script>