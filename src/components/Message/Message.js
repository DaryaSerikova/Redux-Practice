import './Message.css';


const Message = ({id, value, onClick, time, edit, toggleSelectedMessage}) => { //мб нужен selected?

    const messEdited = edit ? '(edited)' : '';

    return (
        <div 
            id={id} 
            className={`message`}
            // className={`message ${toggleSelectedMessage}-message`}
            value={value} 
            onClick={onClick}
            >
            {value}
            <div className='message-time'>{time}{messEdited}</div>
        </div>
    )
}

export default Message;