import { WordMother } from '../../../shared/domain/WordMother'
import { MessageText } from '../attributes/MessageText'

export class MessageTextMother {
	static create(value: string): MessageText {
		return new MessageText(value)
	}

	static random(): MessageText {
		return this.create(WordMother.random({ maxLength: 200 }))
	}
}
