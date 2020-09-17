<template>
<div class="relative w-auto h-auto bg-black flex overflow-hidden">
    <div class="flex">
        <!--Server icons-->
        <div class="w-18 h-scree bg-mostnightgray">
            <div class="hidescrollbar w-18 pt-3 h-screen flex flex-col overflow-auto">
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


        <!--Server channels-->
        <div class="w-60 h-screen bg-nightgray flex flex-col">
            <div class="relative h-screen flex flex-col">
                <div class="w-full h-12">
                    <ServerHeader :server="servers[$route.params.id]" />
                </div>

                <div class="smallScroleBar w-60 h-auto pb-18 flex flex-col overflow-auto bg-nightgray">
                    <div class="pr-1">
                        <div class="h-4"></div>
                        <div class="flex flex-col w-full">
                            <div v-for="(channel,i) in servers[$route.params.id].channels" :key="i">
                                <ChannelCard :channel="channel" />
                            </div>
                        </div>

                        <div draggable="true" v-for="(category, i) in servers[$route.params.id].categories" :key="i" class="flex flex-col w-full">
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

                <div class="absolute w-full h-13 bottom-0">
                    <ServerFooter :profile="users[0]" />
                </div>
            </div>
        </div>
    </div>

    <!--Main section-->
    <div class="mainsection min-w-0 w-full h-screen bg-nightgraylighter flex flex-col">
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

			<div class="w-auto h-6 z-10 bg-nightgraylighter text-gray-500 flex-shrink-0 flex items-center justify-between overflow-hidden">
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
							@focus="searchFocuse()"
							@focusout="searchFocused = false"

							type="text" placeholder="Search"
						/>
					</div>
						<svg v-if="query.length" @click="deleteQuery()" class="w-6 h-6 cursor-pointer transform scale-75" aria-hidden="false"><path fill="currentColor" d="M18.4 4L12 10.4 5.6 4 4 5.6l6.4 6.4L4 18.4 5.6 20l6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L20 5.6 18.4 4z"/></svg>
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



		<div class="relative w-full h-screen flex">
			<div class="flex flex-col">
				<div class="w-full overflow-auto mb-1 min-h-0 flex-shrink h-170 min-w-0 break-normal bg-nightgraylighter font-sans text-lg inset-y-0">
					<div class="w-full h-auto overflow-auto">
						<div class="w-full h-1 -mt-1 pr-12 pl-18"></div>
						<div v-for="(chat, i) in chats[$route.params.id]" :key="i">
							<Chat :chat="chat"/>
						</div>
					</div>
					<div class="h-8"></div>
				</div>
				<div class="flex blur-shadow flex-shrink-0 w-full h-auto px-8 mb-16 bg-nightgraylighter shadow-2xl">
					<div class="relative flex items-start blur-shadow flex-shrink-0 w-full h-6/12 rounded-lg overflow-hidden bg-grayinput">

						<div class="relative h-12 flex flex-col items-start justify-start">

							<div class="h-full flex items-center justify-center">
								<button class="btn w-14 h-12 flex items-center justify-center text-gray-300">
									<input class="btn absolute h-12 w-14 opacity-0" type="file" name="" id="" value="">
									<svg width="24" height="24"><path class="" fill="currentColor" d="M12 2a10.01 10.01 0 000 20 10.01 10.01 0 000-20zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
								</button>
							</div>
						</div>

						<form ref="form" class="w-full h-auto rounded-lg px30 overflow-hidden" action="" method="post">
							<div class="relative flex items-center w-full h-auto rounded-lg bg-grayinput">

								<div class="w-full relative flex items-center my-1">
									<div class="w-full flex items-center">
										<div
											id="msginput"
											@keydown.enter="onEnter"
											class="messageinput py-2 flex-grow break-all sm:break-words w-12/12 overflow-y-auto overflow-x-hidden text-gray-400 rounded-lg bg-transparent outline-none"
											contenteditable="true"
											>
										</div>

									</div>

								</div>
							</div>
						</form>

						<div class="w-30 h-12 text-gray-400 flex items-center justify-around">
							<div class="w-8 h-8 flex items-center justify-center">
								<button class="btn flex items-center justify-center">
									<svg width="24" height="24" class="" aria-hidden="false"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.886 7.999H20c1.104 0 2 .897 2 2v2H2v-2c0-1.103.897-2 2-2h3.114a5.028 5.028 0 01-1.235-.878 3.002 3.002 0 010-4.242c1.133-1.133 3.107-1.133 4.242-.002 1.637 1.637 1.858 4.718 1.877 5.064a.094.094 0 01-.004.032.107.107 0 00-.004.026h.02a.108.108 0 00-.004-.026c-.003-.01-.005-.02-.004-.031.02-.346.24-3.427 1.877-5.064 1.135-1.133 3.107-1.132 4.242-.001a3.006 3.006 0 010 4.244 5.028 5.028 0 01-1.235.878zM7.293 5.707A1.002 1.002 0 018 4c.268 0 .519.103.707.292.59.59.934 1.648 1.118 2.53-.88-.183-1.946-.529-2.532-1.115zm6.881 1.117c.185-.883.528-1.941 1.119-2.531A.986.986 0 0116 4c.268 0 .519.103.706.291.39.391.391 1.025.001 1.416-.591.591-1.65.935-2.533 1.117zM3 13.999v6c0 1.103.897 2 2 2h6v-8H3zm10 0v8h6c1.104 0 2-.897 2-2v-6h-8z"/></svg>
								</button>
							</div>
							<div class="w-8 h-8 flex items-center justify-center">
								<button class="btn flex items-center justify-center">
									<svg width="24" height="24" class="icon-3D60ES" aria-hidden="false"><path fill="currentColor" d="M2 2a2 2 0 00-2 2v16a2 2 0 002 2h20a2 2 0 002-2V4a2 2 0 00-2-2H2zm7.764 9.448v4.032c-.864.564-1.884.876-3.024.876-2.628 0-4.08-1.728-4.08-4.284 0-2.568 1.572-4.308 4.128-4.308 1.02 0 1.872.24 2.532.612l-.276 1.788c-.624-.396-1.356-.708-2.208-.708-1.428 0-2.124 1.056-2.124 2.604 0 1.56.72 2.652 2.148 2.652.456 0 .78-.096 1.116-.264v-1.476H6.428v-1.524h3.336zm1.784-3.528H13.6v8.28h-2.052V7.92zm8.924 0v1.716h-2.916v1.692h2.304v1.716h-2.304V16.2h-2.04V7.92h4.956z"/></svg>
								</button>
							</div>
							<div class="w-8 h-8 flex items-center justify-center">
								<button class="btn flex items-center justify-center">
									<div>
										<!--<svg width="24" height="24" class="icon-3D60ES" aria-hidden="false"><path fill="currentColor" d="M2 2a2 2 0 00-2 2v16a2 2 0 002 2h20a2 2 0 002-2V4a2 2 0 00-2-2H2zm7.764 9.448v4.032c-.864.564-1.884.876-3.024.876-2.628 0-4.08-1.728-4.08-4.284 0-2.568 1.572-4.308 4.128-4.308 1.02 0 1.872.24 2.532.612l-.276 1.788c-.624-.396-1.356-.708-2.208-.708-1.428 0-2.124 1.056-2.124 2.604 0 1.56.72 2.652 2.148 2.652.456 0 .78-.096 1.116-.264v-1.476H6.428v-1.524h3.336zm1.784-3.528H13.6v8.28h-2.052V7.92zm8.924 0v1.716h-2.916v1.692h2.304v1.716h-2.304V16.2h-2.04V7.92h4.956z"/></svg>-->
										<div @mouseover="emojiHover" class="transform scale-125 hover:scale-150">{{emoji}}</div>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div :class="{'w-60':showMembers, 'w-0': !showMembers}" class="h-full">
				<MembersBar :users="users"/>
			</div>
		</div>
        <!--Message section communicate-->
    </div>
