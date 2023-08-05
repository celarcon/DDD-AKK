import { MessageCreator } from '../../src/context/application/MessageCreator'
import { Message } from '../../src/context/domain/Message'
import { MessageRepositoryMock } from './__mocks__/MessageRepositoryMock'
import { Uuid } from '../../src/context/shared/domain/value-object/Uuid'

describe('MessageCreator', () => {
	let repository: MessageRepositoryMock

	beforeEach(() => {
		repository = new MessageRepositoryMock()
	})

	it('should create a valid message', async () => {
		const creator = new MessageCreator(repository)

		const id = new Uuid('95ecc380-afe9-11e4-9b6c-751b66dd541e')
		const name = 'some-name'
		const text = 'some-text'
		const expectMessage = new Message(id, name, text)

		await creator.run({ id: id.value, name, text })

		repository.assetSaveHaveBeenCalledWith(expectMessage)
	})
})
