import { Uuid } from '../../shared/domain/value-object/Uuid'
import { MessageId } from './MessageId'

export class MessageIdMother {
	static create(value: string): MessageId {
		return new MessageId(value)
	}

	static random(): MessageId {
		return this.create(Uuid.random().toString())
	}
}
