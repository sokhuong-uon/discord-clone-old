<template>
<div class="relative w-full flex justify-center h-12 mb-2 ">
	<div class="absolute flex items-center w-3 h-12 left-0">
		<span :class="{'h-5':isHover}" class="absolute w-4/12 h-0 bg-green-700 rounded-r-lg"></span>
	</div>
	<div @mouseover="isHover = true" @mouseleave="isHover = false" class="w-12 h-12 flex justify-start">
		<button @click="createServer" class="btn w-12 h-12">
			<div :class="{'bg-green-600 rounded-larger':isHover}" class="w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full overflow-hidden">
				<svg class="w-6 h-6 text-green-600" viewBox="0 0 24 24">
					<path
						:fill="isHover ? '#F7FAFC': 'currentColor'" fill-rule="evenodd" clip-rule="evenodd"
						d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
					/>
				</svg>
			</div>
		</button>

	</div>
</div>
</template>

<script>
export default {
	props: ['creatingServer'],
	data() {
		return{
			isHover: false,
			active: false,
		}
	},
	methods: {
		createServer(){
			this.$emit('createServer', true)
		}
	},
	mounted() {

	},
	computed: {

	}
}
</script>
