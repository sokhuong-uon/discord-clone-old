<template>
<div class="w-56 h-10 rounded-md py-1 px-2 flex items-center hover:bg-gray-800">
	<!--icon avatar and status-->
	<div class="w-8 h-8 mr-3">
		<div class="relative w-8 h-8">
			<img class="w-full h-full rounded-full overflow-hidden" :src="profile.avatarUrlImg" :alt="profile.name" srcset="" />
			<div class="absolute flex justify-center items-center w-3 h-3 bottom-0 right-0 bg-gray-600 rounded-full">
				<div class="absolute w-3 h-3 bg-green-600 rounded-full overflow-hidden">

				</div>
			</div>
		</div>
	</div>
	<div class="w-full h-10 text-gray-500 flex flex-col justify-center items-center">

		<div class="w-full h-5">{{profile.userName}}</div>
		<div class="w-full h-auto text-xs">{{profile.action.name}}</div>
	</div>

</div>
</template>

<script>
export default {
	props: ['profile']
}
</script>

<style>

</style>