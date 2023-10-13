import { Request, Response } from 'express'
import { MessagesRetrieve } from '../../context/application/message/MessagesRetrieve'
import { Controller } from '../Controller'
import httpStatus from 'http-status'
import RequestCriteria from '../../context/shared/domain/types/CriterialRequest'

export class MessagesGetController implements Controller {
	constructor(private messagesRetrieve: MessagesRetrieve) {}

	async run(req: Request, res: Response) {
		const criteria: RequestCriteria = req.body
		const message = await this.messagesRetrieve.run(criteria)
		res.status(httpStatus.OK).json(message)
	}
}
