<style scoped>
    .logo  {
        font-weight: bold;
    }
    footer {
        border-top: 1px solid black;
    }
</style>
<template>
    <footer class="pt-20 pb-40 bg-white">
        <div class="flex justify-center">
            <div class="w-40 sm:w-80 py-2 px-3 flex">
                <div class="logo text-2xl sm:text-4xl my-auto">PeaCash</div>
                <img class="w-8 sm:w-12 ml-2" src="/logo.svg" alt="">
            </div>
            <div class="flex flex-col">
                <router-link
                    v-for="link in links.to" :key="link"
                    :to=link.to
                    class="
                        w-20 sm:w-40
                        custom-button
                        rounded-md
                        py-2
                        px-3
                        inline-flex
                        items-center
                    "
                >
                    {{ link.text }}
                </router-link>
            </div>
            <div class="flex flex-col">
                <a
                    v-for="link in links.href" :key="link"
                    :href=link.href
                    class="
                        w-20 sm:w-40
                        custom-button
                        rounded-md
                        py-2
                        px-3
                        inline-flex
                        items-center
                    "
                    rel="noopener"
                >
                    <span class="mr-2">{{ link.text }}</span><heroicons-outline-external-link class="h-5 w-5" />
                </a>
            </div>
        </div>
</footer>
</template>
<script lang="ts">
	export default {
		data() {
			return {
				open: false,
				links: {
					to: [
						{
							text: "Home",
							to: "/"
						},
					],
					href: [
						{
							text: "Paper",
							href: "https://github.com/peacash/paper"
						},
						{
							text: "Explorer",
							href: "https://explorer.pea.cash"
						},
						{
							text: "Github",
							href: "https://github.com/peacash"
						},
						{
							text: "Discord",
							href: "https://discord.gg/EpjuhjGUXu"
						}
					]
				}
			}
		}
	}
</script>