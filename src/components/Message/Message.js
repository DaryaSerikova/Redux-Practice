import './Message.css'

const Message = ({id, value, onClick, time, edit, currentMessageId}) => {
    // console.log('id === currentMessageId', (id === currentMessageId), ',id:', id,',currentMessageId', currentMessageId,);
    // console.log('edited', edit)
    // console.log('(id === currentMessageId) && edited', (id === currentMessageId) && edit)

    const messEdited = edit ? '(edited)' : '';

    return (
        <div 
            id={id} 
            className='message'
            value={value} 
            onClick={onClick}
            >
            {value}
            <div className='message-time'>{time}{messEdited}</div>
        </div>
    )
}

export default Message;