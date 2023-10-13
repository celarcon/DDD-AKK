import RequestCriteria from '../../shared/domain/types/CriterialRequest'
import { Message } from './Message'
import { MessageId } from './attributes/MessageId'

export interface MessageRepository {
	save(message: Message): Promise<void>
	retrieve(criteria: RequestCriteria): Promise<[Array<Message>, number]>
	deleteMessage(id: MessageId): Promise<void>
}
