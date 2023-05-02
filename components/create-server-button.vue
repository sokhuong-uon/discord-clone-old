<template>
	<div class="relative flex justify-center w-full h-12 mb-2">
		<div class="absolute left-0 flex items-center w-3 h-12">
			<span
				class="absolute w-4/12 h-0 bg-green-700 rounded-r-lg hover:h-5"
			></span>
		</div>

		<div class="flex justify-start w-12 h-12 group">
			<button @click="showCreateServerModal" class="w-12 h-12 btn">
				<div
					class="flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-800 rounded-full hover:bg-green-600 hover:rounded-larger"
				>
					<svg
						class="w-6 h-6 text-green-600 group-hover:text-[#F7FAFC]"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
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
const emit = defineEmits<{
	(e: 'click'): void
}>()

const showCreateServerModal = () => emit('click')
</script>
