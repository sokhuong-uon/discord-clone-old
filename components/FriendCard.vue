<template>
<nuxt-link class="w-56 h-12" role="listitem" to="/1">
	<div class="w-56 h-12 px-2 rounded-md text-graydiscord hover:text-gray-200 flex items-center hover:bg-gray-800">
		<!--icon avatar and status-->
		<div class="w-8 h-8">
			<div class="relative w-8 h-8">
				<img class="w-full h-full rounded-full overflow-hidden" :src="profile.avatarUrlImg" :alt="profile.name" srcset="" />
				<div class="absolute flex justify-center items-center w-3 h-3 bottom-0 right-0 bg-gray-700 rounded-full">
					<div class="absolute w-3 h-3 rounded-full text-green-700 overflow-hidden">

					</div>
				</div>
			</div>
		</div>
		<div class="w-40 flex items-center ml-3">
			<div class="w-32 flex flex-col">
				<div class=" w-32 h-4 text-current leading-none flex items-center">
					<span class="h-5 truncate">{{profile.userName}}</span>
				</div>
				<div class="w-full flex justify-start text-xs text-graydiscord">
					<p class="truncate overflow-hidden">{{profile.action.name}}</p>
				</div>
			</div>
			<div class="w-5 h-5 ml-auto">
				<svg class="transform scale-75" aria-hidden="false" width="24" height="24"><path fill="currentColor" d="M18.4 4L12 10.4 5.6 4 4 5.6l6.4 6.4L4 18.4 5.6 20l6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L20 5.6 18.4 4z"/></svg>
			</div>
		</div>

	</div>
</nuxt-link>
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