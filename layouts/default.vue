<template>
	<div
		class="relative flex w-auto h-screen overflow-hidden bg-black select-none"
	>
		<nav class="flex">
			<!-- Sidebar -->
			<ServerSidebar>
				<template v-slot:createServerButton>
					<CreateServerButton @click="creatingServer = true" />
				</template>

				<template v-slot:exploreButton>
					<ExploreButton />
				</template>

				<template v-slot:downloadButton>
					<DownloadButton />
				</template>
			</ServerSidebar>

			<!-- Sub Sidebar -->
			<section class="flex flex-col h-screen w-60 bg-nightgray">
				<slot name="subSidebar"></slot>
			</section>
		</nav>

		<!-- Main section-->
		<div class="flex flex-col flex-1 flex-shrink min-w-0 bg-nightgraylighter">
			<div
				class="relative flex items-center w-full h-12 px-2 border-b border-black min-w-34"
			>
				<!--sidebar-->
				<div class="flex items-center flex-1 flex-shrink h-8 min-w-0">
					<div class="flex items-center">
						<div class="flex items-center justify-center w-8 h-6 mx-2">
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
						<div class="flex items-center">
							<div
								class="flex items-center w-full mr-2 font-medium text-gray-200"
							>
								Friends
							</div>
						</div>
					</div>
					<div class="flex-shrink-0 w-px h-full mx-2 bg-gray-700"></div>
					<div class="flex items-center w-auto text-base text-gray-200">
						<button
							class="flex h-full px-2 py-px mx-2 font-semibold rounded-md btn hover:bg-teal-900"
						>
							Online
						</button>
						<button
							class="flex h-full px-2 py-px mx-2 font-semibold rounded-md btn hover:bg-teal-900"
						>
							All
						</button>
						<button
							class="flex h-full px-2 py-px mx-2 font-semibold rounded-md btn hover:bg-teal-900"
						>
							Pending
						</button>
						<button
							class="flex h-full px-2 py-px mx-2 font-semibold rounded-md btn hover:bg-teal-900"
						>
							Blocked
						</button>
						<button
							class="w-24 h-full py-px mx-2 font-semibold bg-green-600 rounded-md btn"
						>
							Add Friend
						</button>
					</div>
				</div>

				<!--toolbar-->
				<div
					class="absolute right-0 flex items-center h-8 text-gray-500 w-34 bg-nightgraylighter"
				>
					<div class="w-12 h-6">
						<div class="w-6 h-6 mx-2">
							<button class="btn">
								<svg
									class="hover:text-gray-400"
									aria-hidden="false"
									width="24"
									height="24"
								>
									<path
										fill="currentColor"
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M21 0v3h3v2h-3v3h-2V5h-3V3h3V0h2zM3 20v4l5.33-4H15a2 2 0 002-2V9a2 2 0 00-2-2H2a2 2 0 00-2 2v9c0 1.1.9 2 2 2h1z"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div class="flex-shrink-0 w-px h-6 mx-2 bg-gray-700"></div>

					<div class="flex items-center mx-2">
						<button class="btn">
							<svg
								class="w-6 h-6 hover:text-gray-400"
								aria-hidden="false"
								fill="none"
							>
								<path
									d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"
									fill="currentColor"
								/>
							</svg>
						</button>
					</div>
					<a
						class="px-1 mx-1"
						href="https://support.discord.com/hc/en-us"
						target="_blank"
					>
						<div class="flex items-center">
							<button class="btn">
								<svg class="w-6 h-6 hover:text-gray-400" aria-hidden="false">
									<path
										fill="currentColor"
										d="M12 2C6.486 2 2 6.487 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.513-4.486-10-10-10zm0 16.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm1-4.375V15h-2v-3h1a2 2 0 10-2-2H8c0-2.205 1.795-4 4-4s4 1.795 4 4a4.01 4.01 0 01-3 3.875z"
									/>
								</svg>
							</button>
						</div>
					</a>
				</div>
			</div>

			<main class="flex justify-between flex-1 flex-shrink min-w-0">
				<div
					class="flex items-center justify-between flex-1 h-full min-w-0 overflow-hidden"
				>
					<div
						class="flex items-center justify-center flex-1 flex-shrink h-full min-w-0"
					>
						<div
							class="flex flex-col items-center justify-center flex-1 w-120 h-80"
						>
							<div
								class="flex-1 w-full h-full bg-center bg-no-repeat"
								style="
									background-image: url('https://discordapp.com/assets/a12ff54c4c5c03b41006fd96a4709c29.svg');
								"
							></div>
							<div
								class="flex flex-row items-center justify-center w-auto h-12 text-center text-graydiscord"
							>
								No one's around to play with Wumpus
							</div>
						</div>
					</div>
				</div>
				<div class="hidden h-full w-90 bg-nightgray xl:flex"></div>
			</main>
		</div>

		<!--popup -->
		<div
			v-if="creatingServer"
			class="absolute flex items-center justify-center w-screen h-screen bg-black bg-opacity-90"
		>
			<CreateServer @click-outside="onClickOutsideServer" />
		</div>
	</div>
</template>

<script setup lang="ts">
const creatingServer = ref(false)

const onClickOutsideServer = () => {
	creatingServer.value = false
}
</script>
