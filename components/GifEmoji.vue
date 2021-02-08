<template>
<div v-click-outside="externalClick" class="absolute right-0 bottom-16 w-106 h-108 bg-pink-800 transition-all duration-700 ease-in"></div>
</template>

<script>
import vClickOutside from 'v-click-outside';
export default {
	directives: {
			clickOutside: vClickOutside.directive
		},
	data(){
		return{

		}
	},
		methods: {
				externalClick (event) {
			this.$emit('externalClick', true);
			}
		},
	
}
</script>
