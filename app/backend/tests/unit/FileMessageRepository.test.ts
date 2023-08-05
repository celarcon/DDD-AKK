import { Message } from '../../src/context/domain/message/Message'
import { MessageId } from '../../src/context/domain/message/MessageId'
import { MessageName } from '../../src/context/domain/message/MessageName'
import { MessageText } from '../../src/context/domain/message/MessageText'
import { FileMessageRepository } from '../../src/context/infrastructure/persistence/FileMessageRepository'

describe('FileMessageRepository', () => {
	it('should save message', async () => {
		const repository = new FileMessageRepository()
		const id = new MessageId('95ecc380-afe9-11e4-9b6c-751b66dd541e')
		const name = new MessageName('name')
		const text = new MessageText('text')
		const expectedMessage = new Message({
			id,
			name,
			text,
		})

		await repository.save(expectedMessage)

		const message = await repository.search(
			'95ecc380-afe9-11e4-9b6c-751b66dd541e',
		)

		expect(message).toEqual(expectedMessage)
	})
})
