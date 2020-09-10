<template>
	<div @mouseover="isHover = true" @mouseleave="isHover = false" class="w-58 my-px h-8 flex justify-center">
		<div class="relative w-2 h-8 flex items-center">
			<span :class="{'h-2':channel.hasUnReadMessage > 0}" class="absolute w-1 bg-green-700 rounded-r-lg"></span>
		</div>
		<div :class="{'bg-gray-800':isHover, 'text-gray-600':channel.hasUnReadMessage === 0, 'text-green-500':channel.hasUnReadMessage > 0}" class="w-56 px-2 rounded-lg cursor-pointer flex items-center">
			<div class="w-6 h-6 mr-1">
				<svg class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#4a5568"
						fill-rule="evenodd" clip-rule="evenodd"
						d="M8 4v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4h-4V4H8zm6 10v-4h-4v4h4z"
					/>
				</svg>
			</div>
			<div>{{channel.name}}</div>
			<div v-if="isHover" class="ml-auto">
				<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#a0aec0"
						d="M8 9a3 3 0 100-6 3 3 0 000 6zm0 2a6 6 0 016 6H2a6 6 0 016-6zm8-4a1 1 0 00-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 002 0v-1h1a1 1 0 100-2h-1V7z"
				/>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['channel'],
	data(){
		return{
			isHover: false
		}
	}
}
</script>

<style>

</style>