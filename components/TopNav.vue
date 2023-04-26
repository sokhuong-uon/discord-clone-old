<template>
	<div
		class="relative flex items-center w-auto h-12 px-2 border-b border-gray-900 bg-nightgraylighter"
	>
		<div class="flex items-center w-full h-6 overflow-hidden">
			<div class="w-6 h-6 mx-2 text-gray-600">
				<svg width="24" height="24" class="">
					<path
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M5.887 21a.5.5 0 01-.493-.587L6 17H2.595a.5.5 0 01-.492-.586l.175-1A.5.5 0 012.77 15h3.58l1.06-6H4.005a.5.5 0 01-.492-.586l.175-1A.5.5 0 014.18 7h3.58l.637-3.587A.5.5 0 018.889 3h.984a.5.5 0 01.493.587L9.76 7h6l.637-3.587A.5.5 0 0116.889 3h.984a.5.5 0 01.493.587L17.76 7h3.405a.5.5 0 01.492.586l-.175 1A.5.5 0 0120.99 9h-3.58l-1.06 6h3.405a.5.5 0 01.492.586l-.175 1a.5.5 0 01-.492.414H16l-.637 3.587a.5.5 0 01-.492.413h-.984a.5.5 0 01-.493-.587L14 17H8l-.637 3.587a.5.5 0 01-.492.413h-.984zM9.41 9l-1.06 6h6l1.06-6h-6z"
					/>
				</svg>
			</div>
			<h2 class="w-auto h-6 mr-2 font-bold tracking-tighter text-gray-300">
				apollo
			</h2>
			<div class="w-px h-6 mx-2 bg-gray-700"></div>
			<div
				class="w-auto h-4 ml-2 text-sm font-semibold leading-none tracking-tighter text-gray-500 truncate"
			>
				Help related to Apollo in your Nuxt project.
				https://github.com/nuxt-community/apollo-module
			</div>
		</div>

		<div
			class="z-10 flex items-center justify-between flex-shrink-0 w-auto h-6 overflow-hidden text-gray-500 bg-nightgraylighter"
		>
			<div class="flex items-center mx-2">
				<button class="btn">
					<svg class="w-6 h-6" aria-hidden="false" fill="none">
						<path
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M18 9v5a3 3 0 003 3v1H3v-1a3 3 0 003-3V9a6 6 0 1112 0zm-6 12c-1.476 0-2.752-.81-3.445-2h6.89c-.693 1.19-1.97 2-3.445 2z"
						/>
					</svg>
				</button>
			</div>
			<div class="flex items-center mx-2">
				<button class="btn">
					<svg class="w-6 h-6" aria-hidden="false">
						<path
							fill="currentColor"
							d="M22 12l-9.899-9.899-1.415 1.413 1.415 1.415-4.95 4.949v.002L5.736 8.465 4.322 9.88l4.243 4.242-5.657 5.656 1.414 1.414 5.657-5.656 4.243 4.242 1.414-1.414-1.414-1.414L19.171 12h.001l1.414 1.414L22 12z"
						/>
					</svg>
				</button>
			</div>

			<div class="flex items-center mx-2">
				<button class="btn">
					<svg class="w-6 h-6" aria-hidden="false">
						<path
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M14 8.006c0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4zm-12 11c0-3.533 3.29-6 8-6 4.711 0 8 2.467 8 6v1H2v-1z"
						/>
						<path
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M14 8.006c0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4zm-12 11c0-3.533 3.29-6 8-6 4.711 0 8 2.467 8 6v1H2v-1z"
						/>
						<path
							fill="currentColor"
							d="M20 20.006h2v-1c0-2.563-1.73-4.565-4.479-5.47 1.541 1.377 2.48 3.27 2.48 5.47v1zM14.883 11.908A4.007 4.007 0 0018 8.006a4.006 4.006 0 00-3.503-3.97A5.977 5.977 0 0116 8.007a5.974 5.974 0 01-1.362 3.804c.082.032.164.064.245.098z"
						/>
					</svg>
				</button>
			</div>

			<div
				class="relative flex items-center w-auto h-6 px-1 mx-2 text-sm bg-gray-900 rounded-sm"
			>
				<div class="flex items-center w-full h-6">
					<input
						:class="{ 'w-52': searchFocused || query }"
						class="h-5 font-semibold duration-300 transform bg-transparent outline-none w-28"
						v-model="query"
						@focus="searchFocuse()"
						@focusout="searchFocused = false"
						type="text"
						placeholder="Search"
					/>
				</div>
				<svg
					v-if="query.length"
					@click="deleteQuery()"
					class="w-6 h-6 transform scale-75 cursor-pointer"
					aria-hidden="false"
				>
					<path
						fill="currentColor"
						d="M18.4 4L12 10.4 5.6 4 4 5.6l6.4 6.4L4 18.4 5.6 20l6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L20 5.6 18.4 4z"
					/>
				</svg>
				<svg v-else class="w-6 h-6 transform scale-75" aria-hidden="false">
					<path
						fill="currentColor"
						d="M21.707 20.293L16.314 14.9A7.928 7.928 0 0018 10a7.945 7.945 0 00-2.344-5.656A7.94 7.94 0 0010 2a7.94 7.94 0 00-5.656 2.344A7.945 7.945 0 002 10c0 2.137.833 4.146 2.344 5.656A7.94 7.94 0 0010 18a7.922 7.922 0 004.9-1.686l5.393 5.392 1.414-1.413zM10 16a5.959 5.959 0 01-4.242-1.757A5.958 5.958 0 014 10c0-1.602.624-3.109 1.758-4.242A5.956 5.956 0 0110 4c1.603 0 3.109.624 4.242 1.758A5.957 5.957 0 0116 10c0 1.603-.624 3.11-1.758 4.243A5.959 5.959 0 0110 16z"
					/>
				</svg>
			</div>

			<div class="flex items-center mx-2">
				<button class="btn">
					<svg class="w-6 h-6" aria-hidden="false" fill="none">
						<path
							d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"
							fill="currentColor"
						/>
					</svg>
				</button>
			</div>
			<div class="flex items-center mx-2">
				<button class="btn">
					<svg class="w-6 h-6" aria-hidden="false">
						<path
							fill="currentColor"
							d="M12 2C6.486 2 2 6.487 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.513-4.486-10-10-10zm0 16.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm1-4.375V15h-2v-3h1a2 2 0 10-2-2H8c0-2.205 1.795-4 4-4s4 1.795 4 4a4.01 4.01 0 01-3 3.875z"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const query = ref('')
const searchFocused = ref(false)

const deleteQuery = () => {
	query.value = ''
}
const searchFocuse = () => {
	searchFocused.value = true
}
</script>
