import fs from 'fs'
import v8 from 'v8'
import { Message } from '../../domain/message/Message'
import { MessageRepository } from '../../domain/message/MessageRepository'

export class FileMessageRepository implements MessageRepository {
	private FILE_PATH = `${__dirname}/messages`

	async save(message: Message): Promise<void> {
		fs.promises.writeFile(
			this.filePath(message.id.toString()),
			v8.serialize(message),
		)
	}

	async search(messageId: string): Promise<Message> {
		const messageDate = await fs.promises.readFile(this.filePath(messageId))
		const { id, name, text } = v8.deserialize(messageDate)

		return new Message(id, name, text)
	}

	private filePath(id: string): string {
		return `${this.FILE_PATH}.${id}.repo`
	}
}
