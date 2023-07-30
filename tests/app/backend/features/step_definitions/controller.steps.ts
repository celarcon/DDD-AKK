import { AfterAll, BeforeAll, Given , Then } from '@cucumber/cucumber';
import { BackendApp } from '../../../../../src/app/backend/BackendApp';
import request from 'supertest';

let _request: request.Test;
let application: BackendApp;

Given('I send a GET request to {string}', (route: string) => {
	_request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
	await _request.expect(status);
});

BeforeAll(async () => {
	application = new BackendApp();
	await application.start();
});

AfterAll(async () => {
	await application.stop();
});
