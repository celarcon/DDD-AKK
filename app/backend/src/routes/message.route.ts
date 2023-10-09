import { Request, Response, Router } from 'express'
import { MessagePutController } from '../controllers/message/MessagePutController'
import { MessagesGetController } from '../controllers/message/MessagesGetController'
import { MessageDeleteController } from '../controllers/message/MessageDeleteController'
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

	const MessageDeleteController = container.get<MessageDeleteController>(
		'controllers.MessageDeleteController',
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
	router.delete(
		'/message',
		body('id').exists().isString(),
		validateReqSchema,
		(req: Request, res: Response) => MessageDeleteController.run(req, res),
	)
}
