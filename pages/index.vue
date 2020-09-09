<template>
	<div class="w-full h-auto flex overflow-hidden">
		<!--Server icons-->
		<div class="hidescrollbar w-18 h-screen pt-3 bg-gray-900 overflow-auto">
			<div class="w-full h-screen flex flex-col">
				<!--Direct message dm-->
				<div class="w-full h-12 mb-2">
					<RoundedIcon type="button" :button="buttons[0]"/>
				</div>

				<div class="relative flex-shrink-0 flex justify-center h-2px w-full mb-2">
					<div class="absolute h-2px w-8 bg-gray-800 rounded-full"></div>
				</div>

				<!--servers-->
				<div class="w-full h-auto flex justify-center">
					<div class="w-full">
						<div class="w-full">
							<div v-for="(server, i) in servers" :key="i">
								<RoundedIcon type="server" :server="server"/>
							</div>
						</div>
					</div>
				</div>

				<!--download app-->
				<div class="h-auto">
					<RoundedIcon type="button" :button="buttons[1]"/>
					<RoundedIcon type="button" :button="buttons[2]"/>
					<div class="relative flex-shrink-0 flex justify-center h-2px w-full mb-2">
						<div class="absolute h-2px w-8 bg-gray-800 rounded-full"></div>
					</div>
					<RoundedIcon type="button" :button="buttons[3]"/>
				</div>
			</div>
		</div>

		<!--Server channels-->
		<div class="w-60 h-full bg-gray-700">
			<div class="w-60">
				<div class="w-56 mx-4">haha</div>
				<div></div>
				<div></div>
			</div>
		</div>

		<!--Main section-->
		<div>
			<!--Main section nav, sidebar-->
			<div></div>

			<!--Message section communicate-->
			<div>
				<!--Actual Message section communicate-->
				<div></div>

				<!--Members of the server or channel, online or offline-->
				<div></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return{
			buttons:[
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
				},
			],
			servers:[
				{
					name: "USK",
					imageUrl: "https://cdn.discordapp.com/icons/722327836597289010/d08e34244669dbdc97b509d9bc33100b.png?size=256",
					gifUrl: "",
				},
				{
					name: "WebGL & WebGPU",
					imageUrl: "https://cdn.discordapp.com/icons/734147990985375826/a0088f3f110cc0fdd7a70282a7036cd5.png?size=256",
					gifUrl: "",
				},
				{
					name: "Three.js",
					imageUrl: "https://cdn.discordapp.com/icons/685241246557667386/674ab428e9fc76a7c0b4a454e2a1931c.png?size=256",
					gifUrl: "",
				},
				{
					name: "Nuxt.js",
					imageUrl: "https://cdn.discordapp.com/icons/473401852243869706/e5068d423a09dd5f7ff9af6376090d2d.png?size=256",
					gifUrl: "",
				},
				{
					name: "Tailwind CSS",
					imageUrl: "https://cdn.discordapp.com/icons/486935104384532500/3f7e1dec66678229883c63083467343b.png?size=256",
					gifUrl: "",
				},
				{
					name: "Supermedium",
					imageUrl: "https://cdn.discordapp.com/icons/479784974917042186/148a4016612e835feb171622571c445f.png?size=256",
					gifUrl: "",
				},
				{
					name: "Vuetify",
					imageUrl: "https://cdn.discordapp.com/icons/340160225338195969/ec3dd9554ece4add309c255dd74fb3fe.png?size=256",
					gifUrl: "",
				},
				{
					name: "Vue Land",
					imageUrl: "https://cdn.discordapp.com/icons/325477692906536972/75523e3c0f68b7e092c9ca6c7ee09ecc.png?size=256",
					gifUrl: "",
				},
				{
					name: "Python",
					imageUrl: "https://cdn.discordapp.com/icons/267624335836053506/a_0ec02fe5be9860e99232c2d2de38c077.png?size=256",
					gifUrl: "",
				},
				{
					name: "Deno",
					imageUrl: "https://cdn.discordapp.com/icons/684898665143206084/a_a5f8c917998d95e14dd3c48ea9cd0924.png?size=256",
					gifUrl: "https://cdn.discordapp.com/icons/684898665143206084/a_a5f8c917998d95e14dd3c48ea9cd0924.gif?size=256",
				},
				{
					name: "cs50",
					imageUrl: "https://cdn.discordapp.com/icons/393846237255696385/fbfd26f292fa0d095058eb715d7c6c40.png?size=256",
					gifUrl: "",
				},
				{
					name: "Zeal-2 Server",
					imageUrl: "",
					gifUrl: "",
				},
				{
					name: "Starborne",
					imageUrl: "https://cdn.discordapp.com/icons/149611192812437505/a_87636a5fadf040ec94820c348fd3e527.png?size=256",
					gifUrl: "https://cdn.discordapp.com/icons/149611192812437505/a_87636a5fadf040ec94820c348fd3e527.gif?size=256",
				},
				{
					name: "Nick White",
					imageUrl: "https://cdn.discordapp.com/icons/515033603743154177/cb13dbbaccfad09d04c511c51269859f.png?size=256",
					gifUrl: "",
				}


			]
		}
	}
}
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.hidescrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hidescrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
