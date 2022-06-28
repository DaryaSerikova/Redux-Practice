import { getDateConverting } from "../../utils/getDateConverting";
// import ReplyMessage from "../ReplyMessage.js/ReplyMessage";



const ForwardedMessage = ({forwardedMessages, toggleSelectedState, WhiteOrGrayBackground} ) => {//  //messageGeneralProps, forwardedMessages
// const ForwardedMessage = (messageGeneralProps, forwardedMessages) => {//  //{forwardedMessages, toggleSelectedState, isSelect} 
//   let {toggleSelectedState, isSelect} = messageGeneralProps;

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
    // console.log("One forwardedMessage", forwardedMessage)

    // if ()
    
    let convertedDate = getDateConverting(forwardedMessage.date);
    console.log('(ForwardedMess) forwardedMessage', forwardedMessage);


    const MessWithVeticalLine = ({ forwardedMessage, convertedDate }) => {
      console.log('(MessWithVeticalLine) forwardedMessage', forwardedMessage)
      console.log('(MessWithVeticalLine) forwardedMessage.length', forwardedMessage.length)
      // if(forwardedMessage.length)
      // if (forwardedMessage.messages !== undefined) {
      //   console.log('(MessWithVeticalLine, if) forwardedMessage.messages:', forwardedMessage.messages)
      //   console.log('(MessWithVeticalLine, if) forwardedMessage.messages.date:', forwardedMessage.messages.date)
      //   let subForwardedMessages = forwardedMessage.messages;
      //   let subForwardedMess = subForwardedMessages.map((subForwardedMessage) => {
      //     let subConvertedDate = getDateConverting(subForwardedMessage.date);
      //     console.log('subConvertedDate', subConvertedDate)
      //     console.log('subForwardedMessage', subForwardedMessage)


      //     return <MessWithVeticalLine forwardedMessage={subForwardedMessage} convertedDate={subConvertedDate}/>
      //   })
      //   return subForwardedMess;

      // }
      

      let subForwardedMessages = (forwardedMessage.messages !== undefined) ? forwardedMessage.messages : '';

      let getSubForwardedMess = (subForwardedMessages) => { 
        if (subForwardedMessages !== '') {
          let result = subForwardedMessages.map((subForwardedMessage) => {
            let subConvertedDate = getDateConverting(subForwardedMessage.date);
            console.log('subConvertedDate', subConvertedDate)
            console.log('subForwardedMessage', subForwardedMessage)
    
    
            return <MessWithVeticalLine forwardedMessage={subForwardedMessage} convertedDate={subConvertedDate}/>
          })
          return result;
        } else {
          return '';
        }
}
      let subForwardedMess = (forwardedMessage.messages !== undefined) ? getSubForwardedMess(subForwardedMessages) : '';




      // let subConvertedDate = (forwardedMessage.messages !== undefined) ? getDateConverting(forwardedMessage.messages.date) : '';

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

const ForwardedMessages = ({id, value, onClick, time, edit, toggleSelectedState, isSelect, forwardedMessages, messageState}) => { //messageGeneralProps, forwardedMessages
// const ForwardedMessages = (messageGeneralProps, {forwardedMessages}) => { //{id, value, onClick, time, edit, toggleSelectedState, isSelect, forwardedMessages}
  // let {id, value, onClick, time, edit, toggleSelectedState, isSelect} = messageGeneralProps;


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