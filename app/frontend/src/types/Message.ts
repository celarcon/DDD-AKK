export type MessageType = {
	id: string
	name: string
	text: string
}

export type MessagesType = Record<string, MessageType>

export type MessagesTypeState = Record<
	string,
	{
		id?: string
		name?: string
		text?: string
	}
>
