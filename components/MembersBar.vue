<template>
<div class="smallScroleBar w-full h-full pb-20 bg-nightgray overflow-auto">
	<div class="w-full h-16 text-gray-500 text-sm font-semibold flex justify-center items-end">
		<h1 class="w-full h-6 pl-4">ONLINE-{{users.length}}</h1>
	</div>
	<div class="w-full h-10 pl-2" v-for="(user, i) in users" :key="i">
		<UserInlineCard :profile = "user"/>
	</div>
</div>
</template>

<script>
export default {
	props: ['users'],
	data(){
		return {
		}
	}
}
</script>

<style>
/* small scrollbar */

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