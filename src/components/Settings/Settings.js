


export const Settings = ({ 
  clickCoordinates,
  toggleSettings,  
  messageStateIsCreate, 
  messageStateIsEdit,
  messageStateIsSelect,
  messageStateIsForward,
  messageStateIsEmpty,
  updateToNewCurrentMessage, 
  removeMessageFromStore,
  addToSelectedMessages,
  updateToNewCurrentMessageId,
  hideSettings,
  chooseMessageInStore,
  hideSelectedMessage, 
  showSelectedMessage,
  resetSelectedMessages,
  message,
  animationStateIsStart, 
  animationStateIsEnd, 

}) => {

  const edit = (message) => {
    return (e) => {
      resetSelectedMessages();

      updateToNewCurrentMessageId(message.id);
      updateToNewCurrentMessage(message.value);
      messageStateIsEdit();
      hideSettings();

      /// нужно ли сменить статус на EMPTY ?? 
    }
  }
  
  const remove = (message) => {
    return (e) => {
    console.log('Remove!');

    resetSelectedMessages();
    updateToNewCurrentMessageId(message.id);
    removeMessageFromStore(message.id, message.name);
    cancelEdit();
  }}

  const select = (message) => {
    return (e) => {
      console.log('Select! Message:', message.value);
      showSelectedMessage(message.id);
      chooseMessageInStore(message.id, true);
      updateToNewCurrentMessageId(message.id);

      messageStateIsSelect();
      addToSelectedMessages(message);

      animationStateIsStart();
      // animationStateIsEnd();

    }
  }
  
  const cancelEdit = () => {
    updateToNewCurrentMessage('');
    // messageStateIsCreate(); ////////////   почему create то?????
    console.log('(cancelEdit) before messageStateIsEmpty');

    messageStateIsEmpty();
  }


  return(
    <div 
      key={`buttons_${message.id}`} 
      id='settings' 
      style={{left: clickCoordinates.x, top: clickCoordinates.y}} 
      className={`setting-buttons ${toggleSettings}`}
    >
      <div className='setting-btn btn-edit' onClick={edit(message)}>Edit</div>
      <div className='setting-btn' onClick={select(message)}>Select</div>
      <div className='setting-btn btn-remove' onClick={remove(message)}>Remove</div>
    </div>
  )
}