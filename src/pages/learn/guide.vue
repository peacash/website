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
			<h1 class="mx-auto" style="font-weight: 300;">Guide</h1>
			<h2 class="mx-auto" style="font-weight: 300;">Wallet</h2>
			<p class="md:mx-12 lg:mx-24">
				How to setup a pea-core wallet. How to build source code.
				<br>
				<router-link to="/learn/guide/wallet">Read more</router-link>
			</p>
			<h2 class="mx-auto" style="font-weight: 300;">Validator</h2>
			<p class="md:mx-12 lg:mx-24">
				How to setup and host your own node/validator. How to build source code.
				<br>
				<router-link to="/guide/node">Read more</router-link>
			</p>
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