<template>
	<div class="w-full flex justify-center items-center h-14 mb-3">
		<div class="absolute flex w-4 h-14 -ml-16">
			<div :class="{'h-8':isHover}" class="w-2 h-2 rounded-r-full bg-gray-100 -ml-1 my-auto transform"></div>
		</div>
		<div class="w-full flex justify-center mr-1">
			<div @mouseover="isHover = true" @mouseleave="isHover = false" class="w-14 h-full rounded-larger overflow-hidden">
				<a href="#">
					<div :class="{'overflow-visible':isHover}" class="bg-transparent rounded-full overflow-hidden">
						<img
							class="w-14 h-14"
							:src="server.gifUrl&&isHover ? server.gifUrl : server.imageUrl"
							:alt="server.name" srcset=""
						/>
					</div>
				</a>
			</div>
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