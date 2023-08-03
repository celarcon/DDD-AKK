import { MessageRepository } from '../../src/context/domain/MessageRepository'
import { MessageCreator } from '../../src/context/application/MessageCreator'
import { Message } from '../../src/context/domain/Message'

describe('MessageCreator', () => {
	it('should create a valid message', async () => {
		const repository: MessageRepository = {
			save: jest.fn(),
		}

		const creator = new MessageCreator(repository)
		const id = 'some-id'
		const name = 'some-name'
		const text = 'some-text'
		const expectMessage = new Message(id, name, text)

		await creator.run(id, name, text)

		expect(repository.save).toHaveBeenCalledWith(expectMessage)
	})
})
