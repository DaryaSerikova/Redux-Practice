import Message from "../Message/Message";


export const Messages = ({ 
  currentMessageId,
  toggleSettings,
  clickCoordinates, 
  updateCoordinates,
  updateToNewCurrentMessageId,  
  messageStateIsCreate, 
  messageStateIsEdit,
  updateToNewCurrentMessage, 
  removeMessageFromStore,
  hideSettings, 
  showSettings,
  arrStoreMessage, //props
  addToForwardMessages,
  currentForwardMessages }) => {

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
  
  const remove = (message) => {
    return (e) => {
    console.log('Remove!');
    updateToNewCurrentMessageId(message.id);
    removeMessageFromStore(message.id, message.name);
    cancelEdit();
  }}

  const forward = (message) => {
    return (e) => {
      console.log('Forward! Message:', message.value);
      addToForwardMessages(message);
    }
  }
  
  const cancelEdit = () => {
    updateToNewCurrentMessage('');
    messageStateIsCreate();
  }
  
  
  const Mess = arrStoreMessage.map((message) => {
  
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
          <div className='setting-btn' onClick={forward(message)}>Переслать</div>
          <div className='setting-btn btn-remove' onClick={remove(message)}>Удалить</div>
        </div>}
        {console.log('currentForwardMessages:', currentForwardMessages)}
      </>
    )
  })

  return Mess;
}