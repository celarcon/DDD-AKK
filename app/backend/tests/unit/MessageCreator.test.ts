import { MessageCreator } from '../../src/context/application/message/MessageCreator'
import { Message } from '../../src/context/domain/message/Message'
import { MessageId } from '../../src/context/domain/message/MessageId'
import { MessageName } from '../../src/context/domain/message/MessageName'
import { MessageNameLengthExceeded } from '../../src/context/domain/message/MessageNameLengthExceeded'
import { MessageText } from '../../src/context/domain/message/MessageText'
import { MessageRepositoryMock } from './__mocks__/MessageRepositoryMock'

describe('MessageCreator', () => {
	let repository: MessageRepositoryMock

	beforeEach(() => {
		repository = new MessageRepositoryMock()
	})

	it('should create a valid message', async () => {
		const creator = new MessageCreator(repository)

		const id = new MessageId('95ecc380-afe9-11e4-9b6c-751b66dd541e')
		const name = new MessageName('name')
		const text = new MessageText('text')
		const expectMessage = new Message({ id, name, text })

		await creator.run({
			id: id.value,
			name: name.toString(),
			text: text.toString(),
		})

		repository.assetSaveHaveBeenCalledWith(expectMessage)
	})

	it('should throw MessageNameLengthExceeded', () => {
		expect(() => {
			new MessageName('name'.repeat(30))
		}).toThrow(MessageNameLengthExceeded)
	})
})
