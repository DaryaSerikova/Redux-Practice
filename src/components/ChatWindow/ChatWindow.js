import React, {useEffect}  from 'react';

import MessagesWithStore from '../../containers/MessagesWithStore';
import search from '../../assets/icon32.png';
import right from '../../assets/right32.png';
import left from '../../assets/left32.png';
import bin from '../../assets/bin32.png';
import cross from '../../assets/cross-mark32.png';
// import cross from '../../assets/cross32.png';

import IconButtonWithStore from '../../containers/IconButtonWithStore';
import './ChatWindow.css';
// import { messageStateIsForward, messageStateIsReply } from '../../redux/actions';

import DanielHardman from '../../assets/Daniel_Hardman.jpg';



const ChatWindow = ({ 
  allStore, 
  currentUser,
  messageState, 
  searchedMessages, 
  updateSearchedMessages,
  toggleMessageSearching,
  hideMessageSearching, 
  showMessageSearching,
  currentlySelectedMessages,
  removeMessageFromStore,
  resetSelectedMessages,
  messageStateIsEmpty,
  messageStateIsReply, 
  removeGroupOfMessagesFromStore,
  replyOnMessageFromStore,
  messageStateIsForward,
  }) => {

  let arrStoreMessage = allStore[`${currentUser}`];
  if (arrStoreMessage === undefined) arrStoreMessage = [];
  
  useEffect(() => {
    updateSearchedMessages(null); ///////////////////////////////////////////////////////
  }, []);


  const onChangeSearchMessage = (e) => {

    if (e.target.value.trim()) {
      const searchedMess = arrStoreMessage.filter((message) => 
        message.value.toLowerCase().includes(e.target.value.toLowerCase())
      )
      updateSearchedMessages(searchedMess);

    } else {
      updateSearchedMessages(arrStoreMessage);
    }
  }

  const toggleSearching = () => {
    
    if (allStore[`${currentUser}`].length !== 0) {

      if (toggleMessageSearching === 'hide') {
        if (currentUser !== '') showMessageSearching();
      } else {
        //reset input
        //update search to message store
        console.log('!!!!!!!!!!!!!!!!!!! arrStoreMessage (toggleSearching)', arrStoreMessage)
        updateSearchedMessages(arrStoreMessage);
        hideMessageSearching();
      }
    }

  }

  const forwardMessages = () => {
    console.log('Forward messages to ..');
    messageStateIsForward();
    // resetSelectedMessages();
    // messageStateIsEmpty();
  }

  // const edit = (message) => {
  //   return (e) => {
  //     resetSelectedMessages();

  //     updateToNewCurrentMessageId(message.id);
  //     updateToNewCurrentMessage(message.value);
  //     messageStateIsEdit();
  //     hideSettings();

  //     /// нужно ли сменить статус на EMPTY ?? 
  //   }
  // }


  const replyMessages = () => {
    console.log('Reply on messages ..');
    messageStateIsReply();

    // План
    // 1. по onClick на стрелочку скрыть все иконки в header'е ChatWindow
    // 2. messageStateIsReply
    // 3. Скрыть все признаки выбранного сообщения, но оставить в store
    // 4. Мини-версия replyMessage над панелью

    // При нажатии на кнопку отправить:
    // . Скрыть мини-версия replyMessage над панелью
    // replyOnMessageFromStore('Бутафорный комментарий к reply message', currentUser, false, false, replyMessage); //'Darya Serikova'
    // resetSelectedMessages();
    // messageStateIsEmpty();
    // . reset панели
    // . reset выбранных сообщений

    
    // // Здесь начинается кусок для send при добавлении сообщения вместо бутафорного комментария
    // let replyMessage = currentlySelectedMessages[0]; // это от изначального варианта forward

    // replyOnMessageFromStore('Бутафорный комментарий к reply message', currentUser, false, false, replyMessage); //'Darya Serikova'
    // resetSelectedMessages();
    // messageStateIsEmpty();
  }


  const cancelSelectedMessages = () => {
    console.log('Cancel selected messages ..')

    resetSelectedMessages();
    messageStateIsEmpty();
  }


  const removeMessages = () => { //forwMessageId, name
    
    console.log('Remove messages ..');
    
    let name = currentUser;
    let arrForwardIds = currentlySelectedMessages.map((selectedMessage) => selectedMessage.id);

    removeGroupOfMessagesFromStore(arrForwardIds, name);
    resetSelectedMessages();
    messageStateIsEmpty();
  }


  const textIfStoreIsEmpty = <div className='wrapper-personal-store-is-empty'>
    <div className='personal-store-is-empty'> Message history is empty. </div>
    <div className='personal-store-is-empty'> Write something to start a conversation... </div>
  </div>;

  return (
    <>
      <div className='window-header'>
      
        <div className={`${currentlySelectedMessages.length === 0 ? 'hide' : 'cancel-group'}`}>
          {<IconButtonWithStore src={cross} name='cross' onClick={cancelSelectedMessages}/>}
          <div className={`selected-messages-amount ${messageState !== 'select' ? 'hide' : ''}`}>{currentlySelectedMessages.length}</div>
        </div>
        
        {Boolean(toggleMessageSearching) && 
        <div className={`user-with-avatar`}>
          {/* <div className='avatar'> */}
            {/* <img 
                className={`avatar`}
                alt={`avatar-icon`}
                src={DanielHardman}
              /> */}
            <div className={`no-avatar ${(!currentUser) ? 'hide' : ''} ${!(currentlySelectedMessages.length === 0) && 'hide'}`}></div>
              
          {/* </div> */}


          {/* <div className={`current-user ${!(currentlySelectedMessages.length === 0) && 'hide'}`}> */}
          <div className={`current-user ${!(messageState !== 'select') ? 'hide' : ''}`}>
            {currentUser}
          </div>          
        </div>
        }

        <input 
          type='text' 
          placeholder='Search messsage...' 
          className={`search-message ${toggleMessageSearching} `} 
          onChange={onChangeSearchMessage}
          // value
        />

        <div className={`group-buttons`}>
          <IconButtonWithStore src={left} name='left' onClick={replyMessages}/>
          <IconButtonWithStore src={bin} name='bin' onClick={removeMessages}/>
          <IconButtonWithStore src={right} name='right' onClick={forwardMessages}/>
          <IconButtonWithStore src={search} name='search' onClick={toggleSearching}/>
        </div>
      </div>
      
      <div className='scroll-window '>
        <div className='not-exist'> 

          <div className={`chat-window`}>
            {console.log('allStore[`${currentUser}`]:', allStore[`${currentUser}`])}
            {console.log('currentUser:', currentUser)}

            {(currentUser !== '' || allStore[`${currentUser}`] !== undefined)
            ? (allStore[`${currentUser}`].length === 0) ? textIfStoreIsEmpty : <MessagesWithStore arrStoreMessage={searchedMessages}/> 
            : <div className='no-user'>Select a user to start chatting</div>}
          </div>

        </div>
      </div>


      {console.log('MESSAGESTATE:', messageState)}
      {console.log('currentlySelectedMessages', currentlySelectedMessages)}
      <div className={`mini-reply-or-forwarded-messages ${messageState === 'reply' ? '' : "hide"}`}>
        <div className='message-with-vertical-line'>
          <div className='vertical-line'></div>
          <div className='reply-message'>

          <div className='message-info'>
            <div className='message-sender'>Darya Serikova</div>
          </div>

          {(Boolean(currentlySelectedMessages[0])&&currentlySelectedMessages[0]!=={}) ? currentlySelectedMessages[0].value : ''}

          </div>
        </div>
      </div>

      <div className={`mini-reply-or-forwarded-messages ${messageState === 'forward' ? '' : "hide"}`}>
        <div className='forwarded-messages-info'>
          <div className='forwarded-messages-item-is-amount'>{currentlySelectedMessages.length}</div>
          <div className='forwarded-messages-item-is-message'>
          
          сообщений
          </div>
        </div>
      </div>


      
    </>
  )
}


export default ChatWindow;
