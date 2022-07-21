import { useRef, useEffect } from 'react';
import IconButtonWithStore from '../../containers/IconButtonWithStore';
import TextareaAutosize from 'react-textarea-autosize';

import editCross from '../../assets/cross-in-circle_blue32.png';
import editCheckmark from '../../assets/checkmark-edit_blue32.png';

import classnames from 'classnames';

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
  hideSelectedMessage,
  addLastSentMessage,
  lastSentMessages,
  updateToNewCurrentUser,

}) => { 

  const formEl = useRef(null);

  useEffect(() => {

    if (currentUser !== '') { // ВАЖНОЕ УСЛОВИЕ
      console.log('useEffect связанный с updateSearchedMessage(allStore[`${currentUser}`])')
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
    if (messageState !== 'edit') addLastSentMessage(currentUser, currentMessage);
    // if (messageState === 'edit') {
    //   if (allStore[`${currentUser}`])
    //   addLastSentMessage(currentUser, currentMessage)
    // };


    switch (messageState) {
      case 'create':
        addNewMessageToStore(currentMessage, currentUser, false, false); //edit, choised
        // addLastSentMessage(currentUser, currentMessage);
        break;

      case 'edit':
        editMessageInStore(currentMessageId, currentMessage, currentUser, true); //edit
        // addLastSentMessage(currentMessage, currentUser); // изменить если сообщение поледнее

        break;

      case 'reply':
        let replyMessage = currentlySelectedMessages[0];
        replyOnMessageFromStore(currentMessage, currentUser, false, false, replyMessage); //'Бутафорный комментарий к reply message','Darya Serikova'
        // addLastSentMessage(currentUser, currentMessage);


        resetSelectedMessages();
        console.log('(switch "reply") before messageStateIsEmpty');
        hideSelectedMessage(replyMessage.id);////////// решение поломки с forward и reply
        messageStateIsEmpty();
        break;

      case 'forward':
        let forwardedMessages = currentlySelectedMessages;
        forwardGroupOfMessagesFromStore(currentMessage, currentUser, false, false, forwardedMessages);
        // addLastSentMessage(currentUser, currentMessage);

        resetSelectedMessages();
        console.log('(switch "forward") before messageStateIsEmpty');
        forwardedMessages.forEach((forwardedMessage) => {
          hideSelectedMessage(forwardedMessage.id);////////// решение поломки с forward и reply
        })

        messageStateIsEmpty();
        break;
    }
  }


  const submitMessage = () => {

    changeMessageStore();
    updateSearchedMessages(allStore[`${currentUser}`]);

    formEl.current.reset();
    cancelEdit();
    console.log('typeof(lastSentMessages):', typeof(lastSentMessages))
    console.log('lastSentMessages:', lastSentMessages)
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
  // console.log('lastSentMessage:', lastSentMessages)

  return (
    <form ref={formEl} className='panel' onSubmit={onSubmit}>

      {<div className='edit-group'>
        {/* <span className={`editing-message ${ (messageState !== 'edit') && 'hideOpacity' }`}>Editing a message</span> */}
        <span className={classnames('editing-message', {'hideOpacity': messageState !== 'edit'})}>Editing a message</span>
        
        <div className={`${(messageState !== 'edit')&&'hide'} cross`} onClick={cancelEdit}>
          <img 
            className={`edit-cross`}
            alt={``}
            src={editCross}
          />
        </div>
      </div>}


      <div className='wrapper-textarea-with-btn'>
        <div className='textarea-with-btn'>

          {(currentUser !== '') &&
          <TextareaAutosize 
            className={`textarea ${(messageState === 'edit')&&'border-editing'}`}
            placeholder='Write message..' 
            value={currentMessage}
            onChange={onChange}
            onClick={(e) => hideMessageSearching()} //прописать reset у message search input
            onKeyPress={onKeyPressEnter}
            autoFocus
            maxRows={3}
          />}
          {/* <textarea 
            className={`textarea ${(messageState === 'edit')&&'border-editing'}`}
            placeholder='Write message..' 
            value={currentMessage}
            onChange={onChange}
            onClick={(e) => hideMessageSearching()} //прописать reset у message search input
            onKeyPress={onKeyPressEnter}
            autoFocus
          />} */}


          {(currentUser !== '') && <div className='wrapper-btn'>
            { messageState !== 'edit' ? 
            <button type="submit" className='btn btn-primary custom-btn' >
              Send
            </button>
            : <button type="submit" className='custom-btn-edit' >
              <img
                src={editCheckmark}
              />
            </button> 
            }
          </div>}

        </div>
      </div>




    </form>
  )
}


export default Panel;