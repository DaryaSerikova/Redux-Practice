





// const OneForwardedMessage = () => {

//   return (
//     <div 
//       id={id} 
//       className={`forward-message ${(isSelect) ? toggleSelectedState : 'hide'}-message`}

//       value={value} 
//       onClick={onClick}
//     >
//       <div className='message-with-vertical-line'>
//           <div className='vertical-line'></div>
//           <div className='reply-message'>

//           <div className='message-info'>
//             <div className='message-sender'>Darya Serikova</div>
//             {/* <div className='date-and-time'>{convertedDate} at {replyMessage.time}</div> */}
//             <div className='date-and-time'>29 May at 8:45</div>
//           </div>

//           {/* {replyMessage.value} */}
//           Пересылаемое сообщение

//           </div>
//       </div>
//     </div>
//   )
// }



const ForwardedMessages = () => {


  const OneForwardedMessage = () => {

    return (
      <div 
        id={id} 
        className={`forward-message ${(isSelect) ? toggleSelectedState : 'hide'}-message`}
  
        value={value} 
      >
        <div className='message-with-vertical-line'>
            <div className='vertical-line'></div>
            <div className='reply-message'>
  
            <div className='message-info'>
              <div className='message-sender'>Darya Serikova</div>
              {/* <div className='date-and-time'>{convertedDate} at {replyMessage.time}</div> */}
              <div className='date-and-time'>29 May at 8:45</div>
            </div>
  
            {/* {replyMessage.value} */}
            Пересылаемое сообщение
  
            </div>
        </div>
      </div>
    )
  }

  const messEdited = edit ? '(edited)' : '';

  return (
      <div onClick={onClick} className={`wrapper-forward-messages ${(isSelect) ? toggleSelectedState : 'hide'}-message`}>
    
        <div className='value-forward-messages'>{value}</div>
    
        <OneForwardedMessage/>
        <OneForwardedMessage/>
        <OneForwardedMessage/>
    
        <div className='message-time'>{time}{messEdited}</div>
    
      </div>
  )
}