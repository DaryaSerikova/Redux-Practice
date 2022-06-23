import { getDateConverting } from "../../utils/getDateConverting"



const ForwardedMessage = ({forwardedMessages, toggleSelectedState, isSelect}) => {

  console.log('forwardedMessages', forwardedMessages);

  const ForwardedMess = forwardedMessages.map((forwardedMessage)=> {
    console.log("One forwardedMessage", forwardedMessage)
    
    let convertedDate = getDateConverting(forwardedMessage.date);

    return (
      <>
        {/* {console.log('isSelect', isSelect)}
        {console.log('toggleSelectedState', toggleSelectedState)} */}

        <div 
          id={forwardedMessage.id} 
          className={`forward-message ${(isSelect) ? toggleSelectedState : 'hide'}-message`}
          // className={`forward-message`}

    
          value={forwardedMessage.value} 
        >

          <div className='message-with-vertical-line'>
              <div className='vertical-line'></div>
              <div className='reply-message'>
    
              <div className='message-info'>
                <div className='message-sender'>Darya Serikova</div>
                <div className='date-and-time'>{convertedDate} at {forwardedMessage.time}</div>
              </div>
    
              {forwardedMessage.value}
    
              </div>
          </div>

        </div>
      </>
    )

    
  })
  return ForwardedMess;
}

const ForwardedMessages = ({id, value, onClick, time, edit, forwardedMessages,
  toggleSelectedState, isSelect}) => {

  const messEdited = edit ? '(edited)' : '';
  console.log('value:', value, ', id:', id, ', time:', time)
  return (
      <div 
        onClick={onClick} 
        className={`wrapper-forward-messages ${(isSelect) ? toggleSelectedState : 'hide'}-message`}
        // className={`wrapper-forward-messages`}

        id={id} 
        value={value} 
      >
        <div className='value-forward-messages'>{value}</div>
        <ForwardedMessage forwardedMessages={forwardedMessages} toggleSelectedState={toggleSelectedState} isSelect={isSelect}/>
        <div className='message-time'>{time}{messEdited}</div>
    
      </div>
  )
}

export default ForwardedMessages;