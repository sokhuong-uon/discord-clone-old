<template>
	<button class="h-12 border-b border-gray-900 btn w-60 bg-nightgray">
		<div class="flex items-center w-full h-full px-4">
			<!--If server if boosted-->
			<div>
				<svg
					class="w-4 h-4 text-gray-600"
					aria-hidden="false"
					viewBox="0 0 16 15.2"
				>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59S0 8.39 0 7.6s1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8S4.78.28 5.53 0 7.2.83 8 .83s1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59S16 6.81 16 7.6z"
					/>
				</svg>
			</div>
			<!--server name-->
			<h1
				class="h-4 ml-1 mr-auto text-sm font-semibold tracking-wide text-white shadow-md w-"
			>
				{{ server.name }}
			</h1>

			<!--menubar-->
			<div class="w-4 h-4 overflow-hidden">
				<svg class="w-4 h-4 text-gray-200">
					<g fill="none" fill-rule="evenodd">
						<path
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							d="M4.5 4.5l9 9M13.5 4.5l-9 9"
						/>
					</g>
				</svg>
			</div>
		</div>
	</button>
</template>

<script setup lang="ts">
type Props = {
	server: {
		name: string
	}
}

defineProps<Props>()
</script>
