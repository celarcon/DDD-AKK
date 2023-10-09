import { Message } from './Message'
import { MessageId } from './attributes/MessageId'

export interface MessageRepository {
	save(message: Message): Promise<void>
	retrieve(): Promise<Array<Message>>
	deleteMessage(id: MessageId): Promise<void>
}
