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
			<h1 class="mx-auto" style="font-weight: 300;">Learn about Pea</h1>
			<p class="md:mx-12 lg:mx-24">
				Your educational guide to the world of Pea.
				Learn how Pea works and how to connect to it.
				This page includes technical and non-technical articles, guides, and resources.
			</p>
			<div class="my-5"></div>
			<p class="md:mx-12 lg:mx-24">
				Easy introduction guide to Pea.
			</p>
			<router-link to="/learn/guide" class="mx-auto" style="text-decoration: none;">
				<Button text="Guide" />
			</router-link>
			<div class="my-5"></div>
			<p class="md:mx-12 lg:mx-24">
				How Pea works explained in technical detail.
			</p>
			<router-link to="/learn/technical" class="mx-auto" style="text-decoration: none;">
				<Button text="Technical" />
			</router-link>
		</Description>
	</div>
</template>
<script>
export default {
	created() {
		document.title = "Learn - Pea";
	}
}
</script>