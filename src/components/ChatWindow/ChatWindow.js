import React, {useEffect}  from 'react';

import MessagesWithStore from '../../containers/MessagesWithStore';
import search from '../../assets/icon32.png';
import right from '../../assets/right32.png';
import left from '../../assets/left32.png';
import bin from '../../assets/bin32.png';
import cross from '../../assets/cross32.png';
import IconButtonWithStore from '../../containers/IconButtonWithStore';
import './ChatWindow.css';



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
  removeGroupOfMessagesFromStore,
  replyOnMessageFromStore,
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

  const forwardMessages = () => {
    console.log('Forward messages to ..');

    resetSelectedMessages();
    messageStateIsEmpty();
  }


  const replyMessages = () => {
    
    let replyMessage = currentlySelectedMessages[0];
    console.log('Reply on messages ..')


    //прописать откуда берется value
    //посмотреть как он передается при добавлении сообщения
    // currentUser или бутафория? Сейчас все вместе! Будут ошибки от путаницы!
    console.log('messageState', messageState)
    replyOnMessageFromStore('Бутафорный комментарий к reply message', currentUser, false, false, replyMessage); //'Darya Serikova'

    resetSelectedMessages();
    messageStateIsEmpty();
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
          <div className='selected-messages-amount'>{currentlySelectedMessages.length}</div>
        </div>
        
        {Boolean(toggleMessageSearching) && 
        <div className={`current-user ${!(currentlySelectedMessages.length === 0) && 'hide'}`}>
          {currentUser}
        </div>}

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
    </>
  )
}


export default ChatWindow;
