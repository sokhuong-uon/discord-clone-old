<template>
	<div class="w-full flex justify-center h-12 mb-3">
		<div @mouseover="isHover = true" @mouseleave="isHover = false" class="w-12 flex justify-center rounded-larger overflow-hidden">
			<button :class="{'overflow-visible':isHover}" class="bg-transparent rounded-full overflow-hidden">
				<img
					class="w-12 h-12"
					src="https://discord.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png"
					alt="" srcset=""
				/>
			</button>
		</div>
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