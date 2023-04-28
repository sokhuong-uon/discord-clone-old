<template>
	<div
		ref="container"
		class="relative flex flex-col items-center h-auto overflow-hidden bg-white rounded-lg w-110 max-h-3/4"
	>
		<div class="flex h-auto max-h-full min-h-0 rounded-lg w-110">
			<div
				v-if="true"
				:class="{ hidden: customizeServer }"
				class="relative flex flex-col min-h-0"
			>
				<div
					class="flex flex-col items-center flex-shrink-0 w-full px-4 pt-6 h-26"
				>
					<div class="text-2xl font-bold leading-tight">Create a server</div>
					<div class="text-center text-gray-600">
						Your server is where you and your friends hang out. Make yours and
						start talking.
					</div>
				</div>
				<div
					class="flex flex-col items-center flex-1 w-full h-auto min-h-0 pb-2 pl-4 pr-2 mt-6 overflow-y-auto scroll-bar-gray"
				>
					<ServerTemplate
						@customizeServer="customizeServer = $event"
						name="Create My Own"
						imgUrl="https://discord.com/assets/79516499036b21acd5f56ccba0635c38.svg"
					/>
					<div class="w-full h-4 mt-4 mb-2 text-xs font-bold text-gray-700">
						START FROM A TEMPLATE
					</div>
					<ServerTemplate
						@customizeServer="customizeServer = $event"
						v-for="(template, i) in serverTemplates"
						:key="i"
						:name="template.name"
						:imgUrl="template.imgUrl"
					/>
				</div>
				<div class="flex flex-col items-center w-full p-4 bg-gray-100 h-26">
					<div class="mb-2 text-xl font-bold">Have an invite already?</div>
					<button
						class="flex-shrink-0 w-full h-10 px-2 bg-teal-600 rounded btn"
					>
						<div class="text-gray-200">Join a server</div>
					</button>
				</div>
			</div>

			<div v-if="customizeServer" class="flex-1 w-full min-w-full h-106">
				<div
					class="flex flex-col items-center flex-shrink-0 w-full px-4 pt-6 h-26"
				>
					<div class="text-2xl font-bold leading-tight">
						Customize your server
					</div>
					<div class="text-center text-gray-600">
						Give your new server a personality with a name and an icon. You can
						always change it later.
					</div>
				</div>
				<div class="flex flex-col pl-4 pr-2 my-6 h-50">
					<div class="flex items-center justify-center w-full h-20">
						<div
							class="relative flex items-center justify-center w-20 h-20 overflow-hidden"
						>
							<svg width="80" height="80" fill="none">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M54.87 2.855a39.692 39.692 0 00-3.255-1.142l-.29.957-.29.957c.943.285 1.87.607 2.781.962.315-.601.667-1.18 1.053-1.734zm20.54 23.329c.603-.315 1.181-.667 1.735-1.053a39.688 39.688 0 011.142 3.254l-.957.29-.957.29a37.698 37.698 0 00-.962-2.781zm3.405 17.641l.995.097a40.51 40.51 0 000-7.844l-.995.097-.995.097a38.463 38.463 0 010 7.456l.995.097zm-34.99-42.64l.097-.995a40.484 40.484 0 00-7.844 0l.097.995.097.995a38.485 38.485 0 017.456 0l.097-.995zM28.675 2.67l-.29-.957a39.75 39.75 0 00-7.244 3.003l.472.882.472.881a37.748 37.748 0 016.88-2.852l-.29-.957zM15.259 9.85l-.635-.773a40.242 40.242 0 00-5.546 5.546l.773.635.773.634a38.247 38.247 0 015.27-5.27l-.635-.772zM5.598 21.613l-.882-.472a39.75 39.75 0 00-3.003 7.244l.957.29.957.29a37.751 37.751 0 012.852-6.88l-.881-.472zM0 40c0-1.323.064-2.632.19-3.922l.995.097.995.097a38.485 38.485 0 000 7.456l-.995.097-.995.097A40.484 40.484 0 010 40zm2.67 11.325l-.957.29a39.75 39.75 0 003.003 7.244l.882-.472.881-.472a37.748 37.748 0 01-2.852-6.88l-.957.29zM9.85 64.741l-.773.635a40.242 40.242 0 005.546 5.546l.635-.773.634-.773a38.247 38.247 0 01-5.27-5.27l-.772.635zm11.762 9.661l-.472.882a39.76 39.76 0 007.244 3.003l.29-.957.29-.957a37.75 37.75 0 01-6.88-2.852l-.472.881zm14.562 4.413l-.097.995a40.51 40.51 0 007.844 0l-.097-.995-.097-.995a38.463 38.463 0 01-7.456 0l-.097.995zm15.15-1.485l.29.957a39.76 39.76 0 007.244-3.003l-.472-.882-.472-.881a37.748 37.748 0 01-6.88 2.852l.29.957zm13.416-7.181l.635.773a40.242 40.242 0 005.546-5.546l-.773-.635-.773-.635a38.247 38.247 0 01-5.27 5.27l.635.773zm9.661-11.762l.882.472a39.76 39.76 0 003.003-7.244l-.957-.29-.957-.29a37.754 37.754 0 01-2.852 6.88l.881.472z"
									fill="currentColor"
								/>
								<circle cx="68" cy="12" r="12" fill="#7289DA" />
								<path
									d="M73.333 11.408h-4.74V6.667h-1.186v4.74h-4.74v1.186h4.74v4.74h1.185v-4.74h4.741v-1.185z"
									fill="#fff"
								/>
								<path
									d="M40 29c-2.206 0-4 1.794-4 4 0 2.207 1.794 4 4 4s4-1.793 4-4c0-2.205-1.794-4-4-4z"
									fill="currentColor"
								/>
								<path
									d="M48 26.001h-1.93a2.001 2.001 0 01-1.664-.89l-.812-1.22A2.002 2.002 0 0041.93 23h-3.86c-.668 0-1.293.335-1.664.89l-.812 1.22c-.371.557-.996.89-1.664.89H32a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V28a2 2 0 00-2-1.999zM40 39c-3.309 0-6-2.691-6-6 0-3.308 2.691-6 6-6s6 2.692 6 6c0 3.31-2.691 6-6 6zM24.61 52.712V47.72h-2.064v5.016c0 1.056-.468 1.668-1.404 1.668-.924 0-1.404-.624-1.404-1.692V47.72h-2.064v5.004c0 2.316 1.416 3.408 3.444 3.408 2.004 0 3.492-1.116 3.492-3.42zM26.03 56h2.052v-2.748h.528c2.004 0 3.336-.96 3.336-2.832 0-1.8-1.236-2.7-3.252-2.7h-2.664V56zm3.924-5.544c0 .852-.504 1.248-1.416 1.248h-.48v-2.436h.516c.912 0 1.38.396 1.38 1.188zM37.83 56l-.276-1.776H35.01V47.72h-2.052V56h4.872zm8.127-4.152c0-2.556-1.548-4.284-3.948-4.284s-3.96 1.74-3.96 4.308c0 2.556 1.56 4.284 3.936 4.284 2.412 0 3.972-1.752 3.972-4.308zm-2.064.012c0 1.644-.696 2.688-1.896 2.688-1.188 0-1.896-1.044-1.896-2.688 0-1.644.708-2.688 1.896-2.688 1.2 0 1.896 1.044 1.896 2.688zm8.4 4.224l2.076-.336-2.88-8.064h-2.256L46.256 56h2.016l.552-1.716h2.868l.6 1.8zm-2.04-6.288l.924 2.88h-1.86l.936-2.88zm12.265 2.052c0-2.46-1.5-4.128-4.38-4.128h-2.856V56h2.904c2.796 0 4.332-1.692 4.332-4.152zm-2.064.012c0 1.776-.912 2.544-2.376 2.544h-.744v-5.088h.744c1.404 0 2.376.804 2.376 2.544z"
									fill="currentColor"
								/>
							</svg>
							<input
								class="absolute opacity-0 cursor-pointer w-34 h-30 -top-8 -left-4"
								type="file"
								name=""
								id=""
								accept=".png, .jpg, .jpeg, .gif"
							/>
						</div>
					</div>
					<form action="" method="post" class="h-16 mt-auto">
						<div class="h-4 mb-2 text-sm font-semibold">SERVER NAME</div>
						<div class="h-10 p-2 border border-gray-500 rounded">
							<input
								class="w-full text-gray-700 outline-none"
								type="text"
								value="USK's server"
							/>
						</div>
					</form>
					<div class="h-4 mt-2 text-xs">
						By creating a server, you agree to Discord's
						<span class="font-semibold text-indigo-600"
							><a
								href="https://discord.com/guidelines"
								target="_blank"
								rel="noopener noreferrer"
								>Community Guidelines</a
							></span
						>
						.
					</div>
				</div>
				<div class="flex items-center justify-between p-4 bg-gray-200 h-18">
					<button @click="customizeServer = false" class="p-1 btn">Back</button>
					<button
						class="w-24 h-10 font-semibold text-white bg-indigo-600 rounded btn"
					>
						Create
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const customizeServer = ref(false)
import { onClickOutside } from '@vueuse/core'
const container = ref<HTMLElement>()

const emit = defineEmits<{
	(e: 'clickOutside', value: boolean): void
}>()

onClickOutside(container, () => {
	emit('clickOutside', true)
})

const serverTemplates = ref([
	{
		name: 'Gaming',
		imgUrl: 'https://discord.com/assets/b13e5fb6748d48b8d32a0a7b720d3a31.svg',
	},
	{
		name: 'School Club',
		imgUrl: 'https://discord.com/assets/d149a7d17b8c891a36059af8d4108813.svg',
	},
	{
		name: 'Study Group',
		imgUrl: 'https://discord.com/assets/8ea6fb273c261048c7cfb159b0bd286e.svg',
	},
	{
		name: 'Friends',
		imgUrl: 'https://discord.com/assets/6670414aa93c6a4b3b5c7f57ead40533.svg',
	},
	{
		name: 'Artists & Creators',
		imgUrl: 'https://discord.com/assets/5e8985b40ca5104dadceeccaa81c23ca.svg',
	},
	{
		name: 'Local Community',
		imgUrl: 'https://discord.com/assets/a01602a0c0bd856ebed967db1785d5a7.svg',
	},
])
</script>
