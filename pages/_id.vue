<template>
<div class="relative w-screen h-screen select-none bg-black flex overflow-hidden">
    <div class="flex">
        <!--Server sidebar-->
        <ServerSideBar :creatingServer="creatingServer" @createServer="creatingServer = $event"/>


        <!--Server channels-->
        <div class="w-60 flex-1 bg-nightgray flex flex-col">
			<div class="w-full h-12">
				<ServerHeader :server="servers[parseInt($route.params.id)]" />
			</div>

			<div class="smallScroleBar w-60 h-auto bg-nightgray pb-6 flex-1 flex flex-col overflow-y-auto">
				<div class="pr-1">
					<div class="h-4"></div>
					<div class="flex flex-col w-full">
						<div v-for="(channel,i) in servers[parseInt($route.params.id)].channels" :key="i">
							<ChannelCard :channel="channel" />
						</div>
					</div>

					<div draggable="true" v-for="(category, i) in servers[parseInt($route.params.id)].categories" :key="i" class="flex flex-col w-full">
						<div class="w-full pt-4">
							<button @mouseover="gategoryBtnHover=true" @mouseleave="gategoryBtnHover= false" class="btn w-58 h-6 rounded-lg text-gray-600 flex items-center">
								<div class="w-4 h-4 flex justify-center items-center">
									<svg :class="{'-rotate-90':gategoryBtnHover}" class="w-2 h-2 transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </svg>
								</div>
								<div class="uppercase text-xs">{{category.name}}</div>
								<div class="w-6 h-6 ml-auto">
									<svg
										class="" aria-hidden="false" width="18" height="18">
										<path fill="#a0aec0" d="M15 10h-5v5H8v-5H3V8h5V3h2v5h5z"/>
									</svg>
								</div>
							</button>
							<div class="flex flex-col w-full">
								<div v-for="(channel,j) in category.channels" :key="j">
									<ChannelCard :channel="channel" />
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div class="w-full h-13 bottom-0">
				<ServerFooter :profile="users[0]" />
			</div>
        </div>
    </div>

    <!--Main section-->
    <div class="mainsection min-w-0 flex-1 bg-green-400 flex flex-col overflow-hidden">
        <!--Main section nav, sidebar-->

		<div class="relative w-auto h-12 border-b px-2 flex-shrink-0 flex items-center border-gray-900  bg-nightgraylighter">
			<div class="w-full h-6 flex items-center overflow-hidden">
				<div class="w-6 h-6 mx-2 text-gray-600">
					<svg width="24" height="24" class=""><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.887 21a.5.5 0 01-.493-.587L6 17H2.595a.5.5 0 01-.492-.586l.175-1A.5.5 0 012.77 15h3.58l1.06-6H4.005a.5.5 0 01-.492-.586l.175-1A.5.5 0 014.18 7h3.58l.637-3.587A.5.5 0 018.889 3h.984a.5.5 0 01.493.587L9.76 7h6l.637-3.587A.5.5 0 0116.889 3h.984a.5.5 0 01.493.587L17.76 7h3.405a.5.5 0 01.492.586l-.175 1A.5.5 0 0120.99 9h-3.58l-1.06 6h3.405a.5.5 0 01.492.586l-.175 1a.5.5 0 01-.492.414H16l-.637 3.587a.5.5 0 01-.492.413h-.984a.5.5 0 01-.493-.587L14 17H8l-.637 3.587a.5.5 0 01-.492.413h-.984zM9.41 9l-1.06 6h6l1.06-6h-6z"/></svg>
				</div>
				<h2 class="w-auto h-6 mr-2 text-gray-300 font-bold tracking-tighter">apollo</h2>
				<div class="w-px h-6 bg-gray-700 mx-2"></div>
				<div class="w-auto h-4 ml-2 text-sm leading-none font-semibold tracking-tighter text-gray-500 truncate">Help related to Apollo in your Nuxt project. https://github.com/nuxt-community/apollo-module</div>
			</div>

			<div class="w-auto h-6 bg-nightgraylighter text-gray-500 flex-shrink-0 flex items-center justify-between overflow-hidden">
				<div class="mx-2 flex items-center">
					<button class="btn">
						<svg class="w-6 h-6" aria-hidden="false" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M18 9v5a3 3 0 003 3v1H3v-1a3 3 0 003-3V9a6 6 0 1112 0zm-6 12c-1.476 0-2.752-.81-3.445-2h6.89c-.693 1.19-1.97 2-3.445 2z"/></svg>
					</button>
				</div>
				<div class="mx-2 flex items-center">
					<button class="btn">
						<svg class="w-6 h-6" aria-hidden="false"><path fill="currentColor" d="M22 12l-9.899-9.899-1.415 1.413 1.415 1.415-4.95 4.949v.002L5.736 8.465 4.322 9.88l4.243 4.242-5.657 5.656 1.414 1.414 5.657-5.656 4.243 4.242 1.414-1.414-1.414-1.414L19.171 12h.001l1.414 1.414L22 12z"/></svg>
					</button>
				</div>

				<div class="mx-2 flex items-center">
					<button @click="showMembers = !showMembers" class="btn">
						<svg class="w-6 h-6" aria-hidden="false"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 8.006c0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4zm-12 11c0-3.533 3.29-6 8-6 4.711 0 8 2.467 8 6v1H2v-1z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 8.006c0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4zm-12 11c0-3.533 3.29-6 8-6 4.711 0 8 2.467 8 6v1H2v-1z"/><path fill="currentColor" d="M20 20.006h2v-1c0-2.563-1.73-4.565-4.479-5.47 1.541 1.377 2.48 3.27 2.48 5.47v1zM14.883 11.908A4.007 4.007 0 0018 8.006a4.006 4.006 0 00-3.503-3.97A5.977 5.977 0 0116 8.007a5.974 5.974 0 01-1.362 3.804c.082.032.164.064.245.098z"/></svg>
					</button>
				</div>


				<div class="relative mx-2 px-1 w-auto h-6 rounded-sm bg-gray-900 flex items-center text-sm">
					<div class="w-full h-6 flex items-center">
						<input
							:class="{'w-52':searchFocused || query}"
							class="w-28 h-5 font-semibold outline-none bg-transparent transform duration-300"
							v-model="query"
							@focus="searchFocuse"
							@focusout="searchFocused = false"

							type="text" placeholder="Search"
						/>
					</div>
						<svg v-if="query.length" @click="deleteQuery" class="w-6 h-6 cursor-pointer transform scale-75" aria-hidden="false"><path fill="currentColor" d="M18.4 4L12 10.4 5.6 4 4 5.6l6.4 6.4L4 18.4 5.6 20l6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L20 5.6 18.4 4z"/></svg>
						<svg v-else class="w-6 h-6 transform scale-75" aria-hidden="false"><path fill="currentColor" d="M21.707 20.293L16.314 14.9A7.928 7.928 0 0018 10a7.945 7.945 0 00-2.344-5.656A7.94 7.94 0 0010 2a7.94 7.94 0 00-5.656 2.344A7.945 7.945 0 002 10c0 2.137.833 4.146 2.344 5.656A7.94 7.94 0 0010 18a7.922 7.922 0 004.9-1.686l5.393 5.392 1.414-1.413zM10 16a5.959 5.959 0 01-4.242-1.757A5.958 5.958 0 014 10c0-1.602.624-3.109 1.758-4.242A5.956 5.956 0 0110 4c1.603 0 3.109.624 4.242 1.758A5.957 5.957 0 0116 10c0 1.603-.624 3.11-1.758 4.243A5.959 5.959 0 0110 16z"/></svg>

				</div>

				<div class="mx-2 flex items-center">
					<button class="btn">
						<svg class="w-6 h-6" aria-hidden="false" fill="none"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" fill="currentColor"/></svg>
					</button>
				</div>
				<div class="mx-2 flex items-center">
					<button class="btn">
						<svg class="w-6 h-6" aria-hidden="false"><path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.513-4.486-10-10-10zm0 16.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm1-4.375V15h-2v-3h1a2 2 0 10-2-2H8c0-2.205 1.795-4 4-4s4 1.795 4 4a4.01 4.01 0 01-3 3.875z"/></svg>
					</button>
				</div>

			</div>
		</div>



		<div class="flex-1 flex min-h-0">
			<!--chat section-->
			<div class="flex-1 flex flex-col select-text">
				<div class="w-full h-1 -mt-1"></div>

				<div  class="relative flex-1 flex flex-col min-h-0 min-w-0 break-normal bg-nightgraylighter font-sans text-lg overflow-hidden">

					<div id="chatspace" class="flex-1 overflow-auto pb-5">
						<div  class="felx-1 flex flex-col">
							<Chat
								v-for="(chat, i) in chats[parseInt($route.params.id)]" :key="i"
								:chat="chat" :id="i"
							/>
						</div>
					</div>

					<!--Input form-->
					<InputForm :users="users" :chats="chats" :serverId="parseInt($route.params.id)" @emoji="choosingEmojiOrGif = $event" @gif="choosingEmojiOrGif = $event"/>

					<!--Choose Emoji or Gif Card Popup-->
					<GifEmoji v-if="choosingEmojiOrGif" @externalClick="choosingEmojiOrGif = !$event"/>
				</div>
			</div>

			<!--show members section-->
			<div :class="{'w-60':showMembers, 'w-0': !showMembers}" class="h-auto">
				<MembersBar :users="users"/>
			</div>
		</div>
    </div>

	<!--popup components-->
	<div v-if="creatingServer" class="absolute w-screen h-screen bg-black bg-opacity-90 flex justify-center items-center">
		<CreateServer @externalClick="creatingServer = $event"/>
	</div>
