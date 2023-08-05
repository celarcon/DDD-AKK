import { Message } from '../../../src/context/domain/message/Message'
import { MessageRepository } from '../../../src/context/domain/message/MessageRepository'

export class MessageRepositoryMock implements MessageRepository {
	private saveMock: jest.Mock

	constructor() {
		this.saveMock = jest.fn()
	}

	async save(message: Message): Promise<void> {
		this.saveMock(message)
	}

	assetSaveHaveBeenCalledWith(expected: Message): void {
		expect(this.saveMock).toHaveBeenCalledWith(expected)
	}
}
