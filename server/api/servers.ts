import { User } from './users'

export type ChannelType = 'text' | 'voice'

export type Message = {
	id: string
	content: string
	author: User['id']

	created: string
	updated: string
}

export type Category = {
	id: string
	name: string
	order: number
	unRead: number
	channels: Channel['id'][]
}

export type Channel = {
	id: string
	name: string
	type: ChannelType
	order: number
	unRead: number
	categoryId: Category['id'] | null
	messages: Message[]
}

export type Server = {
	id: string
	name: string
	profileImage: string
	order: number
	unRead: number
	channels: Channel[]
	categories: Category[]
}

const servers: Server[] = [
	{
		id: '1abc',
		name: 'USK',
		profileImage: '',
		unRead: 0,
		order: 0,
		categories: [
			{
				id: '1-newbie',
				name: 'newbie',
				order: 0,
				unRead: 0,
				channels: ['1'],
			},
		],
		channels: [
			{
				id: '2abc',
				name: 'general',
				type: 'text',
				order: 0,
				unRead: 0,
				categoryId: '1-newbie',
				messages: [
					{
						id: '1',
						content: 'Hello World',
						author: 'user-123',
						created: '2021-01-01T00:00:00.000Z',
						updated: '2021-01-01T00:00:00.000Z',
					},
				],
			},

			{
				id: '3abc',
				name: 'general',
				type: 'text',
				order: 0,
				unRead: 0,
				categoryId: null,
				messages: [
					{
						id: 'msg-112',
						content: 'Hello everyone',
						author: 'username#1345',
						created: '2023-01-01T00:00:00.000Z',
						updated: '2023-02-01T00:00:00.000Z',
					},
				],
			},
		],
	},
]

export default defineEventHandler((event) => {
	return servers
})
