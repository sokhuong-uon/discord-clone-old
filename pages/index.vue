<template>
<div class="relative select-none w-auto h-screen bg-black flex overflow-hidden">
		<div class="flex">
				<!--Server sidebar-->
				<ServerSideBar :creatingServer="creatingServer" @createServer="creatingServer = $event"/>

				<!--Friends list-->
				<div class="w-60 h-screen bg-nightgray flex flex-col">
						<div class="relative h-screen flex flex-col">
								<div class="w-full h-12 px-3 border-b border-gray-900 flex-shrink-0 flex items-center justify-center">
										<button @click="findConversationOpen = true" class="btn w-full h-auto rounded-md bg-mostnightgray flex items-center justify-start text-sm">
						<span class="px-2 my-1 text-graydiscord font-medium">Find or start a conversation</span>
					</button>
								</div>

								<div class="smallScroleBar w-60 h-174 flex justify-center overflow-auto bg-nightgray">
										<div class="px-1">
												<div class="h-2"></div>
						<div class="w-56 h-10 flex items-center px-2 rounded-md overflow-hidden hover:bg-nightgraylighter">
							<div class="w-full flex items-center">
								<div class="w-8 h-8 flex items-center justify-center mr-3">
									<svg class="text-gray-200" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
										<g fill="none" fill-rule="evenodd">
											<path fill="currentColor" fill-rule="nonzero" d="M2.5 4v1.5A11.5 11.5 0 008 15.3V20h15v-2c0-2.66-5.33-4-8-4h-.25C10 14 6 10 6 5.5V4H2.5zM15 4a4 4 0 100 8 4 4 0 000-8z"/><path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"/>
										</g>
									</svg>
								</div>
								<div>
									<div class="w-full font-medium text-gray-200">
										Friends
									</div>
								</div>
							</div>
						</div>
						<div class="w-56 h-10 flex items-center px-2 rounded-md overflow-hidden hover:bg-nightgraylighter">
							<div class="w-full flex items-center">
								<div class="w-8 h-8 flex items-center justify-center mr-3">
									<svg class="text-gray-200" aria-hidden="false" width="24" height="24"><path fill="currentColor" d="M2.99 9.36c0 .42-.36.76-.78.76h-.43A.78.78 0 011 9.36c0-.42.36-.77.78-.77h.43c.42 0 .78.35.78.77zm19.26-.21a7.6 7.6 0 01-3.91 10.24 7.92 7.92 0 01-10.38-3.76 7.3 7.3 0 01-.64-2.44H5.76a.78.78 0 01-.78-.77c0-.42.35-.76.78-.76h2.27c.43 0 .79-.35.79-.77a.78.78 0 00-.79-.77H4.41a.78.78 0 01-.78-.76c0-.42.35-.77.78-.77h5.05c.42 0 .78-.35.78-.76a.78.78 0 00-.78-.77H7.4a1.19 1.19 0 110-2.37h8.03a7.91 7.91 0 016.82 4.46zm-8.98-.77a4.35 4.35 0 00-2.2 5.82A4.51 4.51 0 0017 16.36a4.35 4.35 0 002.2-5.82 4.51 4.51 0 00-5.93-2.16zm3.58 1.47l1.42 2.36c.07.14.07.21 0 .35l-1.42 2.37c-.07.14-.22.14-.29.14H13.8c-.14 0-.21-.07-.28-.14l-1.42-2.37c-.08-.14-.08-.2 0-.35l1.42-2.36c.07-.14.21-.14.28-.14h2.77c.14-.07.22 0 .29.14z"/></svg>
								</div>
								<div>
									<div class="w-full font-medium text-gray-200">
										Nitro
									</div>
								</div>
							</div>
						</div>
						<h2 class="w-56 pt-5 pb-1 pl-5 pr-3 flex items-center text-gray-500 hover:text-gray-200">
							<span class=" text-xs uppercase">Direct Messages</span>
							<div class="ml-auto hover:bg-green-500">
								<svg class="text-gray-200" aria-hidden="false" width="18" height="18" viewBox="0 0 18 18"><path fill="currentColor" d="M15 10h-5v5H8v-5H3V8h5V3h2v5h5z"/></svg>
							</div>
						</h2>

						<div v-for="(friend, i) in users" :key="i" class="w-56">
							<FriendCard :profile="friend"/>
						</div>

										</div>
								</div>

								<div class="absolute w-full h-13 bottom-0">
										<ServerFooter :profile="users[0]" />
								</div>
						</div>
				</div>
		</div>

	<!-- Main section-->
	<div class="flex-1 flex-shrink min-w-0 bg-nightgraylighter flex flex-col">
		<div class="relative w-full min-w-34 h-12 border-b border-black flex items-center px-2">
			<!--sidebar-->
			<div class=" flex-1 flex-shrink min-w-0 h-8 flex items-center">
				<div class="flex items-center">
					<div class="w-8 h-6 flex items-center justify-center mx-2">
						<svg class="text-gray-200" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
							<g fill="none" fill-rule="evenodd">
								<path fill="currentColor" fill-rule="nonzero" d="M2.5 4v1.5A11.5 11.5 0 008 15.3V20h15v-2c0-2.66-5.33-4-8-4h-.25C10 14 6 10 6 5.5V4H2.5zM15 4a4 4 0 100 8 4 4 0 000-8z"/><path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"/>
							</g>
						</svg>
					</div>
					<div class="flex items-center">
						<div class="w-full mr-2 font-medium text-gray-200 flex items-center">
							Friends
						</div>
					</div>
				</div>
				<div class="w-px flex-shrink-0 h-full mx-2 bg-gray-700"></div>
				<div class="w-auto flex items-center text-gray-200 text-base">
					<button class="btn h-full font-semibold rounded-md mx-2 px-2 py-px flex hover:bg-teal-900">Online</button>
					<button class="btn h-full font-semibold rounded-md mx-2 px-2 py-px flex hover:bg-teal-900">All</button>
					<button class="btn h-full font-semibold rounded-md mx-2 px-2 py-px flex hover:bg-teal-900">Pdnding</button>
					<button class="btn h-full font-semibold rounded-md mx-2 px-2 py-px flex hover:bg-teal-900">Blocked</button>
					<button class="btn w-24 h-full font-semibold rounded-md mx-2 py-px bg-green-600">Add Friend</button>

				</div>
			</div>
			<!--toolbar-->
			<div class=" absolute right-0 w-34 h-8 bg-nightgraylighter flex items-center text-gray-500">
				<div class="w-12 h-6">
					<div class="w-6 h-6 mx-2">
						<button class="btn">
							<svg class="hover:text-gray-400" aria-hidden="false" width="24" height="24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M21 0v3h3v2h-3v3h-2V5h-3V3h3V0h2zM3 20v4l5.33-4H15a2 2 0 002-2V9a2 2 0 00-2-2H2a2 2 0 00-2 2v9c0 1.1.9 2 2 2h1z"/></svg>
						</button>
					</div>
				</div>
				<div class="w-px flex-shrink-0 h-6 mx-2 bg-gray-700"></div>

				<div class="mx-2 flex items-center">
					<button class="btn">
						<svg class="w-6 h-6 hover:text-gray-400" aria-hidden="false" fill="none"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" fill="currentColor"/></svg>
					</button>
				</div>
				<a class="mx-1 px-1" href="https://support.discord.com/hc/en-us" target="_blank">
					<div class="flex items-center">
						<button class="btn">
							<svg class="w-6 h-6 hover:text-gray-400" aria-hidden="false"><path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.513-4.486-10-10-10zm0 16.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm1-4.375V15h-2v-3h1a2 2 0 10-2-2H8c0-2.205 1.795-4 4-4s4 1.795 4 4a4.01 4.01 0 01-3 3.875z"/></svg>
						</button>
					</div>
				</a>
			</div>
		</div>
		<div class="flex-1 flex-shrink min-w-0 flex justify-between">
			<div class="flex-1 min-w-0 overflow-hidden h-full flex items-center justify-between">
				<div class="flex-1  flex-shrink min-w-0 h-full flex items-center justify-center">
					<div class="w-120 h-80 flex-1 flex flex-col items-center justify-center">
						<div class="bg-no-repeat bg-center w-full h-full flex-1" style="background-image: url('https://discordapp.com/assets/a12ff54c4c5c03b41006fd96a4709c29.svg')">
						</div>
						<div class=" w-auto h-12 flex flex-row items-center justify-center text-center text-graydiscord">
							No one's around to play with Wumpus
						</div>
					</div>
				</div>
			</div>
			<div class="hidden w-90 h-full bg-nightgray xl:flex"></div>
		</div>
	</div>

	<!--popup components-->
	<div v-if="findConversationOpen" class="absolute w-screen h-screen bg-black bg-opacity-90 flex justify-center items-center">
		<FindConversation @externalClick="findConversationOpen = $event"/>
	</div>
	<div v-if="creatingServer" class="absolute w-screen h-screen bg-black bg-opacity-90 flex justify-center items-center">
		<CreateServer @externalClick="creatingServer = $event"/>
	</div>
</div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import chats from "~/static/data/chats.json";
import users from "~/static/data/users.json";
export default {
		data() {
				return {
			creatingServer: false,
			findConversationOpen: false,
			showMembers: false,
			searchFocused: false,
			query:'',
			gategoryBtnHover: false,
			users: users,
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
			console.log( [
				'   ___  ___   _____   __   __',
				'  / __\\/\\__\\/ _____\\ / __\\/\\__\\',
				' / /  / /  / /  ___// /  / ___/',
				'/ /  /_/  /  \\__  \\/ /  /  \\',
				'\\/_______/\\/______/\\/__/\\___\\',
			].join( '\n' ) );
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
		}
};
</script>