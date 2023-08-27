import { AggregateRoot } from '../../shared/domain/AggregateRoot'
import { MessageId } from './attributes/MessageId'
import { MessageName } from './attributes/MessageName'
import { MessageText } from './attributes/MessageText'

export class Message extends AggregateRoot {
	readonly id: MessageId
	readonly name: MessageName
	readonly text: MessageText

	constructor(id: MessageId, name: MessageName, text: MessageText) {
		super()
		this.id = id
		this.name = name
		this.text = text
	}

	static fromPrimitives(plainData: {
		id: string
		name: string
		text: string
	}): Message {
		return new Message(
			new MessageId(plainData.id),
			new MessageName(plainData.name),
			new MessageText(plainData.text),
		)
	}

	toPrimitives(): any {
		return {
			id: this.id.value,
			name: this.name.value,
			text: this.text.value,
		}
	}
}
