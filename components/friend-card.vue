<template>
	<nuxt-link class="w-56 h-12" role="listitem" to="/1">
		<div
			class="flex items-center w-56 h-12 px-2 rounded-md text-graydiscord hover:text-gray-200 hover:bg-gray-800"
		>
			<!--icon avatar and status-->
			<div class="w-8 h-8">
				<div class="relative w-8 h-8">
					<img
						class="w-full h-full overflow-hidden rounded-full"
						:src="profile.avatarUrlImg"
						:alt="profile.name"
						srcset=""
					/>
					<div
						class="absolute bottom-0 right-0 flex items-center justify-center w-3 h-3 bg-gray-700 rounded-full"
					>
						<div
							class="absolute w-3 h-3 overflow-hidden text-green-700 rounded-full"
						></div>
					</div>
				</div>
			</div>
			<div class="flex items-center w-40 ml-3">
				<div class="flex flex-col w-32">
					<div class="flex items-center w-32 h-4 leading-none text-current">
						<span class="h-5 truncate">{{ profile.userName }}</span>
					</div>
					<div class="flex justify-start w-full text-xs text-graydiscord">
						<p class="overflow-hidden truncate">{{ profile.action.name }}</p>
					</div>
				</div>
				<div class="w-5 h-5 ml-auto">
					<svg
						class="transform scale-75"
						aria-hidden="false"
						width="24"
						height="24"
					>
						<path
							fill="currentColor"
							d="M18.4 4L12 10.4 5.6 4 4 5.6l6.4 6.4L4 18.4 5.6 20l6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L20 5.6 18.4 4z"
						/>
					</svg>
				</div>
			</div>
		</div>
	</nuxt-link>
</template>

<script setup lang="ts">
type Props = {
	profile: {
		avatarUrlImg: string
		name: string
		userName: string
		action: {
			name: string
		}
	}
}

defineProps<Props>()
</script>
