import { useContext } from 'react'
import { MessageContext } from '../../contexts/MessageContext'
import { MessageCard } from './MessageCard'

export const Messages = () => {
	const { messages } = useContext(MessageContext)

	return (
		<div className='msg-card'>
			<div className='mb-5px'>
				<label>Mensages</label>
			</div>
			<div className='msg-item-container'>
				{messages.map(msg => (
					<MessageCard key={msg.id} msg={msg} />
				))}
			</div>
		</div>
	)
}
