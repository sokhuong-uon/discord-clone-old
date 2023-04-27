<template>
	<div class="relative flex justify-center w-full h-12 mb-2">
		<div class="absolute left-0 flex items-center w-3 h-12">
			<span
				:class="{ 'h-5': isHover }"
				class="absolute w-4/12 h-0 bg-green-700 rounded-r-lg"
			></span>
		</div>
		<div
			@mouseover="isHover = true"
			@mouseleave="isHover = false"
			class="flex justify-start w-12 h-12"
		>
			<button @click="createServer" class="w-12 h-12 btn">
				<div
					:class="{ 'bg-green-600 rounded-larger': isHover }"
					class="flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-800 rounded-full"
				>
					<svg class="w-6 h-6 text-green-600" viewBox="0 0 24 24">
						<path
							:fill="isHover ? '#F7FAFC' : 'currentColor'"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
						/>
					</svg>
				</div>
			</button>
		</div>
	</div>
</template>
<script setup lang="ts">
const isHover = ref(false)

const emit = defineEmits(['createServer'])
const createServer = () => emit('createServer', true)
</script>
