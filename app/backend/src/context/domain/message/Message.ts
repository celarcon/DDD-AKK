import { MessageId } from './MessageId'
import { MessageName } from './MessageName'
import { MessageText } from './MessageText'

export class Message {
	readonly id: MessageId
	readonly name: MessageName
	readonly text: MessageText

	constructor({
		id,
		name,
		text,
	}: {
		id: MessageId
		name: MessageName
		text: MessageText
	}) {
		this.id = id
		this.name = name
		this.text = text
	}
}
