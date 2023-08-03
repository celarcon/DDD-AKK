import { Request, Response, Router } from 'express'
import { MessagePutController } from '../controllers/message/MessagePutController'
import container from '../dependency-injection'

export const register = (router: Router): void => {
	const MessagePutController = container.get<MessagePutController>(
		'controllers.MessagePutController',
	)
	router.put('/message/:id', (req: Request, res: Response) =>
		MessagePutController.run(req, res),
	)
}
