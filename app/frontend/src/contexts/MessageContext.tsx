import { createContext } from 'react'
import { useMessage } from '../hooks/useMessage'

type Children = {
	children: string | JSX.Element | JSX.Element[]
}

const MessageContext = createContext<any>({})

const MessageContextProvider = ({ children }: Children) => {
	const [messages, addMessage] = useMessage()

	return (
		<MessageContext.Provider value={{ messages, addMessage }}>
			{children}
		</MessageContext.Provider>
	)
}

export { MessageContext, MessageContextProvider }
