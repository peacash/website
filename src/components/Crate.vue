<style scoped>
    button {
        align-items: center;
        appearance: none;
        background-color: #FCFCFD;
        border-radius: .25rem;
        border-width: 0;
        box-shadow: rgba(45, 35, 66, 0.2) 0 1px 4px,rgba(45, 35, 66, 0.1) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
        box-sizing: border-box;
        color: #36395A;
        cursor: pointer;
        display: inline-flex;
        font-family: "JetBrains Mono",monospace;
        justify-content: center;
        line-height: 1;
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
        font-size: 1.125rem;
    }
    button:focus {
        box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.2) 0 2px 4px, rgba(45, 35, 66, 0.1) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }
    button:hover {
        box-shadow: rgba(45, 35, 66, 0.2) 0 3px 8px, rgba(45, 35, 66, 0.1) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        transform: translateY(-2px);
    }
    button:active {
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
    }
    a {
        text-decoration: none !important;
    }
    img {
        margin: 0 !important;
    }
</style>
<template>
    <a class="relative" :href="'https://crates.io/crates/' + crate">
        <button class="w-24 sm:w-28 md:w-32 lg:w-40 px-5 md:px-10 h-16 md:h-20 xl:h-24" role="button">
            <img class="absolute w-4 lg:w-6 left-1 top-1 opacity-80" src="/crates.png" alt="">
            <div class="flex flex-col text-xs sm:text-sm xl:text-lg">
                <b class="mx-auto">{{ crate }}</b>
                <div class="mx-auto opacity-60">v{{ version }}</div>
            </div>
        </button>
    </a>
</template>
<script>
export default {
    props: {
        crate: String,
        version: String
    }
}
</script>