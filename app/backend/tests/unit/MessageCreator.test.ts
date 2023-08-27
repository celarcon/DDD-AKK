import { MessageCreator } from '../../src/context/application/message/MessageCreator'
import { Message } from '../../src/context/domain/message/Message'
import { MessageMother } from '../../src/context/domain/message/mother/MessageMother'
import { MessageNameLengthExceeded } from '../../src/context/domain/message/attributes/MessageNameLengthExceeded'
import { MessageRepositoryMock } from './__mocks__/MessageRepositoryMock'
import { CreateMessageRequestMother } from './__mocks__/CreateMessageRequestMother'

describe('MessageCreator', () => {
	let repository: MessageRepositoryMock
	let creator: MessageCreator
	beforeEach(() => {
		repository = new MessageRepositoryMock()
		creator = new MessageCreator(repository)
	})

	it('should create a valid message', async () => {
		const request = CreateMessageRequestMother.random()

		const expectMessage: Message = MessageMother.fromRequest(request)

		await creator.run(request)

		repository.assetSaveHaveBeenCalledWith(expectMessage)
	})

	it('should throw MessageNameLengthExceeded', () => {
		expect(() => {
			const request = CreateMessageRequestMother.invalidRequest()

			MessageMother.fromRequest(request)
		}).toThrow(MessageNameLengthExceeded)
	})
})
