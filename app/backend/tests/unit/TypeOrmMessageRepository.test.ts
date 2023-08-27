import container from '../../src/dependency-injection'
import { MessageRepository } from '../../src/context/domain/message/MessageRepository'
import { MessageMother } from '../../src/context/domain/message/mother/MessageMother'
import { EnviromentArranger } from '../../src/context/shared/infrastructure/persistence/arranger/EnviromentArranger'

const repository: MessageRepository = container.get('domain.MessageRepository')
const enviromentArranger: Promise<EnviromentArranger> =
	container.get('EnviromentArranger')

beforeEach(async () => {
	await (await enviromentArranger).arrange()
})

afterAll(async () => {
	await (await enviromentArranger).arrange()
	await (await enviromentArranger).close()
})

describe('TypeOrmMessageRepository', () => {
	describe('#save', () => {
		it('should save a message', async () => {
			const message = MessageMother.random()
			await repository.save(message)
		})
	})
})
