<style scoped>
	.full-height {
		height: 100vh;
		/* scroll-snap-align: start; */
	}
	h1 {
		animation: fade 1s;
		font-size: 4rem;
		font-weight: 700;
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
		mt-6 xl:mt-12
	">
		<Description class="col-span-full">
			<h2 class="mx-auto uppercase" style="font-weight: 300;">guide</h2>
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