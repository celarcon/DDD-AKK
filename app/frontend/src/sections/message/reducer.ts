import { MessagesTypeState, MessageType } from '../../types/Message'

const ADD_MESSAGE = 'ADD_MESSAGE'
const INIT_MESSAGES = 'INIT_MESSAGES'

type Action = {
	type: string
	message?: Record<string, string>
	messages?: Record<string, Record<string, string>>
}

export const reducer = (state: MessagesTypeState, action: Action) => {
	switch (action.type) {
		case INIT_MESSAGES:
			return action.messages
		case ADD_MESSAGE:
			return { ...state, [action.message.id]: action.message }
		default:
			return state
	}
}

export const actions = (dispatch: React.Dispatch<any>) => {
	return {
		addMessage: (message: MessageType) =>
			dispatch({ type: ADD_MESSAGE, message }),
		initMessages: (messages: MessagesTypeState) =>
			dispatch({ type: INIT_MESSAGES, messages }),
	}
}
