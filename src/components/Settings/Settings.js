


export const Settings = ({ 
  clickCoordinates,
  toggleSettings,  
  messageStateIsCreate, 
  messageStateIsEdit,
  updateToNewCurrentMessage, 
  removeMessageFromStore,
  addToForwardMessages,
  updateToNewCurrentMessageId,
  hideSettings,
  chooseMessageInStore,
  hideSelectedMessage, 
  showSelectedMessage,
  message }) => {

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
      showSelectedMessage();
      chooseMessageInStore(message.id, true)
      addToForwardMessages(message);
    }
  }
  
  const cancelEdit = () => {
    updateToNewCurrentMessage('');
    messageStateIsCreate();
  }


  return(
    <div 
      key={`buttons_${message.id}`} 
      id='settings' 
      style={{left: clickCoordinates.x, top:clickCoordinates.y}} 
      className={`setting-buttons ${toggleSettings}`}
    >
      <div className='setting-btn btn-edit' onClick={edit(message)}>Редактировать</div>
      <div className='setting-btn' onClick={forward(message)}>Переслать</div>
      <div className='setting-btn btn-remove' onClick={remove(message)}>Удалить</div>
    </div>
  )
}