import { useState, useContext } from 'react'
import { MessageContext } from '../../contexts/MessageContext'
import { useTranslation } from 'react-i18next'
import {
	NAME,
	WRITE_A_MESSAGE,
} from '../../i18n/translations/constants/Translates'

export const MessageCreate = () => {
	const [t] = useTranslation('global')
	const [message, setMessage] = useState<string>('')
	const [name, setName] = useState<string>('')
	const { addMessage } = useContext(MessageContext)
	const creeateMessage = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		addMessage({ id: `${Math.random()}`, name: name, text: message })
		setMessage('')
		setName('')
	}

	return (
		<div className='msg-create'>
			<form className='msg-form' onSubmit={e => creeateMessage(e)}>
				<div>
					<input
						className='input-text'
						type='text'
						placeholder={t(NAME)}
						onChange={e => setName(e.target.value)}
						value={name}
						required
					/>
				</div>
				<div>
					<textarea
						className='text-area'
						placeholder={t(WRITE_A_MESSAGE)}
						onChange={e => setMessage(e.target.value)}
						value={message}
						rows={4}
						required
					></textarea>
				</div>
				<div>
					<input className='btn-submit' type='submit' value='CREAR' />
				</div>
			</form>
		</div>
	)
}
