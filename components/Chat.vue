<template>
<div class="w-full h-auto mt-4 min-w-0 pr-12 flex">
	<div class="w-12 h-12 mx-3 flex-shrink-0 flex items-center justify-center">
		<div class="w-10 h-10 rounded-full overflow-hidden">
			<img :src="chat.author.avatarUrl" alt="" srcset="">
		</div>
	</div>
	<div class="w-full h-auto min-w-0 inline-block flex-shrink">
		<div class="w-full h-8">
			<span class=" text-white">{{chat.author.name}}</span>
			<span class=" text-gray-600 text-xs">{{chat.date}}</span>
		</div>
		<div class="text-chattext text-base">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sit aliquid ipsa dignisdolor sit amet consectetur adipisicing elit. Inventore, sit aliquid ipsa dignissimos repellat ex! Saepe animi tempore tempora ducimus placeat, rerum eligendi at exercitationem alias ratione! Nemo autem maiores sit quos facilis? Fuga vel vero natus sunt enim. Alias commodi perferendis neque nam ad provident? Harum placeat corporis consequatur?
		</div>
	</div>

</div>
</template>

<script>
export default {
	props: ['chat'],
	data() {
		return {

		}
	}

}
</script>

<style>

</style>