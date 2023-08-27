import { EntitySchema } from 'typeorm'
import { Message } from '../../domain/message/Message'
import { MessageId } from '../../domain/message/attributes/MessageId'
import { MessageRepository } from '../../domain/message/MessageRepository'
import { Nullable } from '../../../context/shared/domain/Nullable'
import { TypeOrmRepository } from '../../../context/shared/infrastructure/persistence/typeOrm/Repository'
import { MessageEntity } from './typeOrm/MessageEntity'

export class TypeOrmMessageRepository
	extends TypeOrmRepository<Message>
	implements MessageRepository
{
	public save(message: Message): Promise<void> {
		return this.persist(message)
	}

	public async seach(id: MessageId): Promise<Nullable<Message>> {
		const repository = await this.repository()

		const message = await repository.findOne({ where: { id: id.toString() } })

		return message
	}

	protected entitySchema(): EntitySchema<Message> {
		return MessageEntity
	}
}
