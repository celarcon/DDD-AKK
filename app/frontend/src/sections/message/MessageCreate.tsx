import { useState, useContext } from 'react'
import { MessageContext } from '../../contexts/MessageContext'

export const MessageCreate = () => {
	const [message, setMessage] = useState<string>('')
	const { addMessage } = useContext(MessageContext)
	const creeateMessage = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		addMessage({ id: `${Math.random()}`, name: 'randName', text: message })
		setMessage('')
	}

	return (
		<div className='msg-create'>
			<form className='msg-form' onSubmit={e => creeateMessage(e)}>
				<div>
					<textarea
						className='text-area'
						placeholder='Escribe un mensage...'
						onChange={e => setMessage(e.target.value)}
						value={message}
						rows={4}
					></textarea>
				</div>
				<div>
					<input className='btn-submit' type='submit' value='CREAR' />
				</div>
			</form>
		</div>
	)
}
