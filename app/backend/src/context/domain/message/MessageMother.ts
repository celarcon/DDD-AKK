import { MessageIdMother } from './MessageIdMother'
import { MessageId } from './MessageId'
import { MessageName } from './MessageName'
import { MessageNameMother } from './MessageNameMother'
import { MessageText } from './MessageText'
import { MessageTextMother } from './MessageTextMother'
import { Message } from './Message'

export class MessageMother {
	static create(id: MessageId, name: MessageName, text: MessageText): Message {
		return new Message({ id, name, text })
	}

	static fromRequest({
		id,
		name,
		text,
	}: {
		id: string
		name: string
		text: string
	}): Message {
		return this.create(
			MessageIdMother.create(id),
			MessageNameMother.create(name),
			MessageTextMother.create(text),
		)
	}
}
