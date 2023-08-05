import { Uuid } from '../shared/domain/value-object/Uuid'

export class Message {
	readonly id: Uuid
	readonly name: string
	readonly text: string

	constructor(id: Uuid, name: string, text: string) {
		this.id = id
		this.name = name
		this.text = text
	}
}
