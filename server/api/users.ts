type State = 'invisible' | 'idle' | 'online' | 'offline' | 'dnd'

export type User = {
	id: string
	name: string
	profileImage: string
	status: {
		emoji: string
		text: string
	}
	state: State
	playing?: {
		name: string
		image: string
		value: string
	}
}

const users: User[] = [
	{
		id: 'username#4523',
		name: 'wolf',
		profileImage: '',
		status: {
			emoji: '🐺',
			text: 'howlowing',
		},
		state: 'online',
		playing: {
			name: 'Among Us',
			image: '',
			value: 'amongus',
		},
	},
	{
		id: 'username#4524',
		name: 'dog',
		profileImage: '',
		status: {
			emoji: '🐶',
			text: 'barking',
		},
		state: 'dnd',
	},
	{
		id: 'goodboy#1923',
		name: 'chicken',
		profileImage: '',
		status: {
			emoji: '🐔',
			text: 'clucking',
		},
		state: 'idle',
	},
	{
		id: 'lonewolf#4523',
		name: 'grass',
		profileImage: '',
		status: {
			emoji: '🌱',
			text: 'growing',
		},
		state: 'online',
	},
]

export default defineEventHandler((event) => {
	return users
})
