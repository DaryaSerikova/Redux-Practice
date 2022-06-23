import { getDateConverting } from '../../utils/getDateConverting';

import './ReplyMessage.css';
import '../Message/Message.css';



const ReplyMessage = ({ id, value, onClick, time, edit, toggleSelectedState, isSelect, replyMessage }) => {

  const messEdited = edit ? '(edited)' : '';
  console.log("replyMessage", replyMessage)

  let convertedDate = getDateConverting(replyMessage.date);
  // let truncatedValue = getTruncatedValue(value);

  return (
    <div 
      id={id} 
      className={`message ${(isSelect) ? toggleSelectedState : 'hide'}-message`}

      value={value} 
      onClick={onClick}
      >

      {value}
      {/* {truncatedValue} */}


      <div className='message-with-vertical-line'>
        <div className='vertical-line'></div>
        <div className='reply-message'>

          <div className='message-info'>
            <div className='message-sender'>Darya Serikova</div>
            <div className='date-and-time'>{convertedDate} at {replyMessage.time}</div>
          </div>

          {replyMessage.value}

        </div>
      </div>

      <div className='message-time'>{time}{messEdited}</div>
    </div>
  )
}

export default ReplyMessage;