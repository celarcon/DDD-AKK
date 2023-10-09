import { Message } from '../../../src/context/domain/message/Message'
import { MessageRepository } from '../../../src/context/domain/message/MessageRepository'
import { MessageId } from '../../../src/context/domain/message/attributes/MessageId'
import { CreateMessageRequestMother } from './CreateMessageRequestMother'
export class MessageRepositoryMock implements MessageRepository {
	private saveMock: jest.Mock

	constructor() {
		this.saveMock = jest.fn()
	}

	async save(message: Message): Promise<void> {
		this.saveMock(message)
	}

	async retrieve(): Promise<any> {
		return [CreateMessageRequestMother.random()]
	}

	async deleteMessage(id: MessageId): Promise<void> {}

	assetSaveHaveBeenCalledWith(expected: Message): void {
		expect(this.saveMock).toHaveBeenCalledWith(expected)
	}

	assetLastSavedCurseIs(expected: Message): void {
		expect(this.saveMock).toHaveBeenCalledWith(expected)
	}
}
