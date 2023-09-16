import { Request, Response } from 'express'
import { MessagesRetrieve } from '../../context/application/message/MessagesRetrieve'
import { Controller } from '../Controller'
import httpStatus from 'http-status'

export class MessagesGetController implements Controller {
	constructor(private messagesRetrieve: MessagesRetrieve) {}

	async run(req: Request, res: Response) {
		const message = await this.messagesRetrieve.run()
		res.status(httpStatus.OK).json(message)
	}
}
