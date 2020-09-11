<template>
<div @mouseover="isHover = true" @mouseleave="isHover = false" class="w-58 my-px h-8 flex justify-center">
    <div class="relative w-2 h-8 flex items-center">
        <span :class="{'h-2':channel.hasUnReadMessage > 0}" class="absolute w-1 bg-green-700 rounded-r-lg"></span>
    </div>
    <div :class="{'bg-gray-800':isHover, 'text-gray-600':channel.hasUnReadMessage === 0, 'text-green-500':channel.hasUnReadMessage > 0}" class="w-56 px-2 rounded-lg cursor-pointer flex items-center">
        <div class="w-6 h-6 -ml-2px mr-1">
            <svg width="24" height="24" class="text-gray-600 transform scale-80"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.887 21a.5.5 0 01-.493-.587L6 17H2.595a.5.5 0 01-.492-.586l.175-1A.5.5 0 012.77 15h3.58l1.06-6H4.005a.5.5 0 01-.492-.586l.175-1A.5.5 0 014.18 7h3.58l.637-3.587A.5.5 0 018.889 3h.984a.5.5 0 01.493.587L9.76 7h6l.637-3.587A.5.5 0 0116.889 3h.984a.5.5 0 01.493.587L17.76 7h3.405a.5.5 0 01.492.586l-.175 1A.5.5 0 0120.99 9h-3.58l-1.06 6h3.405a.5.5 0 01.492.586l-.175 1a.5.5 0 01-.492.414H16l-.637 3.587a.5.5 0 01-.492.413h-.984a.5.5 0 01-.493-.587L14 17H8l-.637 3.587a.5.5 0 01-.492.413h-.984zM9.41 9l-1.06 6h6l1.06-6h-6z"/></svg>
        </div>
        <div class="text-base font-semibold mb-px">
			<p>{{channel.name}}</p>
		</div>
        <div v-if="isHover" class="ml-auto">
            <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#a0aec0" d="M8 9a3 3 0 100-6 3 3 0 000 6zm0 2a6 6 0 016 6H2a6 6 0 016-6zm8-4a1 1 0 00-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 002 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['channel'],
    data() {
        return {
            isHover: false
        }
    }
}
</script>

<style>

</style>
