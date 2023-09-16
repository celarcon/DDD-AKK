import Fetch, { responseFetch } from '../infrastructure/Fetch'
import { MessageType } from '../types/Message'

export class MessageService {
	public static async retrieve(): Promise<Array<MessageType>> {
		const endpoint: string = `/messages`
		try {
			const response: responseFetch = await Fetch.get(endpoint)
			return await this.composeResult(response)
		} catch (error) {
			console.log(error)
			return [] as Array<MessageType>
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
		const data = await response.json()
		return data as Array<MessageType>
	}
}
