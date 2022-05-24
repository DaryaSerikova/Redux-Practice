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
  updateToNewCurrentMessageId,  
  messageStateIsCreate, 
  messageStateIsEdit,
  addNewMessageToStore, 
  updateToNewCurrentMessage }) => {

  // const newAllStore = allStore[currentUser] === 'undefined' ? {...allStore, [currentUser] : []} : allStore;

  let arrStoreMessage = allStore[`${currentUser}`];
  
  if (arrStoreMessage === undefined) arrStoreMessage = [];
  // const newMessageSubmit = arrStoreMessage[arrStoreMessage.length - 1]; //берем последний объект (полную информацию о последнем сообщении)

  const onClick = (message) => {
    return (e) => {
    console.log('(ChatWindow) onClick!');
    console.log('e.target', e.target);
    console.log(message)

    console.log('e.target.value', e.target.value);
    }
  }

  const edit = (message) => {
    return (e) => {
      console.log('Edit!');
      console.log('message.id:', message.id)
      updateToNewCurrentMessageId(message.id);
      updateToNewCurrentMessage(message.value);////тому что надо отредактировать сообщению
      messageStateIsEdit();
      console.log('currentMessage', currentMessage)
      //нужно передать id в Panel
      // console.log('currentMessage', currentMessage)
    }
  }

  const remove = (message) => {
    return (e) => {
    console.log('Remove!');
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
        {/* <div 
          key={message.id} 
          className='message'
          value={message.value} 
          onClick={onClick}
          >
          {message.value}
          <div className='message-time'>{message.time}</div>
        </div> */}

        <div key={`buttons_${message.id}`} id='settings' className='setting-buttons'>
          <div className='setting-btn' onClick={edit(message)}>Редактировать</div>
          <div className='setting-btn' onClick={remove(message)}>Удалить</div>
        </div>
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
