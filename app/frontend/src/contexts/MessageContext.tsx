import { createContext } from 'react'
import { useMessage } from '../hooks/useMessage'

type Children = {
	children: string | JSX.Element | JSX.Element[]
}

const MessageContext = createContext<any>({})

const MessageContextProvider = ({ children }: Children) => {
	const [messages, addMessage, retrievePager, pager] = useMessage()

	return (
		<MessageContext.Provider
			value={{ messages, addMessage, retrievePager, pager }}
		>
			{children}
		</MessageContext.Provider>
	)
}

export { MessageContext, MessageContextProvider }
