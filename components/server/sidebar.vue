<template>
	<div class="overflow-hidden w-18 bg-mostnightgray">
		<div class="flex flex-col h-full pt-3 overflow-auto hidescrollbar w-18">
			<!--Direct message dm-->
			<div class="w-full h-12 mb-2">
				<DiscordButton />
			</div>

			<div class="relative flex justify-center flex-shrink-0 w-full mb-2 h-2px">
				<div class="absolute w-8 bg-gray-800 rounded-full h-2px"></div>
			</div>

			<!--servers-->
			<div class="flex justify-center w-full h-auto">
				<div class="w-full">
					<div class="w-full">
						<div v-for="server in servers" :key="server.id">
							<ServerButton :server="server" />
						</div>
					</div>
				</div>
			</div>

			<!-- Bottom section -->
			<div class="h-auto">
				<slot name="createServerButton"></slot>
				<slot name="exploreButton"></slot>

				<!-- Divide -->
				<div
					class="relative flex justify-center flex-shrink-0 w-full mb-2 h-2px"
				>
					<div class="absolute w-8 bg-gray-800 rounded-full h-2px"></div>
				</div>

				<slot name="downloadButton"></slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const servers = await $fetch('/api/servers')
console.log(servers)
</script>
