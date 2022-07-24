import { getDateConverting } from "../../utils/getDateConverting";



const ForwardedMessage = ({forwardedMessages, toggleSelectedState, WhiteOrGrayBackground} ) => {//  //messageGeneralProps, forwardedMessages

  console.log('all forwarded messages', forwardedMessages);


  // const MessWithVeticalLine = ({ forwardedMessage, convertedDate }) => {

  //   return (
  //     <div className='message-with-vertical-line'>
  //       <div className='vertical-line'></div>
  //       <div className='reply-message'>

  //       <div className='message-info'>
  //         <div className='message-sender'>Darya Serikova</div>
  //         <div className='date-and-time'>{convertedDate} at {forwardedMessage.time}</div>
  //       </div>

  //       {forwardedMessage.value}
  //       {(forwardedMessage.messages !== undefined) ? <MessWithVeticalLine forwardedMessage={forwardedMessage.messages}/>}

  //       </div>
  //     </div>
  //   )
  // }

  const ForwardedMess = forwardedMessages.map((forwardedMessage) => {
    
    let convertedDate = getDateConverting(forwardedMessage.date);
    console.log('(ForwardedMess) forwardedMessage', forwardedMessage);


    const MessWithVeticalLine = ({ forwardedMessage, convertedDate }) => {
      console.log('(MessWithVeticalLine) forwardedMessage', forwardedMessage)

      let subForwardedMessages = (forwardedMessage.messages !== undefined) ? forwardedMessage.messages : '';

      let getSubForwardedMess = (subForwardedMessages) => { 
        if (subForwardedMessages !== '') {
          let result = subForwardedMessages.map((subForwardedMessage) => {
            let subConvertedDate = getDateConverting(subForwardedMessage.date);
    
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
          
          {(forwardedMessage.messages !== undefined) ? subForwardedMess : ''}
  
          </div>
        </div>
      )
    }



    return (
      <>
        {console.log('toggleSelectedState', toggleSelectedState)}

        <div 
          id={forwardedMessage.id} 
          className={`forward-message ${WhiteOrGrayBackground}-message`}
          value={forwardedMessage.value} 
        >
          <MessWithVeticalLine forwardedMessage={forwardedMessage} convertedDate={convertedDate}/>
        </div>
      </>
    )

    
  })
  return ForwardedMess;
}

const ForwardedMessages = ({ id, value, onClick, time, edit, toggleSelectedState, isSelect, forwardedMessages, messageState}) => { 
  //messageGeneralProps, forwardedMessages

  const messEdited = edit ? '(edited)' : '';
  let WhiteOrGrayBackground = (!isSelect) ? 'hide' : (messageState==='select') ? toggleSelectedState : 'hide';


  return (
      <div 
        onClick={onClick} 
        className={`wrapper-forward-messages ${WhiteOrGrayBackground}-message`}
        id={id} 
        value={value} 
      >
        <div className='value-forward-messages'>{value}</div>

        <ForwardedMessage 
          forwardedMessages={forwardedMessages} 
          toggleSelectedState={toggleSelectedState} 
          isSelect={isSelect} 
          WhiteOrGrayBackground={WhiteOrGrayBackground}/>
        <div className='message-time'>{time}{messEdited}</div>
    
      </div>
  )
}

export default ForwardedMessages;