import './ReplyMessage.css';
import '../Message/Message.css';
// import Message from '../Message/Message';



const ReplyMessage = ({ id, value, onClick, time, edit, toggleSelectedState, isSelect }) => {

  const messEdited = edit ? '(edited)' : '';

  return (
    <div 
      id={id} 
      className={`message ${(isSelect) ? toggleSelectedState : 'hide'}-message`}

      value={value} 
      onClick={onClick}
      >
      {/* Начало. Это для быстрого тестирования. Это от ReplyMessage */}

      {value}
      <div className='message-with-vertical-line'>
        <div className='vertical-line'></div>
        <div className='reply-message'>
          <div className='message-info'>
            <div className='message-sender'>Darya Serikova</div>
            <div className='date-and-time'>17 июня в 11:45</div>
          </div>
          {/* {value} */} Здесь должно быть сообщение
        </div>
      </div>

      <div className='message-time'>{time}{messEdited}</div>
    </div>
  )
}

export default ReplyMessage;