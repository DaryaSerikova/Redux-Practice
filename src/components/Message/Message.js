import './Message.css'

export const Message = ({id, value, onClick, time, edited, currentMessageId}) => {
    return (
        <div 
            key={id} 
            className='message'
            value={value} 
            onClick={onClick}
            >
            {value}
            {/* {edited&&'(edited)'} */}
            <div className='message-time'>{time}</div>
        </div>
    )
}