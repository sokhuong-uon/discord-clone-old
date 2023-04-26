<template>
	<button
		@click="$emit('customizeServer', true)"
		class="flex items-center flex-shrink-0 mb-2 border border-gray-400 rounded-lg w-100 h-18 hover:shadow-md hover:bg-gray-200 focus:outline-none"
	>
		<div class="w-12 h-12 my-2 ml-4 mr-2">
			<img :src="imgUrl" alt="" srcset="" />
		</div>
		<div class="text-lg font-bold">{{ name }}</div>
		<div class="ml-auto mr-4">
			<img
				src="https://discord.com/assets/69a0ea5dbf79a129c81a0cb171b60b7a.svg"
				alt=""
				srcset=""
			/>
		</div>
	</button>
</template>

<script setup lang="ts">
type Props = {
	imgUrl: string
	name: string
}

defineProps<Props>()
</script>
