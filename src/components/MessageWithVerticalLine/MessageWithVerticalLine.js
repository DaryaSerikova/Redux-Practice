import { getDateConverting } from "../../utils/getDateConverting";


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


const MessWithVeticalLine = ({ forwardedMessage, convertedDate }) => {
  console.log('(MessWithVeticalLine) forwardedMessage', forwardedMessage)
  // console.log('(MessWithVeticalLine) forwardedMessage.length', forwardedMessage.length)
  

  let subForwardedMessages = (forwardedMessage.messages !== undefined) ? forwardedMessage.messages : '';

  let getSubForwardedMess = (subForwardedMessages) => { 
    if (subForwardedMessages !== '') {
      let result = subForwardedMessages.map((subForwardedMessage) => {
        let subConvertedDate = getDateConverting(subForwardedMessage.date);
        // console.log('subConvertedDate', subConvertedDate)
        // console.log('subForwardedMessage', subForwardedMessage)

        return <MessWithVeticalLine forwardedMessage={subForwardedMessage} convertedDate={subConvertedDate}/>
      })
      return result;
    } else {
      return '';
    }
}
  let subForwardedMess = (forwardedMessage.messages !== undefined) ? getSubForwardedMess(subForwardedMessages) : '';



  return (
    <div className='message-with-vertical-line'>
      <div className='vertical-line'></div>
      <div className='reply-message'>

      <div className='message-info'>
        <div className='message-sender'>Darya Serikova</div>
        <div className='date-and-time'>{convertedDate} at {forwardedMessage.time}</div>
      </div>

      {forwardedMessage.value}
      {/* {(forwardedMessage.messages !== undefined) ? <MessWithVeticalLine forwardedMessage={forwardedMessage.messages} convertedDate={subConvertedDate}/> : ''} */}
      {/* {(forwardedMessage.messages !== undefined) ? <MessWithVeticalLine forwardedMessage={forwardedMessage.messages} convertedDate={convertedDate}/> : ''} */}
      {(forwardedMessage.messages !== undefined) ? subForwardedMess : ''}

      </div>
    </div>
  )
}