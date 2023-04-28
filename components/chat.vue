<template>
	<div class="relative flex flex-1 min-w-0 pr-12 mt-4 hover:bg-nightgray group">
		<div
			class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-3 select-none"
		>
			<div class="w-10 h-10 overflow-hidden rounded-full">
				<img :src="chat.author.avatarUrl" alt="" srcset="" />
			</div>
		</div>
		<div class="flex-shrink inline-block w-full h-auto min-w-0">
			<div class="w-full h-8">
				<span class="text-white">{{ chat.author.userName }}</span>
				<span class="text-xs text-gray-600">{{ chat.date }}</span>
			</div>
			<div
				:id="id"
				@keydown.enter.exact="onSubmit"
				@keydown.esc="onCancelEditing"
				:contenteditable="editing"
				:class="{
					'bg-grayinput pr-4 pl-2 messageinput rounded-lg overflow-x-hidden overflow-y-auto':
						editing,
				}"
				class="text-base break-all outline-none text-chattext md:break-words"
			>
				<!--message-->
				{{ compiledMarkdown }}
			</div>

			<div v-if="editing" class="text-sm text-gray-600">
				escape to
				<a @click="onCancelEditing" role="button" class="text-indigo-600"
					>cancel</a
				>
				• enter to
				<a @click="onSubmit" role="button" class="text-indigo-600">save</a>
			</div>
		</div>

		<div class="absolute top-0 right-0 invisible group-hover:visible">
			<div class="flex items-center text-gray-400 rounded-md bg-nightgray">
				<button
					class="flex items-center justify-center w-8 h-8 btn hover:bg-nightgraylighter"
				>
					<svg class="" aria-hidden="false" width="24" height="24">
						<path
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M12.251 2.003A10.232 10.232 0 0012 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10a9.99 9.99 0 00-.003-.251 8 8 0 01-9.746-9.746zM10 8a2 2 0 10-4.001.001A2 2 0 0010 8zm2 11c3.14 0 6-2.383 6-5v-1H6v1c0 2.617 2.86 5 6 5z"
						/>
						<path d="M21 3V0h-2v3h-3v2h3v3h2V5h3V3h-3z" fill="currentColor" />
					</svg>
				</button>

				<button
					@click="onEditing"
					class="flex items-center justify-center w-8 h-8 btn hover:bg-nightgraylighter"
				>
					<svg
						class=""
						aria-hidden="false"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M19.293 9.83l.648-.647a3.628 3.628 0 000-5.124 3.628 3.628 0 00-5.124 0l-.647.648 5.123 5.123zm-6.397-3.853L5.185 13.69l5.124 5.122 7.711-7.714-5.124-5.122zM4.12 20.97l4.64-1.159-4.572-4.572-1.16 4.64a.9.9 0 001.092 1.091z"
							fill="currentColor"
						/>
					</svg>
				</button>

				<button
					class="flex items-center justify-center w-8 h-8 btn hover:bg-nightgraylighter"
				>
					<svg class="" aria-hidden="false" width="24" height="24">
						<path
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M7 12.001a2 2 0 10-4 0 2 2 0 004 0zm7 0a2 2 0 10-4 0 2 2 0 004 0zm5-2a2 2 0 110 4 2 2 0 010-4z"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { marked } from 'marked'

type Chat = {
	author: {
		userName: string
		avatarUrl: string
	}
	date: string
	value: string
}

type Props = {
	chat: Chat
	id: string
}

const { chat, id } = defineProps<Props>()

const editing = ref(false)

const md = ref()

const onSubmit = () => {
	editing.value = false
	md.value = textArea.value
	chat.value = md.value
}

const onCancelEditing = () => {
	editing.value = false
	textArea.value = chat.value
}

const onEditing = () => {
	editing.value = true
	textArea.value = md.value
}

const textArea = ref<HTMLTextAreaElement>()
onMounted(() => {
	textArea.value = document.getElementById(`${id}`) as HTMLTextAreaElement
})

const compiledMarkdown = marked(md.value || '')
</script>
