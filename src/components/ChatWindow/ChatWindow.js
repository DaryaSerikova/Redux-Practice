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

  // currentForwardMessages,
  currentlySelectedMessages,

  removeMessageFromStore,

  // resetForwardMessage,
  resetSelectedMessages,

  messageStateIsEmpty,
  removeGroupOfMessagesFromStore,
  replyOnMessageFromStore,
  }) => {

  let arrStoreMessage = allStore[`${currentUser}`];
  if (arrStoreMessage === undefined) arrStoreMessage = [];
  // updateSearchedMessages(allStore[`${currentUser}`]);
  // updateSearchedMessages([]); ///////////////////////////////////////////////////////
  
  useEffect(() => {
    updateSearchedMessages(null); ///////////////////////////////////////////////////////
  }, []);


  const onChangeSearchMessage = (e) => {

    if (e.target.value.trim()) {

      const searchedMess = arrStoreMessage.filter((message) => 
        message.value.toLowerCase().includes(e.target.value.toLowerCase())
      )
      console.log('!!!!!!!!!!!!!!!!!!! searchedMess', searchedMess)

      console.log('searchedMess', searchedMess)
      updateSearchedMessages(searchedMess);

    } else {
      console.log('!!!!!!!!!!!!!!!!!!! arrStoreMessage (onChange)', arrStoreMessage)
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

    // resetForwardMessage();
    resetSelectedMessages();

    messageStateIsEmpty();
  }

  const replyMessages = () => {

    console.log('Reply on messages ..')

    // console.log('currentForwardMessages', currentForwardMessages)
    console.log('currentlySelectedMessages', currentlySelectedMessages)

    
    let replyMessage = currentlySelectedMessages[0];
    // let replyMessage = currentForwardMessages[0];

    console.log(replyMessage)

    //прописать откуда берется value
    //посмотреть как он передается при добавлении сообщения
    // currentUser или бутафория? Сейчас все вместе! Будут ошибки от путаницы!
    console.log('messageState', messageState)
    replyOnMessageFromStore('Бутафорный комментарий к reply message', currentUser, false, false, replyMessage); //'Darya Serikova'

    // resetForwardMessage();
    resetSelectedMessages();

    messageStateIsEmpty();
  }

  const cancelSelectedMessages = () => {
    console.log('Cancel selected messages ..')

    // resetForwardMessage();
    resetSelectedMessages();

    messageStateIsEmpty();
  }



  const removeMessages = (forwMessageId, name) => {
    // name = currentUser;
    console.log('Remove messages ..');


    //  Если вдруг раскомментируешь удаление, имей ввиду, что здесь имена не исправлены
    // Менять нужно currentForwardMessages на currentlySelectedMessages

    // console.log('currentForwardMessages', currentForwardMessages, 'currentForwardMessages.length', currentForwardMessages.length, 'currentForwardMessages.length === 1', currentForwardMessages.length === 1)
    // if (currentForwardMessages.length === 1) {
    //   forwMessageId = currentForwardMessages[0].id
    //   console.log('currentForwardMessages[0].id', currentForwardMessages[0].id);
    //   console.log('currentUser', name)
    //   removeMessageFromStore(forwMessageId, name) //id, name
    // } else {

    //   let arrForwardIds = currentForwardMessages.map((forwMessage) => forwMessage.id)
    //   console.log('arrForwardIds', arrForwardIds)
    //   removeGroupOfMessagesFromStore(arrForwardIds, name);
    // }

    // resetForwardMessage();
    resetSelectedMessages();

    messageStateIsEmpty();
  }

  console.log('allStore[`${currentUser}`]', allStore[`${currentUser}`]);

  const textIfStoreIsEmpty = <div className='wrapper-personal-store-is-empty'>
    <div className='personal-store-is-empty'> Message history is empty. </div>
    <div className='personal-store-is-empty'> Write something to start a conversation... </div>
  </div>  ;

  return (
    <>
      <div className='window-header'>
      
        {/* <div className={`${currentForwardMessages.length === 0 ? 'hide' : 'cancel-group'}`}> */}
        <div className={`${currentlySelectedMessages.length === 0 ? 'hide' : 'cancel-group'}`}>
          {<IconButtonWithStore src={cross} name='cross' onClick={cancelSelectedMessages}/>}
          {/* <div className='selected-messages-amount'>{currentForwardMessages.length}</div> */}
          <div className='selected-messages-amount'>{currentlySelectedMessages.length}</div>
        </div>
        
        {Boolean(toggleMessageSearching) && 
        <div className={`current-user ${!(currentlySelectedMessages.length === 0) && 'hide'}`}>
        {/* <div className={`current-user ${!(currentForwardMessages.length === 0) && 'hide'}`}> */}

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
            {currentUser !== '' 
            ? (allStore[`${currentUser}`].length === 0) ? textIfStoreIsEmpty : <MessagesWithStore arrStoreMessage={searchedMessages}/> 
            : <div className='no-user'>Select a user to start chatting</div>}
          </div>

        </div>
      </div>
    </>
  )
}


export default ChatWindow;
