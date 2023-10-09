import { Message } from '../../domain/message/Message'
import { MessageId } from '../../domain/message/attributes/MessageId'
import { MessageName } from '../../domain/message/attributes/MessageName'
import { MessageRepository } from '../../domain/message/MessageRepository'
import { MessageText } from '../../domain/message/attributes/MessageText'
import { MessageCreatorRequest } from './MessageCreatorRequest'

export class MessageUpdate {
	private readonly repository: MessageRepository

	constructor(repository: MessageRepository) {
		this.repository = repository
	}

	async run(request: MessageCreatorRequest) {
		const id = new MessageId(request.id)
		const name = new MessageName(request.name)
		const text = new MessageText(request.text)

		const message = new Message(id, name, text)
		return await this.repository.save(message)
	}
}
