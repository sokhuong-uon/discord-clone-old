<template>
<div v-click-outside="externalClick" class="w-110 h-140 rounded-lg bg-white flex flex-col items-center">
	<div class="w-full h-26 px-4 pt-6 flex-shrink-0 flex flex-col items-center">
		<div class="text-2xl font-bold leading-tight">Create a server</div>
		<div class="text-center text-gray-600">
			Your server is where you and your friends hang out. Make yours and start talking.
  		</div>
	</div>
	<div class="scroll-bar-gray w-full h-80 flex-1 pl-4 pr-2 pb-2 mt-6 flex flex-col items-center overflow-y-auto">
		<ServerTemplate name="Create My Own" imgUrl="https://discord.com/assets/79516499036b21acd5f56ccba0635c38.svg"/>
		<div class="w-full h-4 mt-4 mb-2 text-xs font-bold text-gray-700">START FROM A TEMPLATE</div>
		<ServerTemplate v-for="(template, i) in serverTemplates" :key="i" :name="template.name" :imgUrl="template.imgUrl"/>
	</div>
	<div class="w-full h-26 p-4 bg-gray-100 mb-2  flex flex-col items-center">
		<div class="text-xl font-bold mb-2">Have an invite already?</div>
		<button class="w-full h-10 px-2 flex-shrink-0 rounded bg-teal-600">
			<div class="text-gray-200">Join a server</div>
		</button>
	</div>
</div>
</template>

<script>
import vClickOutside from 'v-click-outside';
export default {
	directives: {
    	clickOutside: vClickOutside.directive
    },
	data(){
		return{
			serverTemplates:[
				{
					name: "Gaming",
					imgUrl: "https://discord.com/assets/b13e5fb6748d48b8d32a0a7b720d3a31.svg"
				},
				{
					name: "School Club",
					imgUrl: "https://discord.com/assets/d149a7d17b8c891a36059af8d4108813.svg"
				},
				{
					name: "Study Group",
					imgUrl: "https://discord.com/assets/8ea6fb273c261048c7cfb159b0bd286e.svg"
				},
				{
					name: "Friends",
					imgUrl: "https://discord.com/assets/6670414aa93c6a4b3b5c7f57ead40533.svg"
				},
				{
					name: "Artists & Creators",
					imgUrl: "https://discord.com/assets/5e8985b40ca5104dadceeccaa81c23ca.svg"
				},
				{
					name: "Local Community",
					imgUrl: "https://discord.com/assets/a01602a0c0bd856ebed967db1785d5a7.svg"
				},

			]
		}
	},
    methods: {
      	externalClick (event) {
			this.$emit('externalClick', false);
    	}
    }
}
</script>
