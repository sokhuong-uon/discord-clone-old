<template>
	<div class="w-full flex justify-center h-12 mb-3">
		<div @mouseover="isHover = true" @mouseleave="isHover = false" class="w-12 h-12 flex justify-center">
			<button :class="{'rounded-larger bg-green-600':isHover}" class="w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full overflow-hidden">
				<svg class="w-6 h-6 text-green-600" viewBox="0 0 24 24">
					<path
						:fill="isHover ? '#F7FAFC': 'currentColor'" fill-rule="evenodd" clip-rule="evenodd"
						d="M16.293 9.293l1.414 1.414L12 16.414l-5.707-5.707 1.414-1.414L11 12.586V2h2v10.586l3.293-3.293zM18 20v-2h2v2c0 1.102-.896 2-2 2H6c-1.104 0-2-.898-2-2v-2h2v2h12z"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['svgPath'],
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