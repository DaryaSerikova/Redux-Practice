import React, { useEffect } from 'react';
import IconButtonWithStore from '../../containers/IconButtonWithStore';

import search from '../../assets/icon32.png';
import right from '../../assets/right32.png';
import left from '../../assets/left32.png';
import bin from '../../assets/bin32.png';
import cross from '../../assets/cross-mark32.png';
import DanielHardman from '../../assets/Daniel_Hardman.jpg';




const ChatWindowHeader = ({
  currentlySelectedMessages, 
  messageState, 
  toggleMessageSearching, 
  currentUser, 
  allStore,

  updateSearchedMessages, 
  removeGroupOfMessagesFromStore, 
  resetSelectedMessages, 
  messageStateIsEmpty,
  messageStateIsReply,  
  messageStateIsForward, 
  showMessageSearching, 
  hideMessageSearching,
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

  const forwardMessages = () => {
    console.log('Forward messages to ..');
    messageStateIsForward();
  }

  const removeMessages = () => { //forwMessageId, name
    
    console.log('Remove messages ..');
    
    let name = currentUser;
    let arrForwardIds = currentlySelectedMessages.map((selectedMessage) => selectedMessage.id);

    removeGroupOfMessagesFromStore(arrForwardIds, name);
    resetSelectedMessages();
    console.log('(removeMessages) before messageStateIsEmpty');
    messageStateIsEmpty();
  }

  const cancelSelectedMessages = () => {
    console.log('Cancel selected messages ..')

    resetSelectedMessages();
    console.log('(cancelMessages) before messageStateIsEmpty');
    messageStateIsEmpty();
  }


  return (
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
  )
}

export default ChatWindowHeader;