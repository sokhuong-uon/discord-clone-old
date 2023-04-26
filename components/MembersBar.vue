<template>
	<div
		class="flex flex-col w-full h-full pb-6 overflow-auto smallScroleBar bg-nightgray"
	>
		<div
			class="flex items-end justify-center flex-shrink-0 w-full text-xs font-semibold text-gray-500 h-14"
		>
			<h1 class="w-full h-6 pl-4">ONLINE-{{ users.length }}</h1>
		</div>
		<div class="w-full h-10 pl-2" v-for="(user, i) in users" :key="i">
			<UserInlineCard :profile="user" />
		</div>
	</div>
</template>

<script setup lang="ts">
type Props = {
	users: {
		avatarUrlImg: string
		name: string
		userName: string
		action: {
			name: string
		}
	}[]
}
defineProps<Props>()
</script>

<style scoped>
/* Track */
.smallScroleBar::-webkit-scrollbar-track {
	background: transparent;
}

/* width */
.smallScroleBar::-webkit-scrollbar {
	width: 6px;
}

/* Handle */
.smallScroleBar::-webkit-scrollbar-thumb {
	background: rgb(57, 36, 36);
	border-radius: 10px;
}

/* Handle on hover */
.smallScroleBar::-webkit-scrollbar-thumb:hover {
	background: #555;
}
</style>
