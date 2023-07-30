import { Request, Response, Router } from 'express';
import StatusGetController from '../controllers/StatusGetController';
import container from '../dependency-injection'

export const register = (router: Router): void => {
	const controller: StatusGetController = container.get('App.controllers.StatusGetController')
	router.get('/status', (req: Request, res: Response) => {
		controller.run(req, res);
	});
};
