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
						<!-- <div v-for="(server, i) in servers" :key="i">
							<RoundedIcon type="server" :param="i" :server="server" />
						</div> -->
					</div>
				</div>
			</div>

			<!-- Bottom section -->
			<div class="h-auto">
				<CreateServerButton />

				<ExploreButton />

				<!-- Divide -->
				<div
					class="relative flex justify-center flex-shrink-0 w-full mb-2 h-2px"
				>
					<div class="absolute w-8 bg-gray-800 rounded-full h-2px"></div>
				</div>

				<DownloadButton />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
type Props = {
	creatingServer: boolean
}
defineProps<Props>()
</script>
