import { MessageRepository } from '../../domain/message/MessageRepository'
import { Message } from '../../domain/message/Message'

export class MessagesRetrieve {
	private readonly repository: MessageRepository

	constructor(repository: MessageRepository) {
		this.repository = repository
	}

	async run() {
		const messages: Message[] = await this.repository.retrieve()
		return messages.map(msg => msg.toPrimitives())
	}
}
