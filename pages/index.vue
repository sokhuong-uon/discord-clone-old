<template>
<div class="relative w-auto h-auto bg-black flex overflow-hidden">
    <div class="relative flex">
        <!--Server icons-->
        <div class=" w-18 h-scree  bg-mostnightgray">
            <div class="hidescrollbar w-18 pt-3 h-screen flex flex-col overflow-auto">
                <!--Direct message dm home-->
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

        <!--Server channels-->
        <div class="w-60 h-screen bg-nightgray flex flex-col">
            <div class="relative h-screen flex flex-col">
                <div class="w-full h-12">
                    <button class="w-60 h-12 bg-nightgray border-b border-gray-900">
						<div class="w-full h-full flex items-center px-4">
							<!--If server if boosted-->
							<div>
								<svg class="w-4 h-4 text-gray-600" aria-hidden="false" viewBox="0 0 16 15.2">
									<path fill="currentColor" fill-rule="evenodd" d="M16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59S0 8.39 0 7.6s1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8S4.78.28 5.53 0 7.2.83 8 .83s1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59S16 6.81 16 7.6z" />
								</svg>
							</div>
							<!--server name-->
							<h1 class="w- h-4 text-white ml-1 mr-auto text-sm shadow-md font-semibold tracking-wide">Home</h1>

							<!--menubar-->
							<div class="w-4 h-4 overflow-hidden">
								<svg class="w-4 h-4 text-gray-200">
									<g fill="none" fill-rule="evenodd">
										<path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4.5 4.5l9 9M13.5 4.5l-9 9" />
									</g>
								</svg>
							</div>
						</div>
					</button>
                </div>

                <div class="smallScroleBar w-60 h-auto pb-18 flex flex-col overflow-auto bg-nightgray">
                    <div class="pr-1">
                        <div class="h-4"></div>


                    </div>
                </div>

                <div class="absolute w-full h-13 bottom-0">
                    <ServerFooter :profile="users[0]" />
                </div>
            </div>
        </div>
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
		deleteQuery: function(){
			this.query = '';
		},
		searchFocuse: function(){
			this.searchFocused = true;
		},
	},
    mounted() {
		// console.table(this.servers);
		let link = 'https://github.com/SOKHUONG/discord-clone';
        console.log("%c⚠ Do not pasth any code that you don't understand !", "background: yellow; color: red; font-size: 30px; font-weight: 600; font-family: Lobster, serif; height: 200px");
        console.log("%c If you are a developer and know exactly what you're doing,", "background: transparent; color: #ed0e90; font-size: 30px; font-weight: 600; font-family: Lobster, serif; height: 200px");
        console.log("%cEnjoy Your Time, Dev! 😉", "background: transparent; color: #ed0e90; font-size: 50px; font-weight: 700; font-family: Arial, Helvetica, sans-serif; height: 200px");
		console.log(`%c Source code of this project on github: %c${link}`,"font-family: Lobster, serif;color: #0eed98; font-size: 25px","font-size: 15px;");
    }
};
</script>

<style>
.btn:focus{
	outline: 0;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.hidescrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hidescrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

/* small scrollbar */

/* Track */
::-webkit-scrollbar-track {
    background: transparent;
}

/* width */
::-webkit-scrollbar {
    width: 6px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: rgb(57, 36, 36);
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
