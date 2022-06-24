import { getDateConverting } from '../../utils/getDateConverting';

import './ReplyMessage.css';
import '../Message/Message.css';



const ReplyMessage = ({ id, value, onClick, time, edit, toggleSelectedState, isSelect, replyMessage, 
  // messageState, 
  // forwardedMessage 
}) => { //messageGeneralProps, forwardedMessage

// const ReplyMessage = ({ id, value, onClick, time, edit, toggleSelectedState, isSelect, replyMessage, messageState, forwardedMessage }) => { //messageGeneralProps, forwardedMessage

  
  // let {id, value, onClick, time, edit,
  //   toggleSelectedState, replyMessage, isSelect, messageState} = {...messageGeneralProps};


  const messEdited = edit ? '(edited)' : '';
  // if (messageState === 'reply') console.log("replyMessage", replyMessage);

  // console.log("replyMessage", replyMessage);
  // console.log('(в ReplyMessage) id:', id);
  // console.log('(в ReplyMessage) forwardedMessage', forwardedMessage)
  // console.log('(в ReplyMessage) forwardedMessage', forwardedMessage)



  // let getForwardOrReplyMess = (messageState) => {
  //   switch(messageState) {
  //     case 'reply':
  //       console.log("case 'reply' ")
  //       return replyMessage;

  //     case 'forward':
  //       console.log("case 'forward' ");
  //       console.log('forwardedMessage', forwardedMessage)
  //       return forwardedMessage;

  //     // при нажатии на кнопку message state is empty, не варианта для empty надо продумать этот вариант
  //     default: 
  //     console.log("case 'default' ");
  //     let res = (replyMessage !== undefined) 
  //       ? replyMessage 
  //       : (forwardedMessage !== undefined) ? forwardedMessage : ''
  //       return res;
  //   }
  // }

  // let forwardOrReplyMess = getForwardOrReplyMess(messageState); 
  // console.log('forwardOrReplyMess:', forwardOrReplyMess)
  // let convertedDate = getDateConverting(forwardOrReplyMess.date);

  let convertedDate = getDateConverting(replyMessage.date);


  return (
    <div 
      // id={(messageState === 'reply') ? id : (messageState === 'forward') ? forwardedMessage.id : ''} // {forwardedMessage.id}
      // className={`${(messageState === 'reply') ? `message`: (messageState === 'forward') ? 'forward-message' : ''} ${(isSelect) ? toggleSelectedState : 'hide'}-message`}
      // value={(messageState === 'reply') ? value: (messageState === 'forward') ? forwardedMessage.value : ''} //{}
      id={id}
      className={`message ${(isSelect) ? toggleSelectedState : 'hide'}-message`}
      value={value}
      onClick={onClick}
      >

      {value}
      {/* {(messageState === 'reply') ? value : ''} */}


      <div className='message-with-vertical-line'>
        <div className='vertical-line'></div>
        <div className='reply-message'>

          <div className='message-info'>
            <div className='message-sender'>Darya Serikova</div>
            <div className='date-and-time'>{convertedDate} at {replyMessage.time}</div>
            {/* <div className='date-and-time'>{convertedDate} at {forwardOrReplyMess.time}</div> */}

          </div>

          {/* {forwardOrReplyMess.value} */}
          {replyMessage.value}
          
          {/* {(messageState === 'reply') ? replyMessage.value : (messageState === 'forward') ? forwardedMessage.value : ''} */}

        </div>
      </div>

      {<div className='message-time'>{time}{messEdited}</div>}
      {/* {(messageState === 'reply') ? <div className='message-time'>{time}{messEdited}</div> : ''} */}
    </div>
  )
}

export default ReplyMessage;