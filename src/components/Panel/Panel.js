import { useRef } from 'react';
// import { updateToNewCurrentMessage, addNewMessageToStore, editMessageInStore } from '../../redux/actions';
import './Panel.css';


const Panel = ({ 
  currentMessage, 
  allStore, 
  currentUser, 
  messageState,
  currentMessageId,
  // updateToNewCurrentMessageId,   
  updateToNewCurrentMessage, 
  addNewMessageToStore,
  messageStateIsCreate, 
  messageStateIsEdit,
  editMessageInStore,
  messageIsEdited }) => { 

  const formEl = useRef(null);

  const cancelEdit = () => {
    updateToNewCurrentMessage('');
    messageStateIsCreate();
  }

  const submitMessage = () => {

    if (messageState === 'create') {
      addNewMessageToStore(currentMessage, currentUser);
    }
    if (messageState === 'edit') {
      editMessageInStore(currentMessageId, currentMessage, currentUser);
    }

    formEl.current.reset();
    messageIsEdited();
    cancelEdit();
  }

  const onKeyPressEnter = (e) => {
    if (e.key === 'Enter'&&e.shiftKey === false) {
      if (currentMessage !== '') {
        e.preventDefault();
        submitMessage();
      }
    }
  }


  const onSubmit = (e) => {
    e.preventDefault();
    if (currentMessage !== '')  submitMessage();
  }


  return (
    <form ref={formEl} className='panel' onSubmit={onSubmit}>

      {<div className='edit-group'>
        <span className={`editing-message ${(messageState !== 'edit')&&'hideOpacity'}`}>Editing a message</span>
        <div className={`${(messageState !== 'edit')&&'hide'} cross`} onClick={cancelEdit}>&#9587;</div>
      </div>}

      {(currentUser !== '') &&
      <textarea 
        className={`textarea ${(messageState === 'edit')&&'border-editing'}`}
        placeholder='Write message..' 
        value={currentMessage}
        onChange={(e) => updateToNewCurrentMessage(e.target.value)}
        onKeyPress={onKeyPressEnter}
        autoFocus
      />}

      {(currentUser !== '') && <div className='wrapper-btn'>
        <button 
          type="submit" 
          className='btn btn-success custom-btn'
        > Send </button>
      </div>}

    </form>
  )
}


export default Panel;