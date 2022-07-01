import { getDateConverting } from "../../utils/getDateConverting";



// const MessageWithVerticalLine = ({ replyOrForwardedMessage, convertedDate, updateToNewCurrentUnusualMessage, currentUnusualMessage }) => {

//   console.log('replyOrForwardedMessage', replyOrForwardedMessage);
//   if (replyOrForwardedMessage.message) console.log('replyOrForwardedMessage.message', replyOrForwardedMessage.message)

//   let subConvertedDate = (replyOrForwardedMessage.message !== undefined) ? getDateConverting(replyOrForwardedMessage.message.date) : ''
//   console.log('subConvertedDate', subConvertedDate)

  
//   return (
//     <div className='message-with-vertical-line'>
//       <div className='vertical-line'></div>
//       <div className='reply-message'>

//         <div className='message-info'>
//           <div className='message-sender'>Darya Serikova</div>
//           <div className='date-and-time'>{convertedDate} at {replyOrForwardedMessage.time}</div>

//         </div>

//         {replyOrForwardedMessage.value}

//         {(replyOrForwardedMessage.message !== undefined) ? <MessageWithVerticalLine replyMessage={replyOrForwardedMessage.message} convertedDate={subConvertedDate}/> : ''}

//       </div>
//     </div>
//   )
// }

// export default MessageWithVerticalLine;



// const ForwardedMessage = ({forwardedMessages, toggleSelectedState, WhiteOrGrayBackground} ) => {//  //messageGeneralProps, forwardedMessages
const ForwardedOrReplyMessages = ({forwardedOrReplyMessages, toggleSelectedState, WhiteOrGrayBackground} ) => {//  //messageGeneralProps, forwardedMessages

  
  console.log('all forwarded or reply messages', forwardedOrReplyMessages);
  
  const ForwardedMess = forwardedOrReplyMessages.map((forwardedOrReplyMessage) => {


    
    let convertedDate = getDateConverting(forwardedOrReplyMessage.date);
    console.log('(MessageWithVertical) forwardedOrReplyMessage', forwardedOrReplyMessage);


    const MessWithVeticalLine = ({ forwardedOrReplyMessage, convertedDate }) => {
      console.log('(MessWithVeticalLine) forwardedOrReplyMessage', forwardedOrReplyMessage)
      // console.log('(MessWithVeticalLine) forwardedMessage.length', forwardedMessage.length)
      

      let subForwardedOrReplyMessages = (forwardedOrReplyMessage.messages !== undefined) ? forwardedOrReplyMessage.messages : '';

      let getSubForwardedMess = (subForwardedOrReplyMessages) => { 
        if (subForwardedOrReplyMessages !== '') {
          let result = subForwardedOrReplyMessages.map((subForwardedOrReplyMessage) => {
            let subConvertedDate = getDateConverting(subForwardedOrReplyMessage.date);
            // console.log('subConvertedDate', subConvertedDate)
            // console.log('subForwardedMessage', subForwardedMessage)
    
            return <MessWithVeticalLine forwardedMessage={subForwardedOrReplyMessage} convertedDate={subConvertedDate}/>
          })
          return result;
        } else {
          return '';
        }
      }
      let subForwardedMess = (forwardedOrReplyMessage.messages !== undefined) ? getSubForwardedMess(subForwardedOrReplyMessages) : '';



      return (
        <div className='message-with-vertical-line'>
          <div className='vertical-line'></div>
          <div className='reply-message'>

          <div className='message-info'>
            <div className='message-sender'>Darya Serikova</div>
            <div className='date-and-time'>{convertedDate} at {forwardedOrReplyMessage.time}</div>
          </div>

          {forwardedOrReplyMessage.value}

          {(forwardedOrReplyMessage.messages !== undefined) ? subForwardedMess : ''}

          </div>
        </div>
      )
    }



  return (
    <>
      {console.log('toggleSelectedState', toggleSelectedState)}

      <div 
        id={forwardedOrReplyMessages.id} 
        className={`forward-message ${WhiteOrGrayBackground}-message`}
        value={forwardedOrReplyMessages.value} 
      >
        <MessWithVeticalLine forwardedOrReplyMessages={forwardedOrReplyMessages} convertedDate={convertedDate}/>
      </div>
    </>
  )
  
      
  })
    return ForwardedMess;
  }

  export default ForwardedOrReplyMessages;









// из forward Рабочий пример
// const MessWithVeticalLine = ({ forwardedMessage, convertedDate }) => {
//   console.log('(MessWithVeticalLine) forwardedMessage', forwardedMessage)
//   // console.log('(MessWithVeticalLine) forwardedMessage.length', forwardedMessage.length)
  

//   let subForwardedMessages = (forwardedMessage.messages !== undefined) ? forwardedMessage.messages : '';

//   let getSubForwardedMess = (subForwardedMessages) => { 
//     if (subForwardedMessages !== '') {
//       let result = subForwardedMessages.map((subForwardedMessage) => {
//         let subConvertedDate = getDateConverting(subForwardedMessage.date);
//         // console.log('subConvertedDate', subConvertedDate)
//         // console.log('subForwardedMessage', subForwardedMessage)

//         return <MessWithVeticalLine forwardedMessage={subForwardedMessage} convertedDate={subConvertedDate}/>
//       })
//       return result;
//     } else {
//       return '';
//     }
// }
//   let subForwardedMess = (forwardedMessage.messages !== undefined) ? getSubForwardedMess(subForwardedMessages) : '';



//   return (
//     <div className='message-with-vertical-line'>
//       <div className='vertical-line'></div>
//       <div className='reply-message'>

//       <div className='message-info'>
//         <div className='message-sender'>Darya Serikova</div>
//         <div className='date-and-time'>{convertedDate} at {forwardedMessage.time}</div>
//       </div>

//       {forwardedMessage.value}
//       {/* {(forwardedMessage.messages !== undefined) ? <MessWithVeticalLine forwardedMessage={forwardedMessage.messages} convertedDate={subConvertedDate}/> : ''} */}
//       {/* {(forwardedMessage.messages !== undefined) ? <MessWithVeticalLine forwardedMessage={forwardedMessage.messages} convertedDate={convertedDate}/> : ''} */}
//       {(forwardedMessage.messages !== undefined) ? subForwardedMess : ''}

//       </div>
//     </div>
//   )
// }