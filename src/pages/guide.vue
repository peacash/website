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
			grid md:grid-cols-2 gap-2 sm:gap-6
		">
			<div class="col-span-full pt-10 md:pt-20 flex justify-center">
				<h1>Pea Guide</h1>
			</div>
			<div class="col-span-full py-10 hidden md:block"></div>
			<Card name="Wallet">
				<p class="text-black">
					How to setup a pea-core wallet.
					<br>
					<router-link to="/guide/wallet">Read more</router-link>
				</p>
			</Card>
			<Card name="How to setup a node?">
				<p class="text-black">
					How to setup and host your very own node/validator.
					<br>
					<router-link to="/guide/node">Read more</router-link>
				</p>
			</Card>
			<div class="col-span-full py-10 hidden md:block"></div>
			<Card name="Report a bug">
				<p class="text-black">
					How to submit a bug report.
					<br>
					<router-link to="/guide/bug-report">Read more</router-link>
				</p>
			</Card>
			<Card name="Developers">
				<p class="text-black">
					For developers of the project.
					<br>
					<router-link to="/guide/developers">Read more</router-link>
				</p>
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