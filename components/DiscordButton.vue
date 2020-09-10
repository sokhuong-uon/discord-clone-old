<template>
	<div class="relative w-full flex justify-center h-12 mb-2">
		<div class="absolute flex items-center w-3 h-12 left-0">
			<span :class="{'h-5':isHover}" class="absolute w-4/12 h-0 bg-green-700 rounded-r-lg"></span>
		</div>
		<div @mouseover="isHover = true" @mouseleave="isHover = false" class="w-12 h-12 flex justify-start">
			<button class="w-12 h-12">
				<div :class="{'bg-blue-700 rounded-larger':isHover}" class="w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full overflow-hidden">
					<svg class="text-green-600 w-12 h-6 mt-1 mr-1 transform mx-auto" viewBox="0 0 24 24">
						<path
							fill="#F7FAFC" fill-rule="evenodd" clip-rule="evenodd"
							:d="button.svgPath"
						/>
					</svg>
				</div>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['button'],
	data() {
		return{
			isHover: false,
		}
	},
	methods: {
		fireWhenClicked: function(buttonName){
			this.active = true;
			console.log(buttonName);
		}
	},
	mounted() {
		// if(!this.server){
		// 	console.log('Not a server');
		// }else{
		// 	console.log(this.server.hasUnReadMessage);
		// }

	},
	computed: {

	}
}
</script>

<style>

</style>