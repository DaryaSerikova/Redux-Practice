import React  from 'react';
import './ChatWindow.css';

import { Message } from '../Message/Message';
import '../Message/Message.css'



const ChatWindow = ({ allStore, currentUser, addNewMessageToStore, updateToNewCurrentMessage }) => {

  // const newAllStore = allStore[currentUser] === 'undefined' ? {...allStore, [currentUser] : []} : allStore;

  let arrStoreMessage = allStore[`${currentUser}`];
  
  if (arrStoreMessage === undefined) arrStoreMessage = [];
  // const newMessageSubmit = arrStoreMessage[arrStoreMessage.length - 1]; //берем последний объект (полную информацию о последнем сообщении)

  const onClick = (e) => {
    console.log('(ChatWindow) onClick!');

  }

  // let messageId = -1;

  const Messages = arrStoreMessage.map((message) => {
    // messageId++;
    return (
      <>
        <div 
          key={message.id} 
          className='message' 
          onClick={onClick}
          >
          {message.value}
        </div>

        <div key={`buttons_${message.id}`} id='settings' className='setting-buttons'>
          <div className='setting-btn'>Редактировать</div>
          <div className='setting-btn'>Удалить</div>
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
