<template>
	<div @mouseover="isHover = true" @mouseleave="isHover = false" class="w-14 flex justify-center rounded-larger overflow-hidden">
		<a href="#">
			<div :class="{'overflow-visible':isHover}" class="bg-transparent rounded-full overflow-hidden">
				<img
					class="w-14 h-14"
					src="https://discord.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png"
					alt="" srcset=""
				/>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	props: [],
	data() {
		return{
			isHover: false
		}
	},
	mounted() {
		console.log('Ewwww');
	}
}
</script>

<style>

</style>