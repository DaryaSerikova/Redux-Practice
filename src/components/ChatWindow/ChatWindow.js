import React  from 'react';
import './ChatWindow.css';

import { Message } from '../Message/Message';
import '../Message/Message.css'



const ChatWindow = ({ 
  allStore, 
  currentUser, 
  currentMessage,
  messageState,
  currentMessageId,
  toggleSettings,
  updateToNewCurrentMessageId,  
  messageStateIsCreate, 
  messageStateIsEdit,
  addNewMessageToStore, 
  updateToNewCurrentMessage, 
  removeMessageFromStore,
  hideSettings, 
  showSettings }) => {


  let arrStoreMessage = allStore[`${currentUser}`];
  if (arrStoreMessage === undefined) arrStoreMessage = [];

  const onClick = (message) => {
    return (e) => {
      console.log('(ChatWindow) onClick!');
      console.log('e.target', e.target);
      console.log(message)

      updateToNewCurrentMessageId(message.id);
      if (toggleSettings === 'hide') {
        showSettings();
      } else {
        hideSettings();
      }
    }
  }

  const edit = (message) => {
    return (e) => {
      console.log('Edit!');
      console.log('message.id:', message.id)
      updateToNewCurrentMessageId(message.id);
      updateToNewCurrentMessage(message.value);
      messageStateIsEdit();
      hideSettings();
      console.log('currentMessage', currentMessage)
    }
  }

  const remove = (message) => {
    return (e) => {
    console.log('Remove!');
    updateToNewCurrentMessageId(message.id);
    removeMessageFromStore(message.id, message.name);
  }}


  const Messages = arrStoreMessage.map((message) => {

    return (
      <>
        <Message
          key={message.id}
          value={message.value} 
          onClick={onClick(message)}
          time={message.time}
        />

        {(message.id === currentMessageId) && 
        <div key={`buttons_${message.id}`} id='settings' className={`setting-buttons ${toggleSettings}`}>
          <div className='setting-btn' onClick={edit(message)}>Редактировать</div>
          <div className='setting-btn' onClick={remove(message)}>Удалить</div>
        </div>}
      </>
    )
  })


  return (
    <>
      <div className='current-user'>{currentUser}</div>
      <div className='scroll-window '>
        <div className='not-exist'> 
          <div className='chat-window'>
            {Messages}
          </div>
        </div>
      </div>
    </>

  )
}


export default ChatWindow;
