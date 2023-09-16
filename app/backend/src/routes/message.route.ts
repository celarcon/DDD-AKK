import { Request, Response, Router } from 'express'
import { MessagePutController } from '../controllers/message/MessagePutController'
import { MessagesGetController } from '../controllers/message/MessagesGetController'
import container from '../dependency-injection'
import { body } from 'express-validator'
import { validateReqSchema } from '.'

export const register = (router: Router): void => {
	const reqSchema = [
		body('id').exists().isString(),
		body('name').exists().isString(),
		body('text').exists().isString(),
	]

	const MessagePutController = container.get<MessagePutController>(
		'controllers.MessagePutController',
	)

	const MessagesGetController = container.get<MessagesGetController>(
		'controllers.MessagesGetController',
	)

	router.get('/messages', (req: Request, res: Response) =>
		MessagesGetController.run(req, res),
	)
	router.put(
		'/message',
		reqSchema,
		validateReqSchema,
		(req: Request, res: Response) => MessagePutController.run(req, res),
	)
}
