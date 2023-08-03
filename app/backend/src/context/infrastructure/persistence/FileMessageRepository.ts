import fs from 'fs'
import v8 from 'v8'
import { Message } from '../../domain/Message'
import { MessageRepository } from '../../domain/MessageRepository'

export class FileMessageRepository implements MessageRepository {
	private FILE_PATH = `${__dirname}/messages`

	async save(message: Message): Promise<void> {
		fs.promises.writeFile(this.filePath(message.id), v8.serialize(message))
	}

	private filePath(id: string): string {
		return `${this.FILE_PATH}.${id}.repo`
	}
}
