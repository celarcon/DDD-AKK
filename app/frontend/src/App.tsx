import { Header } from './sections/header/Header'
import { MessageCreate } from './sections/message/MessageCreate'
import { Messages } from './sections/message/Messages'
import { MessageContextProvider } from './contexts/MessageContext'

export function App() {
	return (
		<div className='app'>
			<Header />
			<MessageContextProvider>
				<Messages />
				<MessageCreate />
			</MessageContextProvider>
		</div>
	)
}
