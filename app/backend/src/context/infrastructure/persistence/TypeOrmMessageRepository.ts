import { EntitySchema } from 'typeorm'
import { Message } from '../../domain/message/Message'
import { MessageId } from '../../domain/message/attributes/MessageId'
import { MessageRepository } from '../../domain/message/MessageRepository'
import { Nullable } from '../../../context/shared/domain/Nullable'
import { TypeOrmRepository } from '../../../context/shared/infrastructure/persistence/typeOrm/Repository'
import { MessageEntity } from './typeOrm/MessageEntity'
import RequestCriteria from '../../shared/domain/types/CriterialRequest'

export class TypeOrmMessageRepository
	extends TypeOrmRepository<Message>
	implements MessageRepository
{
	public async retrieve(
		criteria: RequestCriteria,
	): Promise<[Array<Message>, number]> {
		const repository = await this.repository()
		const columnName = criteria.sortedBy.columnName
		const offset = (criteria.page - 1) * criteria.limit
		const limit = criteria.limit
		const ordering = criteria.sortedBy.ordering
		return await repository.findAndCount({
			order: { [columnName]: ordering },
			skip: offset,
			take: limit,
		})
	}

	public async save(message: Message): Promise<void> {
		return await this.persist(message)
	}

	public async deleteMessage(messageId: MessageId): Promise<void> {
		const repository = await this.repository()
		await repository.softDelete({ id: { value: messageId.toString() } })
	}

	public async seach(messageId: MessageId): Promise<Nullable<Message>> {
		const repository = await this.repository()
		const message = await repository.findOneBy({
			id: { value: messageId.toString() },
		})
		return message
	}

	protected entitySchema(): EntitySchema<Message> {
		return MessageEntity
	}
}
