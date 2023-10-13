import { useContext, useEffect } from 'react'
import { MessageContext } from '../../contexts/MessageContext'
import { MessageCard } from './MessageCard'
import { MESSAGES } from '../../i18n/translations/constants/Translates'
import { useTranslation } from 'react-i18next'
import { useNearScreen } from '../../hooks/useNearScreen'

export const Messages = () => {
	const [t] = useTranslation('global')
	const { messages, pager } = useContext(MessageContext)
	return (
		<div className='msg-card'>
			<div className='mb-5px'>
				<label>{t(MESSAGES)}</label>
			</div>
			<div className='msg-item-container'>
				{pager.current == undefined && (
					<div className='centerLoader'>
						<div className='loader'></div>
					</div>
				)}
				{messages.map(msg => (
					<MessageCard key={msg.id} msg={msg} />
				))}
				<LazyLoad />
			</div>
		</div>
	)
}

export const LazyLoad = () => {
	const { retrievePager, pager } = useContext(MessageContext)
	const { isNearScreen, fromRef } = useNearScreen()

	useEffect(() => {
		if (isNearScreen && pager.current < pager.total_pages) {
			retrievePager()
		}
	}, [isNearScreen])

	return (
		<div ref={fromRef} className='centerLoader'>
			{isNearScreen && pager.current < pager.total_pages ? (
				<div className='loader'></div>
			) : null}
		</div>
	)
}
