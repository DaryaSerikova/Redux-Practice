import { getDateConverting } from '../../utils/getDateConverting';
// import MessageWithVerticalLine from '../MessageWithVerticalLine';

import './ReplyMessage.css';
import '../Message/Message.css';



const ReplyMessage = ({ id, value, onClick, time, edit, toggleSelectedState, isSelect, replyMessage, messageState,
  // forwardedMessage 
}) => { //messageGeneralProps, forwardedMessage

  const messEdited = edit ? '(edited)' : '';
  let convertedDate = getDateConverting(replyMessage.date);


  const MessageWithVerticalLine = ({replyMessage}) => {

    
    return (
      <div className='message-with-vertical-line'>
        <div className='vertical-line'></div>
        <div className='reply-message'>

          <div className='message-info'>
            <div className='message-sender'>Darya Serikova</div>
            <div className='date-and-time'>{convertedDate} at {replyMessage.time}</div>
          </div>

          {replyMessage.value}

          {(replyMessage.message !== undefined) ? <MessageWithVerticalLine replyMessage={replyMessage.message}/> : ''}
          

        </div>
      </div>
    )
  }

  let WhiteOrGrayBackgroundReply = (!isSelect) ? 'hide' : (messageState==='select') ? toggleSelectedState : 'hide';


  return (
    <div 
      id={id}
      className={`message ${WhiteOrGrayBackgroundReply}-message`}
      value={value}
      onClick={onClick}
      >

      {value}

      <MessageWithVerticalLine replyMessage={replyMessage}/>
      {/* <MessageWithVerticalLine replyOrForwardedMessage={replyMessage}/> */}


      {<div className='message-time'>{time}{messEdited}</div>}
    </div>
  )
}

export default ReplyMessage;