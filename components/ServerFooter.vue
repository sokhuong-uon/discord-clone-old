<template>
<div @mouseover="isHover =true" @mouseleave="isHover =false" class="w-60 h-13 bg-nightergray">
    <div class="w-w-60 h-13 flex items-center justify-start px-2 pb-2px">
        <!--icon avatar and status-->
        <div class="w-8 h-8 mr-2">
            <button class="relative w-8 h-8 focus:outline-none">
                <img class="w-full h-full rounded-full overflow-hidden" :src="profile.avatarUrlImg" :alt="profile.name" srcset="" />
                <div class="absolute flex justify-center items-center w-3 h-3 bottom-0 right-0 bg-gray-600 rounded-full">
                    <div class="absolute w-3 h-3 bg-green-600 rounded-full overflow-hidden">

                    </div>
                </div>
            </button>
        </div>

        <!--handle, name, and tage-->
        <div class="w-22 h-13 flex flex-col justify-center">
            <div class="w-22 h-4 cursor-pointer">
                <div class="w-22 h-4 text-gray-200 text-sm font-semibold leading-tight flex justify-start items-center">
                    <div>{{profile.userName}}</div>
                </div>
            </div>

            <div class="relative w-22 h-4 text-teal-500 cursor-default overflow-hidden">
                <div :class="{'-translate-y-5':isHover}" class="absolute transform duration-200 ease-in">
                    <div class="w-22 h-4 flex items-center justify-start font-medium">

						<span class="w-4 text-sm -ml-2px">{{profile.status.emoji}}</span>

						<span class="w-18 h-4 pl-2px -mb-2px text-xs overflow-hidden truncate">{{profile.status.statement}}</span>

                    </div>
                    <div class="w-22 h-3 flex mt-1">
                        <div class="text-xs font-semibold">{{profile.tag}}</div>
                    </div>
                </div>
            </div>

        </div>

        <!--group headse mic setting-->
        <div class="w-24 h-8 flex items-center justify-center focus:outline-none">
            <button @click="Muted = !Muted" class="w-4/12 h-8 rounded-md hover:bg-gray-800 focus:outline-none">
                <div class="w-8 h-8 flex items-center justify-center">
					<svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
						<svg v-if="Muted" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill="currentColor" d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z"></path>
							<path fill="#e53e3e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z" />
							<path d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z" fill="currentColor"></path>
						</svg>
						<svg v-else aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11c0 1.66-1.33 3-2.99 3-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3s3 1.34 3 3l-.01 6zM12 16.1c2.76 0 5.3-2.1 5.3-5.1H19c0 3.42-2.72 6.24-6 6.72V21h-2v-3.28c-3.28-.49-6-3.31-6-6.72h1.7c0 3 2.54 5.1 5.3 5.1zM12 4c-.8 0-1 .667-1 1v6c0 .333.2 1 1 1s1-.667 1-1V5c0-.333-.2-1-1-1z" fill="currentColor"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11c0 1.66-1.33 3-2.99 3-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3s3 1.34 3 3l-.01 6zM12 16.1c2.76 0 5.3-2.1 5.3-5.1H19c0 3.42-2.72 6.24-6 6.72V22h-2v-4.28c-3.28-.49-6-3.31-6-6.72h1.7c0 3 2.54 5.1 5.3 5.1z" fill="currentColor"/>
						</svg>
					</svg>
                </div>
            </button>
            <button class="w-4/12 h-8 rounded-md hover:bg-gray-800 focus:outline-none">
                <div class="w-8 h-8 flex items-center justify-center">
                    <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
						<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.003c-5.514 0-10 4.485-10 10v8a2 2 0 002 2h2a2 2 0 002-2v-3a2 2 0 00-2-2H4v-3c0-4.412 3.589-8 8-8s8 3.588 8 8v3h-2a2 2 0 00-2 2v3a2 2 0 002 2h2a2 2 0 002-2v-8c0-5.515-4.486-10-10-10z" fill="currentColor"/></svg>
					</svg>
                </div>
            </button>
            <button class="w-4/12 h-8 rounded-md hover:bg-gray-800 focus:outline-none">
                <div class="w-8 h-8 flex items-center justify-center">

					<svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">

						<svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
							<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.738 10H22v4h-2.261a7.952 7.952 0 01-1.174 2.564L20 18l-2 2-1.435-1.436A7.946 7.946 0 0114 19.738V22h-4v-2.262a7.94 7.94 0 01-2.564-1.174L6 20l-2-2 1.436-1.436A7.911 7.911 0 014.262 14H2v-4h2.262a7.9 7.9 0 011.174-2.564L4 6l2-2 1.436 1.436A7.9 7.9 0 0110 4.262V2h4v2.261a7.967 7.967 0 012.565 1.174L18 3.999l2 2-1.436 1.437A7.93 7.93 0 0119.738 10zM12 16a4 4 0 100-8 4 4 0 000 8z"/>
						</svg>
					</svg>
                </div>
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['profile'],
    data() {
        return {
			Muted: false,
            isHover: false,
            mouseOverTransition: '-translate-y-5',
            mouseLeaveTransition: ''
        }
    },
    methods: {
        onMouseOver: function () {
            this.isHover = true
        },
        onMouseLeave: function () {
            this.isHover = false
        }
    },
    computed: {
        getStatement: function () {
            let statement = this.profile.status.statement
            return statement.length == 11 ? statement : statement.substring(0, 9) + '...'
        }
    }
}
</script>

<style>

</style>
