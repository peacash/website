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
			<h1 class="mx-auto">Guide</h1>
			<Card name="Wallet">
				<p>
					How to setup a pea-core wallet.
					<br>
					<router-link to="/guide/wallet">Read more</router-link>
				</p>
			</Card>
			<Card name="How to setup a node?">
				<p>
					How to setup and host your very own node/validator.
					<br>
					<router-link to="/guide/node">Read more</router-link>
				</p>
			</Card>
			<Card name="Report a bug">
				<p>
					How to submit a bug report.
					<br>
					<router-link to="/guide/bug-report">Read more</router-link>
				</p>
			</Card>
			<Card name="Developers">
				<p>
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