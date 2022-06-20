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
  updateSearchedMessages,
  hideMessageSearching
}) => { 

  const formEl = useRef(null);

  useEffect(() => {

    if (currentUser !== '') { // ВАЖНОЕ УСЛОВИЕ

      updateSearchedMessages(allStore[`${currentUser}`]); /// ВАЖНАЯ СТРОЧКА
    }

    // if (allStore[`${currentUser}`] !== undefined) {
    //   if (currentUser !== '') updateSearchedMessages(allStore[`${currentUser}`]); /// СТАРЫЙ КОД
    // }

  }, [allStore, currentUser, updateSearchedMessages]); //allStore, currentUser, 


  const cancelEdit = () => {
    updateToNewCurrentMessage('');
    messageStateIsCreate();
  }

  const changeMessageStore = () => {
    if (messageState === 'create') {
      addNewMessageToStore(currentMessage, currentUser, false, false); //edit, choised
    }
    if (messageState === 'edit') {
      editMessageInStore(currentMessageId, currentMessage, currentUser, true); //edit
    }
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

  const onChange =  (e) => {
    if (messageState === '') {
      messageStateIsCreate();
    }
    updateToNewCurrentMessage(e.target.value);
  }


  return (
    <form ref={formEl} className='panel' onSubmit={onSubmit}>

      {<div className='edit-group'>
        <span className={`editing-message ${ (messageState !== 'edit') && 'hideOpacity' }`}>Editing a message</span>
        <div className={`${(messageState !== 'edit')&&'hide'} cross`} onClick={cancelEdit}>&#9587;</div>
      </div>}

      {(currentUser !== '') &&
      <textarea 
        className={`textarea ${(messageState === 'edit')&&'border-editing'}`}
        placeholder='Write message..' 
        value={currentMessage}
        onChange={onChange}
        onClick={(e) => hideMessageSearching()} //прописать reset у message search input
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