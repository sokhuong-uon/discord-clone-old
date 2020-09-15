<template>
<div class="w-full h-auto mt-4 min-w-0 pr-12 flex">
	<div class="w-12 h-12 mx-3 flex-shrink-0 flex items-center justify-center">
		<div class="w-10 h-10 rounded-full overflow-hidden">
			<img :src="chat.author.avatarUrl" alt="" srcset="">
		</div>
	</div>
	<div class="w-full h-auto min-w-0 inline-block flex-shrink">
		<div class="w-full h-8">
			<span class=" text-white">{{chat.author.userName}}</span>
			<span class=" text-gray-600 text-xs">{{chat.date}}</span>
		</div>
		<div @keyup.enter="onSubmit" id="textarea" :contenteditable="editing" :class="{'bg-grayinput messageinput overflow-auto':editing}" class="text-chattext  outline-none text-base break-normal">
			{{chat.value}}
		</div>
	</div>
	<div class="">
		<button class="bg-green-700" @click="editing = true">edit</button>
		<button class="bg-pink-700" @click="editing = false">save</button>
	</div>
</div>
</template>

<script>
export default {
	props: ['chat'],
	data() {
		return {
			editing: false
		}
	},
	methods: {
		onSubmit: function(){
			let contentent = document.getElementById('textarea');

		}
	}

}
</script>

<style>
.messageinput{
	max-height: 20rem;
	max-width: 20rem;
}
</style>