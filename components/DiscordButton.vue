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
			<nuxt-link class="w-12 h-12 btn" to="/">
				<div
					:class="{ 'bg-blue-700 rounded-larger': isHover }"
					class="flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-800 rounded-full"
				>
					<svg
						class="w-12 h-6 mx-auto mt-1 mr-1 text-green-600 transform"
						viewBox="0 0 24 24"
					>
						<path
							fill="#F7FAFC"
							fill-rule="evenodd"
							clip-rule="evenodd"
							:d="button.svgPath"
						/>
					</svg>
				</div>
			</nuxt-link>
		</div>
	</div>
</template>

<script setup lang="ts">
type Props = {
	button: {
		svgPath: string
	}
}
const isHover = ref(false)
defineProps<Props>()
</script>
