<template>
	<div class="flex h-auto px-8 pb-2 bg-nightgraylighter">
		<div
			class="flex items-start w-full h-full overflow-hidden rounded-lg bg-grayinput"
		>
			<div class="relative flex flex-col items-start justify-start h-12">
				<div class="flex items-center justify-center h-full">
					<button
						class="relative flex items-center justify-center h-12 overflow-hidden text-gray-300 btn w-14"
					>
						<input
							class="absolute h-20 opacity-0 cursor-pointer w-22 -top-8 -left-8"
							type="file"
							name=""
							id=""
							value=""
						/>
						<svg width="24" height="24">
							<path
								class=""
								fill="currentColor"
								d="M12 2a10.01 10.01 0 000 20 10.01 10.01 0 000-20zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
							/>
						</svg>
					</button>
				</div>
			</div>

			<form
				ref="form"
				class="w-full h-auto overflow-hidden rounded-lg px30"
				action=""
				method="post"
			>
				<div
					class="relative flex items-center w-full h-auto rounded-lg bg-grayinput"
				>
					<div class="relative flex items-center w-full my-1">
						<div class="flex items-center w-full">
							<div
								id="msginput"
								class="flex-grow py-2 overflow-x-hidden overflow-y-auto text-gray-400 break-all bg-transparent rounded-lg outline-none messageinput sm:break-words w-12/12"
								contenteditable="true"
							></div>
						</div>
					</div>
				</div>
			</form>

			<div class="flex items-center justify-around h-12 text-gray-400 w-30">
				<div class="flex items-center justify-center w-8 h-8">
					<button class="flex items-center justify-center btn">
						<svg width="24" height="24" class="" aria-hidden="false">
							<path
								fill="currentColor"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M16.886 7.999H20c1.104 0 2 .897 2 2v2H2v-2c0-1.103.897-2 2-2h3.114a5.028 5.028 0 01-1.235-.878 3.002 3.002 0 010-4.242c1.133-1.133 3.107-1.133 4.242-.002 1.637 1.637 1.858 4.718 1.877 5.064a.094.094 0 01-.004.032.107.107 0 00-.004.026h.02a.108.108 0 00-.004-.026c-.003-.01-.005-.02-.004-.031.02-.346.24-3.427 1.877-5.064 1.135-1.133 3.107-1.132 4.242-.001a3.006 3.006 0 010 4.244 5.028 5.028 0 01-1.235.878zM7.293 5.707A1.002 1.002 0 018 4c.268 0 .519.103.707.292.59.59.934 1.648 1.118 2.53-.88-.183-1.946-.529-2.532-1.115zm6.881 1.117c.185-.883.528-1.941 1.119-2.531A.986.986 0 0116 4c.268 0 .519.103.706.291.39.391.391 1.025.001 1.416-.591.591-1.65.935-2.533 1.117zM3 13.999v6c0 1.103.897 2 2 2h6v-8H3zm10 0v8h6c1.104 0 2-.897 2-2v-6h-8z"
							/>
						</svg>
					</button>
				</div>
				<div class="flex items-center justify-center w-8 h-8">
					<button
						@click="$emit('gif', true)"
						class="flex items-center justify-center btn"
					>
						<svg width="24" height="24" class="icon-3D60ES" aria-hidden="false">
							<path
								fill="currentColor"
								d="M2 2a2 2 0 00-2 2v16a2 2 0 002 2h20a2 2 0 002-2V4a2 2 0 00-2-2H2zm7.764 9.448v4.032c-.864.564-1.884.876-3.024.876-2.628 0-4.08-1.728-4.08-4.284 0-2.568 1.572-4.308 4.128-4.308 1.02 0 1.872.24 2.532.612l-.276 1.788c-.624-.396-1.356-.708-2.208-.708-1.428 0-2.124 1.056-2.124 2.604 0 1.56.72 2.652 2.148 2.652.456 0 .78-.096 1.116-.264v-1.476H6.428v-1.524h3.336zm1.784-3.528H13.6v8.28h-2.052V7.92zm8.924 0v1.716h-2.916v1.692h2.304v1.716h-2.304V16.2h-2.04V7.92h4.956z"
							/>
						</svg>
					</button>
				</div>
				<div class="flex items-center justify-center w-8 h-8">
					<button class="flex items-center justify-center btn">
						<div>
							<div
								@click="$emit('emoji', true)"
								class="transform scale-125 hover:scale-150"
							>
								{{ emoji }}
							</div>
						</div>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import emoji from '~/static/data/emoji.json'

type User = {
	userName: string
	avatarUrlImg: string
}
type Chat = {
	value: string
	date: string
}

type Props = {
	users: User[]
	chats: Chat[]
	serverId: string
}

defineProps<Props>()
</script>
