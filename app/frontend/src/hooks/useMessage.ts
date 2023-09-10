import { useReducer, useEffect } from 'react'
import { actions, reducer } from './../sections/message/reducer'

const initialState = {}

export const useMessage = () => {
	const [messages, dispatch] = useReducer(reducer, initialState)
	const { addMessage, initMessages } = actions(dispatch)
	useEffect(() => {
		fetch(import.meta.env.VITE_REACT_APP_API).then(result =>
			console.log(result),
		)
		console.log(import.meta.env.VITE_REACT_APP_API)
		initMessages({ '2': { id: '2', name: 'name2', text: 'text2' } })
	}, [])

	const messagesArray = Object.entries(messages).map(([key]) => {
		return messages[key]
	})

	return [messagesArray, addMessage]
}
