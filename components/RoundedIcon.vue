<template>
	<div class="relative w-full flex justify-center h-12 mb-3">
		<div class="absolute flex items-center w-3 h-12 left-0">
			<span :class="{'h-8':isHover}" class="absolute w-6/12 h-3 bg-green-700 rounded-r-lg"></span>
		</div>
		<div @mouseover="isHover = true" @mouseleave="isHover = false" class="w-12 flex justify-center rounded-larger overflow-hidden">
			<nuxt-link :class="{'overflow-visible':isHover}" class="rounded-full overflow-hidden" to="#">
				<img
					class="w-12 h-12"
					:src="server.gifUrl&&isHover ? server.gifUrl : server.imageUrl"
					:alt="server.name" srcset=""
				/>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	props: ['server'],
	data() {
		return{
			isHover: false
		}
	},
	mounted() {
		if(!this.server){
			console.log('Not a server');
		}
		console.log(this.server.name);
		console.log(this.server.gifUrl);
		if(this.server.gifUrl){
			console.log('alright');
		}
	}
}
</script>

<style>

</style>