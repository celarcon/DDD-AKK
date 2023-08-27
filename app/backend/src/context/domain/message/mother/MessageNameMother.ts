import { WordMother } from '../../../shared/domain/WordMother'
import { MessageName } from '../attributes/MessageName'

export class MessageNameMother {
	static create(value: string): MessageName {
		return new MessageName(value)
	}

	static random(): MessageName {
		return this.create(WordMother.random({ maxLength: 30 }))
	}

	static invalidName(): MessageName {
		return this.create('a'.repeat(40))
	}
}
