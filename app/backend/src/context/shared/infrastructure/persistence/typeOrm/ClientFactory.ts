import { DataSource } from 'typeorm'
import { Context } from '../../../utils/Context'

export class ClientFactory {
	static async createClient(contextName: string): Promise<DataSource | void> {
		const { host, port, username, password, database } =
			process.env.NODE_ENV == Context.TEST.env ? Context.TEST : Context.DEV
		try {
			const dataSource = new DataSource({
				name: contextName,
				type: 'postgres',
				host,
				port,
				username,
				password,
				database,
				logging: false,
				synchronize: true,
				entities: [
					__dirname +
						'/../../../../infrastructure/persistence/typeOrm/*.{ts,js}',
				],
				migrations: [
					__dirname +
						'/../../../../../shared/infrastructure/persistence/typeOrm/migrations/*.{ts,js}',
				],
			})

			return await dataSource.initialize()
		} catch (error) {
			console.log('error', error)
		}
	}
}
