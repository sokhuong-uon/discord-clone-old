<template>
<div v-click-outside="externalClick" class="w-110 h-140 bg-green-500">

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

		}
	},
    methods: {
      	externalClick (event) {
			this.$emit('externalClick', false);
    	}
    }
}
</script>
