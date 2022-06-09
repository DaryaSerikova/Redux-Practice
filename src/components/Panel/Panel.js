import { useRef, useEffect } from 'react';
import './Panel.css';


const Panel = ({ 
  allStore,
  currentMessage, 
  currentUser, 
  messageState,
  currentMessageId,  
  updateToNewCurrentMessage, 
  addNewMessageToStore,
  messageStateIsCreate, 
  editMessageInStore,
  updateSearchedMessages
}) => { 

  const formEl = useRef(null);

  useEffect(() => {
    if (currentUser !== '') updateSearchedMessages(allStore[`${currentUser}`]);
  }, [allStore, currentUser, updateSearchedMessages]);


  const cancelEdit = () => {
    updateToNewCurrentMessage('');
    messageStateIsCreate();
  }

  const changeMessageStore = () => {
    if (messageState === 'create') {
      addNewMessageToStore(currentMessage, currentUser, false);
    }
    if (messageState === 'edit') {
      editMessageInStore(currentMessageId, currentMessage, currentUser, true);
    }
    // setStateMessStore()
  }


  const submitMessage = () => {

    changeMessageStore();
    updateSearchedMessages(allStore[`${currentUser}`])

    formEl.current.reset();
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