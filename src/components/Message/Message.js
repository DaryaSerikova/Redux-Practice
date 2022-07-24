import './Message.css';
import classnames from 'classnames';
import { cnMessage } from './MessageClassname';



const Message = ({id, value, onClick, time, edit, toggleSelectedState, isSelect, messageState}) => { //мб нужен selected?

    const messEdited = edit ? '(edited)' : '';

    
    return (
        <div 
            id={id} 
            // className={`message ${(isSelect && (messageState!=='reply'&&messageState!=='forward')) ? toggleSelectedState : 'hide'}-message`}
            // className={classnames(
            //     'message', {
            //         [`${toggleSelectedState}-message`]: (isSelect && (messageState!=='reply'&&messageState!=='forward')),
            //         'hide-message': !(isSelect && (messageState!=='reply'&&messageState!=='forward'))
            //     }
            // )}
            className={cnMessage(toggleSelectedState, isSelect, messageState)}

            value={value} 
            onClick={onClick}
            >
            {value}
            <div className='message-time'>{time}{messEdited}</div>
        </div>
    )
}

export default Message;