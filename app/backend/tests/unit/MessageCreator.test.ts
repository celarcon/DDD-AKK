import { MessageCreator } from '../../src/context/application/MessageCreator'
import { Message } from '../../src/context/domain/Message'
import { MessageRepositoryMock } from './__mocks__/MessageRepositoryMock'

describe('MessageCreator', () => {
	let repository: MessageRepositoryMock

	beforeEach(() => {
		repository = new MessageRepositoryMock()
	})

	it('should create a valid message', async () => {
		const creator = new MessageCreator(repository)

		const id = 'some-id'
		const name = 'some-name'
		const text = 'some-text'
		const expectMessage = new Message(id, name, text)

		await creator.run({ id, name, text })

		repository.assetSaveHaveBeenCalledWith(expectMessage)
	})
})
