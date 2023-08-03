import { Request, Response } from 'express'
import { MessageCreator } from '../../context/application/MessageCreator'
import { Controller } from '../Controller'
import httpStatus from 'http-status'

export class MessagePutController implements Controller {
	constructor(private messageCreator: MessageCreator) {}

	async run(req: Request, res: Response) {
		const { id, name, text } = req.body
		await this.messageCreator.run(id, name, text)
		res.status(httpStatus.CREATED).send()
	}
}
