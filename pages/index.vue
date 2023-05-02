<template>
	<NuxtLayout name="default">
		<template v-slot:subSidebar>
			<div class="relative flex flex-col h-screen">
				<div
					class="flex items-center justify-center flex-shrink-0 w-full h-12 px-3 border-b border-gray-900"
				>
					<button
						@click="findConversationOpen = true"
						class="flex items-center justify-start w-full h-auto text-sm rounded-md btn bg-mostnightgray"
					>
						<span class="px-2 my-1 font-medium text-graydiscord"
							>Find or start a conversation</span
						>
					</button>
				</div>

				<div
					class="flex justify-center overflow-auto smallScroleBar w-60 h-174 bg-nightgray"
				>
					<div class="px-1">
						<div class="h-2"></div>

						<div
							class="flex items-center w-56 h-10 px-2 overflow-hidden rounded-md hover:bg-nightgraylighter"
						>
							<div class="flex items-center w-full">
								<div class="flex items-center justify-center w-8 h-8 mr-3">
									<svg
										class="text-gray-200"
										aria-hidden="false"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<g fill="none" fill-rule="evenodd">
											<path
												fill="currentColor"
												fill-rule="nonzero"
												d="M2.5 4v1.5A11.5 11.5 0 008 15.3V20h15v-2c0-2.66-5.33-4-8-4h-.25C10 14 6 10 6 5.5V4H2.5zM15 4a4 4 0 100 8 4 4 0 000-8z"
											/>
											<path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" />
										</g>
									</svg>
								</div>

								<div>
									<div class="w-full font-medium text-gray-200">Friends</div>
								</div>
							</div>
						</div>

						<div
							class="flex items-center w-56 h-10 px-2 overflow-hidden rounded-md hover:bg-nightgraylighter"
						>
							<div class="flex items-center w-full">
								<div class="flex items-center justify-center w-8 h-8 mr-3">
									<svg
										class="text-gray-200"
										aria-hidden="false"
										width="24"
										height="24"
									>
										<path
											fill="currentColor"
											d="M2.99 9.36c0 .42-.36.76-.78.76h-.43A.78.78 0 011 9.36c0-.42.36-.77.78-.77h.43c.42 0 .78.35.78.77zm19.26-.21a7.6 7.6 0 01-3.91 10.24 7.92 7.92 0 01-10.38-3.76 7.3 7.3 0 01-.64-2.44H5.76a.78.78 0 01-.78-.77c0-.42.35-.76.78-.76h2.27c.43 0 .79-.35.79-.77a.78.78 0 00-.79-.77H4.41a.78.78 0 01-.78-.76c0-.42.35-.77.78-.77h5.05c.42 0 .78-.35.78-.76a.78.78 0 00-.78-.77H7.4a1.19 1.19 0 110-2.37h8.03a7.91 7.91 0 016.82 4.46zm-8.98-.77a4.35 4.35 0 00-2.2 5.82A4.51 4.51 0 0017 16.36a4.35 4.35 0 002.2-5.82 4.51 4.51 0 00-5.93-2.16zm3.58 1.47l1.42 2.36c.07.14.07.21 0 .35l-1.42 2.37c-.07.14-.22.14-.29.14H13.8c-.14 0-.21-.07-.28-.14l-1.42-2.37c-.08-.14-.08-.2 0-.35l1.42-2.36c.07-.14.21-.14.28-.14h2.77c.14-.07.22 0 .29.14z"
										/>
									</svg>
								</div>
								<div>
									<div class="w-full font-medium text-gray-200">Nitro</div>
								</div>
							</div>
						</div>

						<h2
							class="flex items-center w-56 pt-5 pb-1 pl-5 pr-3 text-gray-500 hover:text-gray-200"
						>
							<span class="text-xs uppercase">Direct Messages</span>
							<div class="ml-auto hover:bg-green-500">
								<svg
									class="text-gray-200"
									aria-hidden="false"
									width="18"
									height="18"
									viewBox="0 0 18 18"
								>
									<path
										fill="currentColor"
										d="M15 10h-5v5H8v-5H3V8h5V3h2v5h5z"
									/>
								</svg>
							</div>
						</h2>
					</div>
				</div>
			</div>

			<!-- popup -->

			<div
				v-if="findConversationOpen"
				class="absolute flex items-center justify-center w-screen h-screen bg-black bg-opacity-90"
			>
				<FindConversation
					@click-outside="onClickOutsideFindConversationModal"
				/>
			</div>
		</template>
	</NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
	layout: false,
})

const findConversationOpen = ref(false)

const onClickOutsideFindConversationModal = () => {
	findConversationOpen.value = false
}
</script>
