import { getDateConverting } from "../utils/getDateConverting";


const MessageWithVerticalLine = ({ replyOrForwardedMessage }) => {

  console.log('replyOrForwardedMessage', replyOrForwardedMessage);
  if (replyOrForwardedMessage.message) console.log('replyOrForwardedMessage.message', replyOrForwardedMessage.message)

  let convertedDate = getDateConverting(replyOrForwardedMessage.date);
    
  return (
    <div className='message-with-vertical-line'>
      <div className='vertical-line'></div>
      <div className='reply-message'>

        <div className='message-info'>
          <div className='message-sender'>Darya Serikova</div>
          <div className='date-and-time'>{convertedDate} at {replyOrForwardedMessage.time}</div>
        </div>

        {replyOrForwardedMessage.value}

        {(replyOrForwardedMessage.message !== undefined) ? <MessageWithVerticalLine replyMessage={replyOrForwardedMessage.message}/> : ''}

      </div>
    </div>
  )
}

export default MessageWithVerticalLine;