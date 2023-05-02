<template>
	<div class="relative flex justify-center w-full h-12 mb-2 group">
		<div class="absolute left-0 flex items-center w-3 h-12">
			<span
				class="absolute w-4/12 bg-green-700 rounded-r-lg group-hover:h-5"
			></span>
		</div>

		<div class="flex justify-start w-12 h-12">
			<nuxt-link class="w-12 h-12" :to="`?id=${server.id}`">
				<div
					class="flex items-center justify-center w-12 h-12 overflow-hidden rounded-full group-hover:rounded-larger"
				>
					<img
						v-if="server.profileImage"
						class="w-12 h-12"
						:src="server.profileImage"
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
		</div>
	</div>
</template>

<script setup lang="ts">
import { Server } from '~/server/api/servers'

type Props = {
	server: Server
}

const { server } = defineProps<Props>()
</script>
