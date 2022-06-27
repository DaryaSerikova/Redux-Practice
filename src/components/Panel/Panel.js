import { useRef, useEffect } from 'react';
import IconButtonWithStore from '../../containers/IconButtonWithStore';
import editCross from '../../assets/cross-mark32.png';
import plane from '../../assets/paper-plane64.png';
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
  hideMessageSearching,
  currentlySelectedMessages,
  replyOnMessageFromStore,
  messageStateIsEmpty,
  resetSelectedMessages,
  forwardGroupOfMessagesFromStore,
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

    switch (messageState) {
      case 'create':
        addNewMessageToStore(currentMessage, currentUser, false, false); //edit, choised
        break;

      case 'edit':
        editMessageInStore(currentMessageId, currentMessage, currentUser, true); //edit
        break;

      case 'reply':
        let replyMessage = currentlySelectedMessages[0];
        replyOnMessageFromStore(currentMessage, currentUser, false, false, replyMessage); //'Бутафорный комментарий к reply message','Darya Serikova'

        resetSelectedMessages();
        console.log('(switch "reply") before messageStateIsEmpty');
        messageStateIsEmpty();
        break;

      case 'forward':
        let forwardedMessages = currentlySelectedMessages;
        forwardGroupOfMessagesFromStore(currentMessage, currentUser, false, false, forwardedMessages);

        resetSelectedMessages();
        console.log('(switch "forward") before messageStateIsEmpty');
        messageStateIsEmpty();
        break;
    }
  }


  const submitMessage = () => {

    changeMessageStore();
    updateSearchedMessages(allStore[`${currentUser}`]);

    formEl.current.reset();
    cancelEdit();
  }

  const onKeyPressEnter = (e) => {
    if (e.key === 'Enter'&&e.shiftKey === false) {
      if (currentMessage !== '' || messageState === 'reply' || messageState === 'forward') {
        e.preventDefault();
        submitMessage();
      }
    }
  }


  const onSubmit = (e) => {
    e.preventDefault();
    if (currentMessage !== '' || messageState === 'reply' || messageState === 'forward')  submitMessage();
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
        <div className={`${(messageState !== 'edit')&&'hide'} cross`} onClick={cancelEdit}>
          <img 
            className={`edit-cross`}
            alt={``}
            src={editCross}
          />
        </div>
        {/* <img 
        className={``}
        alt={``}
        src={editCross}
      /> */}
        {/* {<IconButtonWithStore src={editCross} className={``} name='cross' onClick={cancelEdit}/>} */}
        {/* <div className={`${(messageState !== 'edit')&&'hide'} cross`} onClick={cancelEdit}>&#9587;</div> */}
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
        <button type="submit" className='btn btn-primary custom-btn' >
          {/* <img
            src={plane}
          /> */}
          Send
        </button>
      </div>}

    </form>
  )
}


export default Panel;