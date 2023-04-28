<template>
	<div class="flex justify-center h-8 my-px w-58 group">
		<div class="relative flex items-center w-2 h-8">
			<span
				:class="{ 'h-2': channel.hasUnReadMessage > 0 }"
				class="absolute w-1 bg-green-700 rounded-r-lg"
			></span>
		</div>

		<div
			:class="{
				'text-gray-600': channel.hasUnReadMessage === 0,
				'text-green-500': channel.hasUnReadMessage > 0,
			}"
			class="flex items-center w-56 px-2 rounded-lg cursor-pointer group-hover:bg-gray-800"
		>
			<div class="w-6 h-6 mr-1 -ml-2px">
				<svg width="24" height="24" class="text-gray-600 transform scale-80">
					<path
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M5.887 21a.5.5 0 01-.493-.587L6 17H2.595a.5.5 0 01-.492-.586l.175-1A.5.5 0 012.77 15h3.58l1.06-6H4.005a.5.5 0 01-.492-.586l.175-1A.5.5 0 014.18 7h3.58l.637-3.587A.5.5 0 018.889 3h.984a.5.5 0 01.493.587L9.76 7h6l.637-3.587A.5.5 0 0116.889 3h.984a.5.5 0 01.493.587L17.76 7h3.405a.5.5 0 01.492.586l-.175 1A.5.5 0 0120.99 9h-3.58l-1.06 6h3.405a.5.5 0 01.492.586l-.175 1a.5.5 0 01-.492.414H16l-.637 3.587a.5.5 0 01-.492.413h-.984a.5.5 0 01-.493-.587L14 17H8l-.637 3.587a.5.5 0 01-.492.413h-.984zM9.41 9l-1.06 6h6l1.06-6h-6z"
					/>
				</svg>
			</div>
			<div class="mb-px text-base font-semibold truncate">
				<p class="truncate">{{ channel.name }}</p>
			</div>

			<div class="invisible ml-auto group-hover:visible">
				<div class="flex items-center ml-auto">
					<svg
						class="mx-1"
						width="18"
						height="18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="#a0aec0"
							d="M8 9a3 3 0 100-6 3 3 0 000 6zm0 2a6 6 0 016 6H2a6 6 0 016-6zm8-4a1 1 0 00-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 002 0v-1h1a1 1 0 100-2h-1V7z"
						/>
					</svg>

					<svg class="mt-1" aria-hidden="false" width="18" height="18">
						<path
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M14 7v2s-1.413 0-1.427.007c-.153.58-.4 1.12-.733 1.6l.9.9-1.247 1.246-.9-.9c-.48.334-1.02.587-1.6.734V14h-2v-1.42c-.58-.147-1.12-.4-1.6-.733l-.9.9L3.247 11.5l.9-.9A4.862 4.862 0 013.413 9H2V7h1.413c.147-.58.4-1.12.734-1.6l-.9-.9L4.5 3.247l.9.9A4.862 4.862 0 017 3.413V2h2v1.413c.58.154 1.12.4 1.6.734l.907-.894L12.753 4.5l-.9.9c.334.473.587 1.02.734 1.6H14zm-6 3a2 2 0 100-4 2 2 0 000 4z"
						/>
					</svg>
				</div>
				<div></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
type Props = {
	channel: {
		name: string
		hasUnReadMessage: number
	}
}

defineProps<Props>()
</script>
