<template>
	<div
		ref="modal"
		class="flex flex-col items-center justify-between min-h-0 px-5 pt-5 w-144 max-h-1/2 rounded-larger bg-nightgray"
	>
		<div
			class="flex flex-col items-start justify-between flex-1 w-full min-h-1/4"
		>
			<input
				id="searchConversation"
				class="flex-shrink-0 px-1 text-xl rounded-lg outline-none w-132 h-18 bg-grayinput"
				type="text"
				placeholder="Where would you like to go?"
			/>
			<div v-if="true" class="flex-1 w-full overflow-y-auto">
				<div class="w-full h-2"></div>
				<SearchResultCard />
				<SearchResultCard />
				<SearchResultCard />
				<SearchResultCard />
				<SearchResultCard />
				<SearchResultCard />
				<SearchResultCard />
			</div>
		</div>
		<div
			class="flex items-center flex-shrink-0 w-full h-8 py-2 text-xs text-gray-200"
		>
			<h1 class="flex items-center h-8 font-semibold text-green-500">
				PROTIP:
			</h1>
			<div class="flex items-center w-full h-8 mx-1 text-graydiscord">
				Start searches with
				<span
					class="flex items-center justify-center w-3 h-4 font-semibold bg-gray-900 rounded mx-2px"
					>@</span
				>
				<span
					class="flex items-center justify-center w-3 h-4 font-semibold bg-gray-900 rounded mx-2px"
					>#</span
				>
				<span
					class="flex items-center justify-center w-3 h-4 font-semibold bg-gray-900 rounded mx-2px"
					>!</span
				>
				<span
					class="flex items-center justify-center w-3 h-4 font-semibold bg-gray-900 rounded mx-2px"
					>*</span
				>
				to narrow reslts.
				<a
					class="ml-2 text-indigo-500 hover:underline"
					target="_blank"
					href="https://support.discord.com/hc/en-us/articles/115000070311"
					>Learn more</a
				>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
const modal = ref<HTMLElement>()

const emit = defineEmits<{
	(e: 'clickOutside', value: boolean): void
}>()

onClickOutside(modal, () => {
	emit('clickOutside', true)
})
</script>
