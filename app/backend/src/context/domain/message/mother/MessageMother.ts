import { MessageIdMother } from './MessageIdMother'
import { MessageId } from '../attributes/MessageId'
import { MessageName } from '../attributes/MessageName'
import { MessageNameMother } from './MessageNameMother'
import { MessageText } from '../attributes/MessageText'
import { MessageTextMother } from './MessageTextMother'
import { Message } from '../Message'

export class MessageMother {
	static create(id: MessageId, name: MessageName, text: MessageText): Message {
		return new Message(id, name, text)
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

	static random(): Message {
		return this.create(
			MessageIdMother.random(),
			MessageNameMother.random(),
			MessageTextMother.random(),
		)
	}
}
