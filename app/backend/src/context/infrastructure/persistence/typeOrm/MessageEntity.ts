import { EntitySchema } from 'typeorm'
import { Message } from '../../../domain/message/Message'
import { MessageId } from '../../../domain/message/attributes/MessageId'
import { MessageName } from '../../../domain/message/attributes/MessageName'
import { MessageText } from '../../../domain/message/attributes/MessageText'
import { ValueObjectTransformer } from '../../../../context/shared/infrastructure/persistence/typeOrm/ValueObjectTransformer'

export const MessageEntity = new EntitySchema<Message>({
	name: 'Message',
	tableName: 'message',
	target: Message,
	columns: {
		id: {
			type: String,
			primary: true,
			transformer: ValueObjectTransformer(MessageId),
		},
		name: {
			type: String,
			transformer: ValueObjectTransformer(MessageName),
		},
		text: {
			type: String,
			transformer: ValueObjectTransformer(MessageText),
		},
		created_at: {
			type: Date,
			createDate: true,
			default: new Date(),
		},
		updated_at: {
			type: Date,
			updateDate: true,
			default: new Date(),
		},
		deleted_at: {
			type: Date,
			deleteDate: true,
		},
	},
})
