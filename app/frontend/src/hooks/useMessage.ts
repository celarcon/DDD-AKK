import { useReducer, useEffect } from 'react'
import { actions, reducer } from './../sections/message/reducer'
import { MessageService } from '../services/MessageService'
const initialState = {}

export const useMessage = () => {
	const [messages, dispatch] = useReducer(reducer, initialState)
	const { addMessage, initMessages } = actions(dispatch)

	useEffect(() => {
		const fetchData = async () => {
			const data = await MessageService.retrieve()
			console.log(data)
			initMessages(
				data.reduce((obj, item) => {
					return {
						...obj,
						[item.id]: item,
					}
				}, {}),
			)
		}
		fetchData()
	}, [])

	const addMessageToApi = async msg => {
		addMessage(msg)
		await MessageService.creteate(msg)
	}

	const messagesArray = Object.entries(messages).map(([key]) => {
		return messages[key]
	})

	return [messagesArray, addMessageToApi]
}
