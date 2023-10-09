import { MessageRepository } from '../../domain/message/MessageRepository'
import { MessageId } from '../../domain/message/attributes/MessageId'

export class MessageDelete {
	private readonly repository: MessageRepository

	constructor(repository: MessageRepository) {
		this.repository = repository
	}

	async run(request: Record<string, string>) {
		const id = new MessageId(request.id)
		return await this.repository.deleteMessage(id)
	}
}