</div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import chats from "~/static/data/chats.json";
import users from "~/static/data/users.json";
import servers from "~/static/data/servers.json";
import emoji from "~/static/data/emoji.json";
export default {

    data() {
        return {
			emoji: '😊',
			showMembers: true,
			searchFocused: false,
			content: [
				{ value: 'paragraph 1' },
				{ value: 'paragraph 2' },
				{ value: 'paragraph 3' },
			],
			query:'',
			gategoryBtnHover: false,
			chats: chats,
			message:'',
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
		onEnter: function(event){
			event.preventDefault();
			// this.$refs.form.submit();
			// console.log(this.message);

            let currentDateWithFormat = new Date().toJSON().slice(0,10).replace(/-/g,'/');
			let author = _.sample(users);
			// console.log(author);
			let data = document.getElementById('msginput');

			this.chats[this.$route.params.id].push({
				"author":{
					"userName": author.userName,
					"avatarUrl":author.avatarUrlImg
				},
				"date": currentDateWithFormat,
				"value": data.innerText
			});
			data.innerText = '';
		},
		onInput(event, index) {
			const value = event.target.innerText;
			this.content[index].value = value;
		},
		onRemove(index) {
			if (this.content.length > 1 && this.content[index].value.length === 0) {
				this.$delete(this.content, index);
				this.updateAllContent();
			}
		},
		updateAllContent() {
			this.content.forEach((c, index) => {
				const el = document.getElementById(`content-${index}`);
				el.innerText = c.value;
			});
		},
		emojiHover(){
			let currentEmoji = _.sample(emoji);
			this.emoji = currentEmoji.face;
		}
	},
    mounted() {
		// this.updateAllContent();
		// console.table(this.$route.params.id);
    }
};
</script>

<style>
.btn:focus{
	outline: 0;
}

.messageinput{
	max-height: 20rem;
	min-width: 0;

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