import { Message } from '../domain/Message'
import { MessageRepository } from '../domain/MessageRepository'
import { Uuid } from '../shared/domain/value-object/Uuid'
import { MessageCreatorRequest } from './MessageCreatorRequest'

export class MessageCreator {
	private readonly repository: MessageRepository

	constructor(repository: MessageRepository) {
		this.repository = repository
	}

	async run(request: MessageCreatorRequest) {
		const message = new Message(
			new Uuid(request.id),
			request.name,
			request.text,
		)
		return await this.repository.save(message)
	}
}
