<template>
<div v-click-outside="externalClick" class="w-144 max-h-1/2 min-h-0 rounded-larger px-5 pt-5 bg-nightgray flex flex-col items-center justify-between">
	<div class="w-full flex-1 min-h-1/4 flex flex-col items-start justify-between">
		<input id="searchConversation" class="w-132 h-18 px-1 flex-shrink-0 text-xl outline-none bg-grayinput rounded-lg" type="text" placeholder="Where would you like to go?">
		<div v-if="true" class="w-full flex-1 overflow-y-auto">
			<div class="w-full h-2"></div>
			<SearchResultCard/>
			<SearchResultCard/>
			<SearchResultCard/>
			<SearchResultCard/>
			<SearchResultCard/>
			<SearchResultCard/>
			<SearchResultCard/>
		</div>
	</div>
	<div class="w-full h-8 py-2 flex items-center text-xs flex-shrink-0 text-gray-200">
		<h1 class="h-8 font-semibold flex items-center text-green-500">PROTIP:</h1>
		<div class="w-full h-8 flex items-center text-graydiscord mx-1">
			Start searches with
			<span class="bg-gray-900 font-semibold w-3 h-4 mx-2px rounded flex items-center justify-center">@</span>
			<span class="bg-gray-900 font-semibold w-3 h-4 mx-2px rounded flex items-center justify-center">#</span>
			<span class="bg-gray-900 font-semibold w-3 h-4 mx-2px rounded flex items-center justify-center">!</span>
			<span class="bg-gray-900 font-semibold w-3 h-4 mx-2px rounded flex items-center justify-center">*</span>
			to narrow reslts.
			<a class="text-indigo-500 hover:underline ml-2" target="_blank" href="https://support.discord.com/hc/en-us/articles/115000070311">Learn more</a>
		</div>
	</div>
</div>
</template>

<script>
import vClickOutside from 'v-click-outside';
export default {
	directives: {
    	clickOutside: vClickOutside.directive
    },
	data(){
		return{
			hasResult: false
		}
	},
    methods: {
      	externalClick (event) {
			this.$emit('externalClick', false);
    	}
    }
}
</script>
