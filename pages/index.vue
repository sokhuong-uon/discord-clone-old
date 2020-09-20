<template>
<div class="relative w-auto h-screen bg-black flex overflow-hidden">
    <div class="flex">
        <!--Server sidebar-->
        <div class="w-18 bg-mostnightgray overflow-hidden">
            <div class="hidescrollbar w-18 pt-3 h-full flex flex-col overflow-auto">
                <!--Direct message dm-->
                <div class="w-full h-12 mb-2">
                    <DiscordButton :button="buttons[0]" />
                </div>

                <div class="relative flex-shrink-0 flex justify-center h-2px w-full mb-2">
                    <div class="absolute h-2px w-8 bg-gray-800 rounded-full"></div>
                </div>

                <!--servers-->
                <div class="w-full h-auto flex justify-center">
                    <div class="w-full">
                        <div class="w-full">
                            <div v-for="(server, i) in servers" :key="i">
                                <RoundedIcon type="server" :param="i" :server="server" />
                            </div>
                        </div>
                    </div>
                </div>

                <!--download app-->
                <div class="h-auto">
                    <RoundedIcon type="button" :button="buttons[1]" />
                    <RoundedIcon type="button" :button="buttons[2]" />
                    <div class="relative flex-shrink-0 flex justify-center h-2px w-full mb-2">
                        <div class="absolute h-2px w-8 bg-gray-800 rounded-full"></div>
                    </div>
                    <RoundedIcon type="button" :button="buttons[3]" />
                </div>
            </div>
        </div>

        <!--Friends list-->
        <div class="w-60 h-screen bg-nightgray flex flex-col">
            <div class="relative h-screen flex flex-col">
                <div class="w-full h-12 px-3 border-b border-gray-900 flex-shrink-0 flex items-center justify-center">
                    <button class="btn w-full h-auto rounded-md bg-mostnightgray flex items-center justify-start text-sm">
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
		<div class="w-full h-12 border-b border-black flex items-center">
			<!--sidebar-->
			<div class=" flex-1 h-6 bg-yellow-700"></div>
			<!--toolbar-->
			<div class="w-34 h-6 bg-teal-600"></div>
		</div>
		<div class="flex-1 flex-shrink min-w-0 flex justify-between">
			<div class="flex-1 min-w-0 overflow-hidden h-full flex items-center justify-between">
				<div class="flex-1  flex-shrink min-w-0 h-full flex items-center justify-center">
					<div class="w-120 h-80 flex-1 flex flex-col items-center justify-center">
						<div class="bg-no-repeat bg-center w-full h-full flex-1" style="background-image: url('https://discordapp.com/assets/a12ff54c4c5c03b41006fd96a4709c29.svg')">
						</div>
						<div class="w-auto h-12 flex flex-row items-center justify-center text-center text-graydiscord">
							No one's around to play with Wumpus
						</div>
					</div>
				</div>
			</div>
			<div class="hidden w-90 h-full bg-nightgray xl:flex"></div>
		</div>
	</div>


</div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import chats from "~/static/data/chats.json";
import users from "~/static/data/users.json";
import servers from "~/static/data/servers.json";
export default {
    data() {
        return {
			showMembers: false,
			searchFocused: false,
			query:'',
			gategoryBtnHover: false,
			users: users,
			servers: servers,
            buttons: [
                {
                    name: "Home",
                    svgPath: "M20.664 20s-.863-1.024-1.582-1.929c3.14-.88 4.34-2.833 4.34-2.833a13.75 13.75 0 01-2.758 1.405c-1.198.5-2.349.833-3.476 1.024-2.301.428-4.41.31-6.208-.024a20.231 20.231 0 01-3.525-1.024 14.1 14.1 0 01-1.75-.81c-.071-.047-.143-.07-.215-.118-.048-.024-.072-.048-.096-.072a8.414 8.414 0 01-.671-.405s1.15 1.905 4.195 2.81C8.198 18.929 7.312 20 7.312 20 2.014 19.833 0 16.381 0 16.381c0-7.667 3.452-13.88 3.452-13.88C6.904-.072 10.188 0 10.188 0l.24.285C6.113 1.524 4.123 3.405 4.123 3.405s.528-.286 1.415-.69c2.565-1.12 4.602-1.43 5.441-1.5.144-.024.264-.048.408-.048a20.422 20.422 0 014.843-.048c2.277.262 4.722.929 7.215 2.286 0 0-1.894-1.786-5.969-3.024l.336-.38s3.284-.072 6.736 2.5c0 0 3.452 6.213 3.452 13.88 0 0-2.038 3.452-7.336 3.619zM9.517 8.881c-1.366 0-2.445 1.19-2.445 2.643 0 1.452 1.103 2.643 2.445 2.643 1.367 0 2.445-1.19 2.445-2.643.024-1.452-1.078-2.643-2.445-2.643zm8.75 0c-1.366 0-2.445 1.19-2.445 2.643 0 1.452 1.103 2.643 2.445 2.643 1.367 0 2.445-1.19 2.445-2.643 0-1.452-1.078-2.643-2.445-2.643z"
                },
                {
                    name: "Add A Server",
                    svgPath: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                },
                {
                    name: "Explore Public Servers",
                    svgPath: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                },
                {
                    name: "Download Apps",
                    svgPath: "M16.293 9.293l1.414 1.414L12 16.414l-5.707-5.707 1.414-1.414L11 12.586V2h2v10.586l3.293-3.293zM18 20v-2h2v2c0 1.102-.896 2-2 2H6c-1.104 0-2-.898-2-2v-2h2v2h12z"
                }
            ],
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
		if(!sessionStorage.getItem('already_log')){
			// _.once(this.Log) willre turn a funtion, so just call it directly.
			_.once(this.Log)();
			sessionStorage.setItem('already_log', true);
		}

		window.onunload = function () {
			sessionStorage.removeItem('already_log');
    	}
    }
};
</script>