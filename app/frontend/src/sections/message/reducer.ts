import { MessagesTypeState, MessageType } from '../../types/Message'
import { Pager } from '../../types/Pager'

const ADD_MESSAGE = 'ADD_MESSAGE'
const INIT_MESSAGES = 'INIT_MESSAGES'
const REMOVE_MESSAGE = 'REMOVE_MESSAGE'
const PAGE_MESSAGES = 'PAGE_MESSAGES'
const INIT_PAGER = 'INIT_PAGER'

type Action = {
	type: string
	pager?: any
	message?: Record<string, string>
	messages?: Record<string, Record<string, string>>
}

export const reducer = (state: MessagesTypeState, action: Action) => {
	switch (action.type) {
		case INIT_MESSAGES:
			return action.messages
		case ADD_MESSAGE:
			return { [action.message.id]: action.message, ...state }
		case REMOVE_MESSAGE: {
			const newState = { ...state }
			delete newState[action.message.id]
			return { ...newState }
		}
		case PAGE_MESSAGES:
			return { ...state, ...action.messages }
		default:
			return state
	}
}

export const reducePager = (state: Pager, action: Action) => {
	switch (action.type) {
		case INIT_PAGER:
			return action.pager
		default:
			return state
	}
}

export const actions = (dispatch: React.Dispatch<any>) => {
	return {
		addMessage: (message: MessageType) =>
			dispatch({ type: ADD_MESSAGE, message }),
		reniveMessage: (message: MessageType) =>
			dispatch({ type: ADD_MESSAGE, message }),
		initMessages: (messages: MessagesTypeState) =>
			dispatch({ type: INIT_MESSAGES, messages }),
		retrivePage: (messages: MessagesTypeState) =>
			dispatch({ type: PAGE_MESSAGES, messages }),
		setPager: (pager: Pager) => dispatch({ type: INIT_PAGER, pager }),
	}
}
