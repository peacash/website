<style scoped>
    div {
        background-color: #36395A;
        align-items: center;
        appearance: none;
        border-radius: .25rem;
        border-width: 0;
        box-sizing: border-box;
        color: #36395A;
        cursor: pointer;
        display: inline-flex;
        font-family: "JetBrains Mono",monospace;
        justify-content: center;
        list-style: none;
        overflow: hidden;
        position: relative;
        text-align: left;
        text-decoration: none;
        transition: box-shadow 100ms,transform 100ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        will-change: box-shadow,transform;
    }
</style>
<template>
    <div class="
        text-white
        p-4 sm:p-5 sm:px-7 lg:p-6 lg:px-10
        text-xs sm:text-sm lg:text-lg
        rounded-md shadow-lg flex items-center"
    >
        <span
            style="white-space: nowrap;"
            class="
                select-all
                text-white
                block
                overflow-hidden
                font-bold
                w-auto mr-2"
        >{{ props.text }}</span>
        <router-link
            to=""
        >
            <button ref="copyButton" class="focus:outline-none" aria-label="Copy install command">
                <heroicons-outline-clipboard-copy
                    v-if="!copied"
                    class="inline-block fill-current cursor-pointer text-white hover:text-black mb-1"
                    aria-hidden="true"
                    @click="copyInstallCmd"
                />
                <heroicons-outline-clipboard-check
                    v-else
                    class="inline-block fill-current text-green-500 cursor-pointer mb-1"
                    aria-hidden="true"
                    @click="copyInstallCmd"
                />
            </button>
        </router-link>
    </div>
</template>
<script setup lang="ts">
	import { defineProps, ref } from 'vue'
	import { useTippy } from 'vue-tippy'
	import debounce from 'lodash/debounce'
	const copyButton = ref()
	const copied = ref(false)
	const props = defineProps<{ text: string }>()
	const resetCopied = debounce((hide: () => void) => {
		hide()
		copied.value = false
	}, 1000)
	const { show: showTooltip, hide: hideTooltip } = useTippy(copyButton, {
		content: 'Copied',
		trigger: 'manual',
		hideOnClick: false,
	})
	const copyInstallCmd = async () => {
		try {
			await navigator.clipboard.writeText(props.text)
			showTooltip()
		}
		catch {}
		copied.value = true
		resetCopied(hideTooltip)
	}
</script>