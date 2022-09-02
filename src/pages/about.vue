<style scoped>
	.full-height {
		height: 100vh;
		/* scroll-snap-align: start; */
	}
	h1 {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 4rem;
		animation: fade 1s;
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
</style>
<template>
	<Background />
    <div class="h-full" style="
        background: rgb(144,135,255);
        background: linear-gradient(127deg, rgba(144,135,255,1) 0%, rgba(178,171,227,1) 19%, rgba(191,170,238,1) 35%, rgba(179,175,245,1) 62%, rgba(148,219,255,1) 87%, rgba(118,215,235,1) 100%);
    ">
        <div style="background-color: #000000cc;" class="
            w-full
            h-full
            flex
            flex-col
            justify-center
            prose md:prose-lg
            md:max-w-7xl
            p-2 sm:p-6 mx-auto
            grid md:grid-cols-2 gap-2 sm:gap-6
        ">
        </div>
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