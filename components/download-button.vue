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
							d="M16.293 9.293l1.414 1.414L12 16.414l-5.707-5.707 1.414-1.414L11 12.586V2h2v10.586l3.293-3.293zM18 20v-2h2v2c0 1.102-.896 2-2 2H6c-1.104 0-2-.898-2-2v-2h2v2h12z"
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
