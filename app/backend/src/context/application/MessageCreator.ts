import { Message } from '../domain/Message'
import { MessageRepository } from '../domain/MessageRepository'

export class MessageCreator {
	constructor(private repository: MessageRepository) {}

	async run(id: string, name: string, text: string) {
		const message = new Message(id, name, text)
		return await this.repository.save(message)
	}
}
