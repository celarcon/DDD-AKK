import Fetch, { responseFetch } from '../infrastructure/Fetch'
import { MessageType } from '../types/Message'

export class MessageService {
	public static async retrieve(page?: number): Promise<any> {
		const endpoint: string = `/messages`
		try {
			const response: responseFetch = await Fetch.post(endpoint, {
				sortedBy: {
					columnName: 'created_at',
					ordering: 'desc',
				},
				search: '',
				limit: 5,
				page,
			})
			return await this.composeResult(response)
		} catch (error) {
			console.log(error)
			return [] as any
		}
	}

	//retrieveOne(): MessageType {}

	public static async creteate(message: MessageType): Promise<void> {
		const endpoint: string = `/message`
		try {
			await Fetch.put(endpoint, message)
		} catch (error) {
			console.log(error)
		}
	}

	//delete(): void {}

	private static async composeResult(
		response: any,
	): Promise<Array<MessageType>> {
		const result = await response.json()
		return result as any
	}
}
