import { Message } from '../../src/context/domain/Message'
import { FileMessageRepository } from '../../src/context/infrastructure/persistence/FileMessageRepository'

describe('FileMessageRepository', () => {
	it('should save message', async () => {
		const expectedMessage = new Message('id', 'name', 'text')
		const repository = new FileMessageRepository()

		await repository.save(expectedMessage)

		const message = await repository.search('id')

		expect(message).toEqual(expectedMessage)
	})
})
