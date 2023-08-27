import { DataSource } from 'typeorm'

export class ClientFactory {
	static async createClient(contextName: string): Promise<DataSource | void> {
		try {
			const dataSource = new DataSource({
				name: contextName,
				type: 'postgres',
				host: process.env.POSTGRES_DB_HOST,
				port: 5432,
				username: process.env.POSTGRES_USER,
				password: process.env.POSTGRES_PASSWORD,
				database: process.env.POSTGRES_DATABASE,
				entities: [
					__dirname +
						'/../../../../infrastructure/persistence/typeOrm/*.{ts,js}',
				],
			})

			return await dataSource.initialize()
		} catch (error) {
			console.log('error', error)
		}
	}
}
