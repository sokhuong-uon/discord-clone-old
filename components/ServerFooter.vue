<template>
	<button @mouseover="isHover =true" @mouseleave="isHover =false" class="w-60 h-13 bg-nightergray">
		<div class="w-full h-full flex items-center justify-start px-2 pb-2px">
			<!--icon avatar and status-->
			<div class="w-8 h-8 mr-2">
				<div class="relative w-8 h-8">
					<img
						class="w-full h-full rounded-full overflow-hidden"
						:src="profile.avatarUrlImg"
						:alt="profile.name" srcset=""
					/>
					<div class="absolute flex justify-center items-center w-3 h-3 bottom-0 right-0 bg-gray-600 rounded-full">
						<div class="absolute w-3 h-3 bg-green-600 rounded-full overflow-hidden">

						</div>
					</div>
				</div>
			</div>

			<!--handle, name, and tage-->
			<div class="w-24 h-13 flex flex-col justify-center">
				<div class="w-full h-4">
					<div class="w-full h-4 text-gray-200 text-sm font-semibold leading-tight flex justify-start items-center">
						<div>{{profile.userName}}</div>
					</div>
				</div>

				<div class="relative w-full h-4 text-teal-500 overflow-hidden">
					<div :class="{'-translate-y-5':isHover}" class="absolute transform duration-200 ease-in">
						<div  class="relative w-full -ml-2px h-4 text-sm flex justify-start items-center">
							<div>{{profile.status.emoji}}</div>
							<div class="w-20 flex justify-start text-xs font-medium mt-2px tracking-normal">
								<p>{{getStatement}}</p>
							</div>
						</div>
						<div class="w-full h-3 flex mt-1">
							<div class="text-xs font-semibold">{{profile.tag}}</div>
						</div>
					</div>
				</div>

			</div>

			<!--group headse mic setting-->
			<div class="w-24 h-12 flex items-center justify-center">
				<button class="w-4/12 h-full">
					<div class="w-8 h-8 flex items-center justify-center">
						<svg class="w-6 h-6 text-gray-500 transform scale-80" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g>
								<path
									stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
									d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
								/>
								<path
									fill="#e53e3e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
									d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z"
								/>
							</g>
						</svg>
					</div>
				</button>
				<button class="w-4/12 h-full">
					<div class="w-8 h-8 flex items-center justify-center">
						<svg class="w-6 h-6 text-gray-500 transform scale-80" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fill="currentColor"
								stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
								d="M12 2.003c-5.514 0-10 4.485-10 10v8a2 2 0 002 2h2a2 2 0 002-2v-3a2 2 0 00-2-2H4v-3c0-4.412 3.589-8 8-8s8 3.588 8 8v3h-2a2 2 0 00-2 2v3a2 2 0 002 2h2a2 2 0 002-2v-8c0-5.515-4.486-10-10-10z"
							/>
						</svg>
					</div>
				</button>
				<button class="w-4/12 h-full">
					<div class="w-8 h-8 flex items-center justify-center">
						<svg class="w-6 h-6 text-gray-500 transform scale-80" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fill="currentColor"
								fill-rule="evenodd" clip-rule="evenodd"
								d="M16.028 5.087a7.973 7.973 0 00-.819-.417l-.412-1.884A1 1 0 0013.82 2h-3.64a1 1 0 00-.977.786L8.791 4.67a7.972 7.972 0 00-1.535.886L5.42 4.97a1 1 0 00-1.17.453L2.43 8.576a1 1 0 00.193 1.24l1.425 1.298a7.97 7.97 0 000 1.772l-1.425 1.299a1 1 0 00-.192 1.239l1.82 3.152a1 1 0 001.17.453l1.836-.585a7.986 7.986 0 001.535.886l.412 1.884a1 1 0 00.977.786h3.64a1 1 0 00.977-.786l.412-1.884a7.986 7.986 0 001.535-.886l1.837.585a1 1 0 001.17-.453l1.82-3.152a1 1 0 00-.193-1.24l-1.425-1.298a7.977 7.977 0 000-1.772l1.425-1.299a1 1 0 00.192-1.239l-1.82-3.152a1 1 0 00-1.17-.453l-1.836.585a7.97 7.97 0 00-.716-.47zM12 16a4 4 0 100-8 4 4 0 000 8z"
							/>
						</svg>
					</div>
				</button>
			</div>
		</div>
	</button>
</template>

<script>
export default {
	props: ['profile'],
	data() {
		return{
			isHover: false,
			mouseOverTransition: '-translate-y-5',
			mouseLeaveTransition: ''
		}
	},
	methods: {
		onMouseOver: function (){
			this.isHover = true
		},
		onMouseLeave: function () {
			this.isHover = false
		}
	},
	computed:{
		getStatement: function(){
			let statement =  this.profile.status.statement
			return statement.length == 11 ? statement : statement.substring(0,9) + '...'
		}
	}
}
</script>

<style>

</style>