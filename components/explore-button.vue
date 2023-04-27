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
			<button class="w-12 h-12 btn">
				<div
					:class="{ 'bg-green-600 rounded-larger': isHover }"
					class="flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-800 rounded-full"
				>
					<svg class="w-6 h-6 text-green-600" viewBox="0 0 24 24">
						<path
							:fill="isHover ? '#F7FAFC' : 'currentColor'"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
						/>
					</svg>
				</div>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
const isHover = ref(false)
</script>
