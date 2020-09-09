<template>
	<div class="relative w-full flex justify-center h-12 mb-2">
		<div v-if="type==='server'" class="absolute flex items-center w-3 h-12 left-0">
			<span :class="{'h-0':server.hasUnReadMessage === 0, 'h-2':server.hasUnReadMessage > 0, 'h-5':isHover}" class="absolute w-4/12 bg-green-700 rounded-r-lg"></span>
		</div>
		<div v-if="type==='button'" class="absolute flex items-center w-3 h-12 left-0">
			<span :class="{'h-5':isHover}" class="absolute w-4/12 h-0 bg-green-700 rounded-r-lg"></span>
		</div>
		<div @mouseover="isHover = true" @mouseleave="isHover = false" class="w-12 h-12 flex justify-start">
			<nuxt-link v-if="type==='server'" :class="{'':isHover}" class="" to="#">
				<img
					v-if="server.imageUrl"
					class="w-12 h-12 rounded-full overflow-hidden"
					:src="server.gifUrl&&isHover ? server.gifUrl : server.imageUrl"
					:alt="server.name" srcset=""
				/>
				<div v-else class="w-12 h-12 flex justify-center items-center bg-gray-800 rounded-full overflow-hidden text-gray-400">
					{{server.name.substring(0,4)}}
				</div>
			</nuxt-link>
			<button v-if="type==='button'" class="w-12 h-12">
				<div :class="{'bg-green-600':isHover}" class="w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full overflow-hidden">
					<svg v-if="button.name==='Home'" class="text-green-600 w-12 h-6 mt-1 mr-1 transform mx-auto" viewBox="0 0 24 24">
						<path
							:fill="isHover ? '#F7FAFC': 'currentColor'" fill-rule="evenodd" clip-rule="evenodd"
							:d="button.svgPath"
						/>
					</svg>
					<svg v-else class="w-6 h-6 text-green-600" viewBox="0 0 24 24">
						<path
							:fill="isHover ? '#F7FAFC': 'currentColor'" fill-rule="evenodd" clip-rule="evenodd"
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
	props: ['type', 'server', 'button'],
	data() {
		return{
			isHover: false
		}
	},
	mounted() {
		if(!this.server){
			console.log('Not a server');
		}else{
			console.log(this.server.hasUnReadMessage);
		}

	}
}
</script>

<style>

</style>