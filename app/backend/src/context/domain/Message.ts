export class Message {
	readonly id: string
	readonly name: string
	readonly text: string
	constructor(id: string, name: string, text: string) {
		this.id = id
		this.name = name
		this.text = text
	}
}
