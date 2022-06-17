import './Message.css';


const Message = ({id, value, onClick, time, edit, toggleSelectedState, isSelect}) => { //мб нужен selected?

    const messEdited = edit ? '(edited)' : '';


    return (
        <div 
            id={id} 
            className={`message ${(isSelect) ? toggleSelectedState : 'hide'}-message`}

            value={value} 
            onClick={onClick}
            >
            {value}
            <div className='message-time'>{time}{messEdited}</div>
        </div>
    )
}

export default Message;