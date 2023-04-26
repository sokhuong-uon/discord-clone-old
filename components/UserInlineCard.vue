<template>
	<button class="w-56 h-10 btn">
		<div
			class="flex items-center w-56 h-10 px-2 py-1 rounded-md text-graydiscord hover:text-gray-200 hover:bg-gray-800"
		>
			<!--icon avatar and status-->
			<div class="w-8 h-8 mr-3">
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
			<div class="flex flex-col items-center h-auto w-41">
				<div class="flex items-center h-4 leading-none text-current w-41">
					<span class="h-5">{{ profile.userName }}</span>
				</div>
				<div class="flex justify-start h-auto text-xs w-41 text-graydiscord">
					<p class="overflow-hidden truncate">{{ profile.action.name }}</p>
				</div>
			</div>
		</div>
	</button>
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
