import { MessageRepository } from '../../domain/message/MessageRepository'
import { Message } from '../../domain/message/Message'
import RequestCriteria from '../../shared/domain/types/CriterialRequest'
import { MessageRetrieveResponse } from './MessageRetrieveResponse'

export class MessagesRetrieve {
	private readonly repository: MessageRepository

	constructor(repository: MessageRepository) {
		this.repository = repository
	}

	async run(criteria: RequestCriteria): Promise<MessageRetrieveResponse> {
		const messages: [Message[], number] = await this.repository.retrieve(
			criteria,
		)
		const totalPagesRound: number = Math.ceil(messages[1] / criteria.limit)
		const pager = {
			current: criteria.page,
			total_pages: totalPagesRound,
			total_elements: messages[1],
		}
		const result: MessageRetrieveResponse = {
			data: messages[0].map(msg => msg.toPrimitives()),
			pager,
			sortedBy: criteria.sortedBy,
		}
		return result
	}
}
