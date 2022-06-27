import { getDateConverting } from "../../utils/getDateConverting";
// import ReplyMessage from "../ReplyMessage.js/ReplyMessage";



const ForwardedMessage = ({forwardedMessages, toggleSelectedState, WhiteOrGrayBackground} ) => {//  //messageGeneralProps, forwardedMessages
// const ForwardedMessage = (messageGeneralProps, forwardedMessages) => {//  //{forwardedMessages, toggleSelectedState, isSelect} 
//   let {toggleSelectedState, isSelect} = messageGeneralProps;

  console.log('forwardedMessages', forwardedMessages);


  const MessWithVeticalLine = ({ forwardedMessage, convertedDate }) => {

    return (
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
    )
  }

  const ForwardedMess = forwardedMessages.map((forwardedMessage)=> {
    // console.log("One forwardedMessage", forwardedMessage)
    
    let convertedDate = getDateConverting(forwardedMessage.date);

    return (
      <>
        {/* {console.log('isSelect', isSelect)} */}
        {console.log('toggleSelectedState', toggleSelectedState)}

        {/* <ReplyMessage 
          messageGeneralProps={messageGeneralProps}
          forwardedMessage={forwardedMessage} 
        /> */}

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
  // console.log('value:', value, ', id:', id, ', time:', time)
  let WhiteOrGrayBackground = (!isSelect) ? 'hide' : (messageState==='select') ? toggleSelectedState : 'hide';


  return (
      <div 
        onClick={onClick} 
        className={`wrapper-forward-messages ${WhiteOrGrayBackground}-message`}
        id={id} 
        value={value} 
      >
        <div className='value-forward-messages'>{value}</div>
        {/* <ForwardedMessage forwardedMessages={forwardedMessages} messageGeneralProps={messageGeneralProps}/> */}
        <ForwardedMessage forwardedMessages={forwardedMessages} toggleSelectedState={toggleSelectedState} isSelect={isSelect} WhiteOrGrayBackground={WhiteOrGrayBackground}/>
        <div className='message-time'>{time}{messEdited}</div>
    
      </div>
  )
}

export default ForwardedMessages;