import { DataSource, EntitySchema, Repository } from 'typeorm'
import { AggregateRoot } from '../../../domain/AggregateRoot'

export abstract class TypeOrmRepository<T extends AggregateRoot> {
	constructor(private _client: Promise<DataSource>) {}

	protected abstract entitySchema(): EntitySchema<T>

	protected client(): Promise<DataSource> {
		return this._client
	}

	protected async repository(): Promise<Repository<T>> {
		return (await this._client).getRepository(this.entitySchema())
	}

	protected async retrieve(): Promise<Array<T> | void> {
		const repository = await this.repository()
		return await repository.find()
	}

	protected async delete(aggregateRoot: T): Promise<void> {
		const repository = await this.repository()
		console.log(aggregateRoot)
		repository.delete(aggregateRoot as any)
	}

	protected async persist(aggregateRoot: T): Promise<void> {
		const repository = await this.repository()
		await repository.save(aggregateRoot as any)
	}
}
