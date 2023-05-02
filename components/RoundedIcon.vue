<template>
	<div class="relative flex justify-center w-full h-12 mb-2">
		<div
			v-if="type === 'server'"
			class="absolute left-0 flex items-center w-3 h-12"
		>
			<span
				:class="{
					'h-0': server.hasUnReadMessage === 0,
					'h-2': server.hasUnReadMessage > 0,
					'h-5': isHover,
					'h-full': getName == 'Nuxt.js',
				}"
				class="absolute w-4/12 bg-green-700 rounded-r-lg"
			></span>
		</div>

		<div
			v-if="type === 'button'"
			class="absolute left-0 flex items-center w-3 h-12"
		>
			<span
				:class="{ 'h-5': isHover }"
				class="absolute w-4/12 h-0 bg-green-700 rounded-r-lg"
			></span>
		</div>

		<div
			@mouseover="isHover = true"
			@mouseleave="isHover = false"
			class="flex justify-start w-12 h-12"
		>
			<nuxt-link v-if="type === 'server'" class="w-12 h-12" :to="`/${param}`">
				<div
					:class="{ 'rounded-larger': isHover }"
					class="flex items-center justify-center w-12 h-12 overflow-hidden rounded-full"
				>
					<img
						v-if="server.imageUrl"
						class="w-12 h-12"
						:src="server.gifUrl && isHover ? server.gifUrl : server.imageUrl"
						:alt="server.name"
						srcset=""
					/>
					<div
						v-else
						class="flex items-center justify-center w-12 h-12 text-gray-400 bg-gray-800"
					>
						{{ server.name.substring(0, 4) }}
					</div>
				</div>
			</nuxt-link>

			<button v-if="type === 'button'" class="w-12 h-12 btn">
				<div
					:class="{ 'bg-green-600 rounded-larger': isHover }"
					class="flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-800 rounded-full"
				>
					<svg class="w-6 h-6 text-green-600" viewBox="0 0 24 24">
						<path
							:fill="isHover ? '#F7FAFC' : 'currentColor'"
							fill-rule="evenodd"
							clip-rule="evenodd"
							:d="button.svgPath"
						/>
					</svg>
				</div>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
type Props = {
	type: string
	server: {
		name: string
		imageUrl: string
		gifUrl: string
		hasUnReadMessage: number
	}
	param: string
	button: {
		name: string
		svgPath: string
	}
}

const { server, button } = defineProps<Props>()
const isHover = ref(false)

const getName = computed(() => {
	return server ? server.name : button.name
})
</script>
