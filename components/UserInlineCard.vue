<template>
<button class="btn w-56 h-10">
	<div class="w-56 h-10 rounded-md py-1 px-2 text-graydiscord hover:text-gray-200 flex items-center hover:bg-gray-800">
		<!--icon avatar and status-->
		<div class="w-8 h-8 mr-3">
			<div class="relative w-8 h-8">
				<img class="w-full h-full rounded-full overflow-hidden" :src="profile.avatarUrlImg" :alt="profile.name" srcset="" />
				<div class="absolute flex justify-center items-center w-3 h-3 bottom-0 right-0 bg-gray-700 rounded-full">
					<div class="absolute w-3 h-3 rounded-full text-green-700 overflow-hidden">
						
					</div>
				</div>
			</div>
		</div>
		<div class="w-41 h-auto flex flex-col items-center">
			<div class="w-41 h-4 text-current leading-none flex items-center">
				<span class="h-5">{{profile.userName}}</span>
			</div>
			<div class="w-41 h-auto flex justify-start text-xs text-graydiscord">
				<p class="truncate overflow-hidden">{{profile.action.name}}</p>
			</div>
		</div>
	</div>

</button>
</template>

<script>
export default {
	props: ['profile']
}
</script>

<style>
.text-xs {
	font-size: 0.7rem;
}
</style>