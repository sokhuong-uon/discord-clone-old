import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter-store', {
	state: () => ({
		counter: 0,
	}),
	actions: {
		increment() {
			// `this` is the store instance
			this.counter++
		},
	},
})
