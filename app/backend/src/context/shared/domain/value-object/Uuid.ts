import { validate as uuidValidate } from 'uuid'
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

	toString(): string {
		return this.value
	}
}
