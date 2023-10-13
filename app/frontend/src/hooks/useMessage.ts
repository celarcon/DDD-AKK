import { useReducer, useEffect } from 'react'
import { actions, reducer, reducePager } from './../sections/message/reducer'
import { MessageService } from '../services/MessageService'
const initialState = {}

export const useMessage = () => {
	const [messages, dispatch] = useReducer(reducer, initialState)
	const [pager, dispatchPager] = useReducer(reducePager, initialState)
	const { addMessage, initMessages, retrivePage } = actions(dispatch)
	const { setPager } = actions(dispatchPager)
	useEffect(() => {
		const fetchData = async () => {
			const messagesResponse = await MessageService.retrieve(1)
			setPager(messagesResponse.pager)
			initMessages(
				messagesResponse.data.reduce((obj, item) => {
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

	const retrievePager = async () => {
		if (pager.current < pager.total_pages) {
			const page = pager.current + 1
			const messagesResponse = await MessageService.retrieve(page)
			setPager(messagesResponse.pager)
			retrivePage(
				messagesResponse.data.reduce((obj, item) => {
					return {
						...obj,
						[item.id]: item,
					}
				}, {}),
			)
		}
	}

	const messagesArray = Object.entries(messages).map(([key]) => {
		return messages[key]
	})

	return [messagesArray, addMessageToApi, retrievePager, pager]
}
