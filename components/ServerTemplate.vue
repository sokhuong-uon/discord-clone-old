<template>
<button @click="customizeServer" class="w-100 h-18 flex items-center border rounded-lg border-gray-400 hover:shadow-md hover:bg-gray-200 focus:outline-none mb-2 flex-shrink-0">
	<div class="w-12 h-12 ml-4 mr-2 my-2">
		<img :src="imgUrl" alt="" srcset="">
	</div>
	<div class="text-lg font-bold">{{name}}</div>
	<div class="ml-auto mr-4">
		<img src="https://discord.com/assets/69a0ea5dbf79a129c81a0cb171b60b7a.svg" alt="" srcset="">
	</div>
</button>
</template>

<script>
export default {
	props: ['imgUrl', 'name'],
	methods: {
		customizeServer(){
			this.$emit('customizeServer', true);
		}
	}
}
</script>
