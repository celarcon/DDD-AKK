import { DataSource } from 'typeorm'
import { Context } from '../../../utils/Context'

const { host, port, username, password, database } =
	process.env.NODE_ENV == Context.TEST.env ? Context.TEST : Context.DEV

export const datasource = (contextName: string): DataSource => {
	return new DataSource({
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
			__dirname + '/../../../../infrastructure/persistence/typeOrm/*.{ts,js}',
		],
		migrations: [__dirname + '/migrations/*.{ts,js}'],
		migrationsTableName: 'custom_migration_table',
	})
}

export default datasource('migrations')
