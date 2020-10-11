<template>
<div @mouseover="hoverChat = true" @mouseleave="hoverChat = false" class="relative flex-1 mt-4 min-w-0 pr-12 flex hover:bg-nightgray">
	<div class="w-12 h-12 mx-3 flex-shrink-0 flex items-center justify-center select-none">
		<div class="w-10 h-10 rounded-full overflow-hidden">
			<img :src="chat.author.avatarUrl" alt="" srcset="">
		</div>
	</div>
	<div class="w-full h-auto min-w-0 inline-block flex-shrink">
		<div class="w-full h-8">
			<span class="text-white">{{chat.author.userName}}</span>
			<span class="text-gray-600 text-xs">{{chat.date}}</span>
		</div>
		<div v-html="compiledMarkdown" :id="id" @keydown.enter.exact="onSubmit" @keydown.esc="onCancelEditing" :contenteditable="editing" :class="{'bg-grayinput pr-4 pl-2 messageinput rounded-lg overflow-x-hidden overflow-y-auto':editing}" class="text-chattext break-all md:break-words  outline-none text-base ">
			<!--message-->
		</div>
		<div v-if="editing" class="text-sm text-gray-600">
			escape to
			<a @click="onCancelEditing" role="button" class="text-indigo-600">cancel</a>
			• enter to
			<a @click="onSubmit" role="button" class="text-indigo-600">save</a>
		</div>
	</div>
	<div v-if="hoverChat" class="absolute top-0 right-0">
		<div class="bg-nightgray text-gray-400 flex items-center rounded-md">
			<button class="btn w-8 h-8 hover:bg-nightgraylighter flex items-center justify-center">
				<svg class="" aria-hidden="false" width="24" height="24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.251 2.003A10.232 10.232 0 0012 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10a9.99 9.99 0 00-.003-.251 8 8 0 01-9.746-9.746zM10 8a2 2 0 10-4.001.001A2 2 0 0010 8zm2 11c3.14 0 6-2.383 6-5v-1H6v1c0 2.617 2.86 5 6 5z"/><path d="M21 3V0h-2v3h-3v2h3v3h2V5h3V3h-3z" fill="currentColor"/></svg>
			</button>
			<button @click="onEditing" class="btn w-8 h-8 hover:bg-nightgraylighter flex items-center justify-center">
				<svg class="" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.293 9.83l.648-.647a3.628 3.628 0 000-5.124 3.628 3.628 0 00-5.124 0l-.647.648 5.123 5.123zm-6.397-3.853L5.185 13.69l5.124 5.122 7.711-7.714-5.124-5.122zM4.12 20.97l4.64-1.159-4.572-4.572-1.16 4.64a.9.9 0 001.092 1.091z" fill="currentColor"/></svg>
			</button>
			<button class="btn w-8 h-8 hover:bg-nightgraylighter flex items-center justify-center">
				<svg class="" aria-hidden="false" width="24" height="24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7 12.001a2 2 0 10-4 0 2 2 0 004 0zm7 0a2 2 0 10-4 0 2 2 0 004 0zm5-2a2 2 0 110 4 2 2 0 010-4z"/></svg>
			</button>
		</div>
	</div>
</div>
</template>

<script>

import marked from 'marked';
import _ from 'lodash';

export default {
	props: ['chat', 'id'],
	data() {
		return {
			hoverChat: false,
			editing: false,
			oldMessage:'',
			md: this.chat.value
		}
	},
	methods: {
		onSubmit(){
			this.editing = false;
			this.md = this.textArea.innerText;
			this.chat.value = this.md;
			console.log(this.md);
			console.log(this.chat.value);
		},
		onCancelEditing(){
			this.editing = false;
			this.textArea.innerText = this.chat.value;
		},
		onEditing(){
			this.editing = true;
			this.textArea.innerText = this.md;
		}
	},
	mounted(){

	},
	computed: {
		textArea: function () {
			return document.getElementById(`${this.id}`)
		},

		compiledMarkdown: function(){
			return marked(this.md);
		}
	},
}
</script>
