export class MessageNameLengthExceeded extends Error {
	constructor(value: string) {
		super(value)
	}
}
