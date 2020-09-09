<template>
	<div class="w-full h-auto flex overflow-hidden">
		<!--Server icons-->
		<div class="hidescrollbar w-18 h-auto bg-gray-900 overflow-auto">
			<div class="w-full h-screen flex flex-col">
				<!--Direct message dm-->
				<div class="w-full h-full">
					<DiscordButton/>
				</div>

				<!--servers-->
				<div class="w-full h-auto flex justify-center">
					<div class="w-full">
						<div class="w-full">
							<div v-for="(server, i) in servers" :key="i">
								<RoundedIcon :server="server" />
							</div>
						</div>
					</div>
				</div>

				<!--download app-->
				<div class="h-auto">
					<DiscordButton/>
					<DiscordButton/>
					<DiscordButton/>
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
			servers:[
				{
					imageUrl: "https://cdn.discordapp.com/icons/734147990985375826/a0088f3f110cc0fdd7a70282a7036cd5.png?size=256",
					gifUrl: "",
					name: "WebGL & WebGPU"
				},
				{
					imageUrl: "https://cdn.discordapp.com/icons/685241246557667386/674ab428e9fc76a7c0b4a454e2a1931c.png?size=256",
					gifUrl: "",
					name: "Three.js"
				},
				{
					imageUrl: "https://cdn.discordapp.com/icons/473401852243869706/e5068d423a09dd5f7ff9af6376090d2d.png?size=256",
					gifUrl: "",
					name: "Nuxt.js"
				},
				{
					imageUrl: "https://cdn.discordapp.com/icons/486935104384532500/3f7e1dec66678229883c63083467343b.png?size=256",
					gifUrl: "",
					name: "Tailwind CSS"
				},
				{
					imageUrl: "https://cdn.discordapp.com/icons/479784974917042186/148a4016612e835feb171622571c445f.png?size=256",
					gifUrl: "",
					name: "Supermedium"
				},
				{
					imageUrl: "https://cdn.discordapp.com/icons/340160225338195969/ec3dd9554ece4add309c255dd74fb3fe.png?size=256",
					gifUrl: "",
					name: "Vuetify"
				},
				{
					imageUrl: "https://cdn.discordapp.com/icons/267624335836053506/a_0ec02fe5be9860e99232c2d2de38c077.png?size=256",
					gifUrl: "",
					name: "Python"
				},
				{
					imageUrl: "https://cdn.discordapp.com/icons/684898665143206084/a_a5f8c917998d95e14dd3c48ea9cd0924.png?size=256",
					gifUrl: "https://cdn.discordapp.com/icons/684898665143206084/a_a5f8c917998d95e14dd3c48ea9cd0924.gif?size=256",
					name: "Deno"
				},
				{
					imageUrl: "https://cdn.discordapp.com/icons/393846237255696385/fbfd26f292fa0d095058eb715d7c6c40.png?size=256",
					gifUrl: "",
					name: "cs50"
				},
				{
					imageUrl: "https://cdn.discordapp.com/icons/149611192812437505/a_87636a5fadf040ec94820c348fd3e527.png?size=256",
					gifUrl: "https://cdn.discordapp.com/icons/149611192812437505/a_87636a5fadf040ec94820c348fd3e527.gif?size=256",
					name: "Starborne"
				},
				{
					imageUrl: "https://cdn.discordapp.com/icons/515033603743154177/cb13dbbaccfad09d04c511c51269859f.png?size=256",
					gifUrl: "",
					name: "Nick White"
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
