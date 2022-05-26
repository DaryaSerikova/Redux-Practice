import React  from 'react';

// import MessageWithStore from '../../containers/MessageWithStore';
import Message from '../Message/Message'; 
import './ChatWindow.css';
import '../Message/Message.css';


const ChatWindow = ({ 
  allStore, 
  currentUser, 
  // messageState,
  currentMessageId,
  toggleSettings,
  clickCoordinates, updateCoordinates,
  // messageIsEdited,
  updateToNewCurrentMessageId,  
  messageStateIsCreate, 
  messageStateIsEdit,
  updateToNewCurrentMessage, 
  removeMessageFromStore,
  hideSettings, 
  showSettings }) => {


  let arrStoreMessage = allStore[`${currentUser}`];
  if (arrStoreMessage === undefined) arrStoreMessage = [];

  const onClick = (message) => {
    return (e) => {

      updateCoordinates(`${e.clientX-130}px`, `${e.clientY+10}px`);
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
      updateToNewCurrentMessageId(message.id);
      updateToNewCurrentMessage(message.value);
      messageStateIsEdit();
      hideSettings();
    }
  }

  const cancelEdit = () => {
    updateToNewCurrentMessage('');
    messageStateIsCreate();
  }

  const remove = (message) => {
    return (e) => {
    console.log('Remove!');
    updateToNewCurrentMessageId(message.id);
    removeMessageFromStore(message.id, message.name);
    cancelEdit();
  }}


  const Messages = arrStoreMessage.map((message) => {

    return (
      <>
        <Message
          id={message.id}
          value={message.value} 
          onClick={onClick(message)}
          time={message.time}
          edit={message.edit}
        />

        {(message.id === currentMessageId) && 
        <div 
          key={`buttons_${message.id}`} 
          id='settings' 
          style={{left: clickCoordinates.x, top:clickCoordinates.y}} 
          className={`setting-buttons ${toggleSettings}`}
        >
          <div className='setting-btn btn-edit' onClick={edit(message)}>Редактировать</div>
          <div className='setting-btn btn-remove' onClick={remove(message)}>Удалить</div>
        </div>}
      </>
    )
  })


  return (
    <>
      <div className='current-user'>{currentUser}</div>
      <div className='scroll-window '>
        <div className='not-exist'> 
          <div className={`chat-window`}>
            {currentUser !== '' ? Messages : <div className='no-user'>Select a user to start chatting</div>}
          </div>
        </div>
      </div>
    </>

  )
}


export default ChatWindow;
