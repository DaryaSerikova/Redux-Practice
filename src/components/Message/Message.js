import './Message.css';


const Message = ({id, value, onClick, time, edit, toggleSelectedMessage, isSelect}) => { //мб нужен selected?

    const messEdited = edit ? '(edited)' : '';

    return (
        <div 
            id={id} 
            // className={`message`}
            className={`message ${(isSelect) ? toggleSelectedMessage : 'hide'}-message`}
            value={value} 
            onClick={onClick}
            >
            {value}
            <div className='message-time'>{time}{messEdited}</div>
        </div>
    )
}

export default Message;