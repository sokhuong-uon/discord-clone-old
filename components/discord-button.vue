<template>
	<div class="relative flex justify-center w-full h-12 mb-2">
		<div class="absolute left-0 flex items-center w-3 h-12">
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
			<nuxt-link class="w-12 h-12 btn" to="/">
				<div
					:class="{ 'bg-blue-700 rounded-larger': isHover }"
					class="flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-800 rounded-full"
				>
					<svg
						class="w-12 h-6 mx-auto mt-1 mr-1 text-green-600 transform"
						viewBox="0 0 24 24"
					>
						<path
							fill="#F7FAFC"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M20.664 20s-.863-1.024-1.582-1.929c3.14-.88 4.34-2.833 4.34-2.833a13.75 13.75 0 01-2.758 1.405c-1.198.5-2.349.833-3.476 1.024-2.301.428-4.41.31-6.208-.024a20.231 20.231 0 01-3.525-1.024 14.1 14.1 0 01-1.75-.81c-.071-.047-.143-.07-.215-.118-.048-.024-.072-.048-.096-.072a8.414 8.414 0 01-.671-.405s1.15 1.905 4.195 2.81C8.198 18.929 7.312 20 7.312 20 2.014 19.833 0 16.381 0 16.381c0-7.667 3.452-13.88 3.452-13.88C6.904-.072 10.188 0 10.188 0l.24.285C6.113 1.524 4.123 3.405 4.123 3.405s.528-.286 1.415-.69c2.565-1.12 4.602-1.43 5.441-1.5.144-.024.264-.048.408-.048a20.422 20.422 0 014.843-.048c2.277.262 4.722.929 7.215 2.286 0 0-1.894-1.786-5.969-3.024l.336-.38s3.284-.072 6.736 2.5c0 0 3.452 6.213 3.452 13.88 0 0-2.038 3.452-7.336 3.619zM9.517 8.881c-1.366 0-2.445 1.19-2.445 2.643 0 1.452 1.103 2.643 2.445 2.643 1.367 0 2.445-1.19 2.445-2.643.024-1.452-1.078-2.643-2.445-2.643zm8.75 0c-1.366 0-2.445 1.19-2.445 2.643 0 1.452 1.103 2.643 2.445 2.643 1.367 0 2.445-1.19 2.445-2.643 0-1.452-1.078-2.643-2.445-2.643z"
						/>
					</svg>
				</div>
			</nuxt-link>
		</div>
	</div>
</template>
<script setup lang="ts">
const isHover = ref(false)
</script>
