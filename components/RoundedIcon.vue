<template>
	<div @mouseover="isHover = true" @mouseleave="isHover = false" class="w-14 flex justify-center h-full rounded-larger overflow-hidden">
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