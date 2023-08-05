import { StringValueObject } from '../../shared/domain/value-object/StringValueObject'
import { MessageNameLengthExceeded } from './MessageNameLengthExceeded'

export class MessageName extends StringValueObject {
	constructor(value: string) {
		super(value)
		this.ensureLengthIsLessThan30Characters(value)
	}

	private ensureLengthIsLessThan30Characters(value: string): void {
		if (value.length > 30) {
			throw new MessageNameLengthExceeded(
				`The Message Name <${value}> has more than 30 characters`,
			)
		}
	}
}
