import { useContext } from 'react'
import { MessageContext } from '../../contexts/MessageContext'
import { MessageCard } from './MessageCard'
import { MESSAGES } from '../../i18n/translations/constants/Translates'
import { useTranslation } from 'react-i18next'

export const Messages = () => {
	const [t] = useTranslation('global')
	const { messages } = useContext(MessageContext)

	return (
		<div className='msg-card'>
			<div className='mb-5px'>
				<label>{t(MESSAGES)}</label>
			</div>
			<div className='msg-item-container'>
				{messages.map(msg => (
					<MessageCard key={msg.id} msg={msg} />
				))}
			</div>
		</div>
	)
}