</div>
</template>

<script>
import axios from 'axios';
import chats from "~/static/data/chats.json";
import users from "~/static/data/users.json";
import servers from "~/static/data/servers.json";
export default {

    data() {
        return {
			choosingEmojiOrGif: false,
			choosingGif: false,
			choosingEmoji: false,
			betweenEmojiGif: false,
			creatingServer: false,
			showMembers: true,
			searchFocused: false,
			query:'',
			gategoryBtnHover: false,
			chats: chats,
			message:'',
			users: users,
			servers: servers,
        };
    },

	// asyncData({ params, error }) {
	// 	return axios
	// 	.get(`https://raw.githubusercontent.com/SOKHUONG/discord-clone/master/static/data/app.json`)
	// 	.then(res => {
	// 		return {
	// 			servers: res.data.servers,
	// 			users: res.data.users
	// 		}
	// 	})
	// 	.catch(e => {
	// 		error({ statusCode: 404, message: 'Post not found' })
	// 	})
	// },

	methods: {
		deleteQuery(){
			this.query = '';
		},
		searchFocuse(){
			this.searchFocused = true;
		},
		Log(){
			const link = 'https://github.com/SOKHUONG/discord-clone';
        	console.log("%c💝 I am really appreciate that you interested in my code 😊", "background: transparent; color: #ed0e90; font-size: 30px; font-weight: 600; font-family: Lobster, serif; height: 200px");
			console.log(`%c Source code of this project on github: %c${link}`,"font-family: Lobster, serif;color: #0eed98; font-size: 25px","font-size: 15px;");
		}
	},
    mounted() {
		if(!sessionStorage.getItem('logged')){
			// _.once(this.Log) will return a funtion, so just call it directly.
			_.once(this.Log)();
			sessionStorage.setItem('logged', true);
		}

		window.onunload = function () {
			sessionStorage.removeItem('logged');
    	}
    },
	computed:{
		specificChat () {
			return this.chats[parseInt(this.$route.params.id)]
        }
	},
	watch: {
		specificChat() {
			let chatSpace = document.getElementById('chatspace');
			chatSpace.scrollTop = chatSpace.scrollHeight;
        }
	}
};
</script>