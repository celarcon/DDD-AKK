import { MessageId } from '../../../src/context/domain/message/MessageId'
import { MessageName } from '../../../src/context/domain/message/MessageName'
import { MessageText } from '../../../src/context/domain/message/MessageText'
import { MessageIdMother } from '../../../src/context/domain/message/MessageIdMother'
import { MessageNameMother } from '../../../src/context/domain/message/MessageNameMother'
import { MessageTextMother } from '../../../src/context/domain/message/MessageTextMother'
import { MessageCreatorRequest } from '../../../src/context/application/message/MessageCreatorRequest'

export class CreateMessageRequestMother {
	static create(
		id: MessageId,
		name: MessageName,
		text: MessageText,
	): MessageCreatorRequest {
		return { id: id.value, name: name.value, text: text.value }
	}

	static random(): MessageCreatorRequest {
		return this.create(
			MessageIdMother.random(),
			MessageNameMother.random(),
			MessageTextMother.random(),
		)
	}

	static invalidRequest(): MessageCreatorRequest {
		return this.create(
			MessageIdMother.random(),
			MessageNameMother.invalidName(),
			MessageTextMother.random(),
		)
	}
}
