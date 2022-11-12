<style scoped>
	.prose a {
		text-decoration: none;
		font-weight: bold;
		color: #36395A;
	}
	a:hover {
		text-decoration: underline;
	}
	.prose h2 {
		color: #36395A;
	}
</style>
<template>
	<div class="sm:m-6">
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
				sm:rounded
				flex
				justify-center
				shadow-lg
				bg-black
				select-none
			">
				<Background2 class="absolute h-full w-full" />
				<img class="user-select-none h-28 h-80 md:h-40 z-10 w-full px-6" src="/peacash.svg" alt="">
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
		mb-20 lg:mb-40
	">
		<div class="py-12 flex flex-col">
			<h2 class="mx-auto pb-8">Install using <a href="https://doc.rust-lang.org/cargo/">Cargo</a></h2>
			<div class="mx-auto flex flex-col sm:flex-row justify-center gap-6 md:gap-12 lg:gap-24">
				<Codeblock text="cargo install pea" />
				<Codeblock text="cargo install pea-wallet" />
			</div>
		</div>
		<div class="flex flex-col gap-4 lg:gap-8">
			<h2 class="mx-auto">Repositories</h2>
			<div class="flex justify-center gap-6 lg:gap-12">
				<Git repo="pea" />
				<Git repo="bot" />
				<Git repo="website" />
			</div>
			<div class="flex justify-center gap-6 lg:gap-12">
				<Git repo="explorer" />
			</div>
			<h2 class="mx-auto">Binary Crates</h2>
			<div class="flex justify-center gap-6 lg:gap-12">
				<Crate version="0.6.0" crate="pea" />
				<Crate version="0.3.0" crate="pea-wallet" />
				<Crate version="0.2.0" crate="pea-pay" />
			</div>
			<h2 class="mx-auto">Library Crates</h2>
			<div class="flex justify-center gap-6 lg:gap-12">
				<Crate version="0.2.0" crate="pea-core" />
				<Crate version="0.2.0" crate="pea-logger" />
				<Crate version="0.2.0" crate="pea-db" />
			</div>
			<div class="flex justify-center gap-6 lg:gap-12">
				<Crate version="0.2.0" crate="pea-address" />
				<Crate version="0.2.0" crate="pea-amount" />
				<Crate version="0.2.0" crate="pea-key" />
			</div>
			<div class="flex justify-center gap-6 lg:gap-12">
				<Crate version="0.2.0" crate="pea-block" />
				<Crate version="0.2.0" crate="pea-transaction" />
				<Crate version="0.3.0" crate="pea-stake" />
			</div>
			<div class="flex justify-center gap-6 lg:gap-12">
				<Crate version="0.1.0" crate="pea-pay-core" />
				<Crate version="0.1.0" crate="pea-pay-db" />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	mounted() {
		document.title = "Pea";
	}
}
</script>