import { Message } from '../../src/context/domain/Message'
import { FileMessageRepository } from '../../src/context/infrastructure/persistence/FileMessageRepository'
import { Uuid } from '../../src/context/shared/domain/value-object/Uuid'

describe('FileMessageRepository', () => {
	it('should save message', async () => {
		const repository = new FileMessageRepository()
		const expectedMessage = new Message(
			new Uuid('95ecc380-afe9-11e4-9b6c-751b66dd541e'),
			'name',
			'text',
		)

		await repository.save(expectedMessage)

		const message = await repository.search(
			'95ecc380-afe9-11e4-9b6c-751b66dd541e',
		)

		expect(message).toEqual(expectedMessage)
	})
})
