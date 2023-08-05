import { validate as uuidValidate, v4 as uuid } from 'uuid'
import { InvalidArgumentError } from './InvalidArgumentError'

export class Uuid {
	readonly value: string
	constructor(value: string) {
		this.ensureIsValidUuid(value)

		this.value = value
	}

	private ensureIsValidUuid(id: string): void {
		if (!uuidValidate(id)) {
			throw new InvalidArgumentError(
				`<${this.constructor.name}> does not allow the value <${id}>`,
			)
		}
	}

	static random(): Uuid {
		return new Uuid(uuid())
	}

	toString(): string {
		return this.value
	}
}
