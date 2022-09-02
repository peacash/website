<template>
	<div style="
		overflow: auto;
		background: rgb(144,135,255);
		background: linear-gradient(127deg, rgba(144,135,255,1) 0%, rgba(178,171,227,1) 19%, rgba(191,170,238,1) 35%, rgba(179,175,245,1) 62%, rgba(148,219,255,1) 87%, rgba(118,215,235,1) 100%);
	" class="
		custom-scroll
	">
		<Navbar />
		<router-view />
	</div>
</template>
<style>
	.grid-layout {
		grid-template-rows: auto 1fr;
	}
	.grid-layout-container {
		grid-template-rows: 1fr auto;
	}
</style>