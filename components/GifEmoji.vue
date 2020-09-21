<template>
<div v-click-outside="externalClick" class="w-106 h-108 bg-pink-800"></div>
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
			this.$emit('externalClick', false);
    	}
    }
}
</script>
