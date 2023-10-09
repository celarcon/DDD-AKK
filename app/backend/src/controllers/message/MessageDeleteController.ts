import { Request, Response } from 'express'
import { MessageDelete } from '../../context/application/message/MessageDelete'
import { Controller } from '../Controller'
import httpStatus from 'http-status'

export class MessageDeleteController implements Controller {
	constructor(private messageDelete: MessageDelete) {}

	async run(req: Request, res: Response) {
		const { id } = req.body
		await this.messageDelete.run({ id })
		res.status(httpStatus.OK).send()
	}
}
