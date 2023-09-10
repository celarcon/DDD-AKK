export const MessageCard = ({ msg }: { msg: any }) => {
	return (
		<div className='msg-item'>
			<label>{msg.name}</label>
			<p>{msg.text}</p>
		</div>
	)
}
