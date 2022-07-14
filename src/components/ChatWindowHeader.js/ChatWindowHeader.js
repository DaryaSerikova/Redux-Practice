import React, { useEffect } from 'react';
import IconButtonWithStore from '../../containers/IconButtonWithStore';

import search from '../../assets/icon32.png';
import right from '../../assets/right32.png';
import left from '../../assets/left32.png';
import bin from '../../assets/bin32.png';
import cross from '../../assets/cross-mark32.png';
// import DanielHardman from '../../assets/Daniel_Hardman.jpg';
import {arrUsers} from '../Users/ArrUsers.js';




const ChatWindowHeader = ({
  allStore,
  currentUser, 
  updateSearchedMessages, 
  removeGroupOfMessagesFromStore, 
  resetSelectedMessages, 
  currentlySelectedMessages, 
  messageState, 
  messageStateIsEmpty,
  messageStateIsReply,  
  messageStateIsForward, 
  toggleMessageSearching, 
  showMessageSearching, 
  hideMessageSearching,

  animationStateIsEnd,
  animationStateIsStart,

}) => {

  let arrStoreMessage = allStore[`${currentUser}`];
  if (arrStoreMessage === undefined) arrStoreMessage = [];
  
  useEffect(() => {
    console.log('useEffect связанный с updateSearchedMessage(null)')
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

    animationStateIsStart();
    // animationStateIsEnd();

    resetSelectedMessages();
    console.log('(cancelMessages) before messageStateIsEmpty');
    messageStateIsEmpty();
  }
  console.log('arrUsers', arrUsers)
  let objUserWithMess = arrUsers.filter((elem) => elem.name === currentUser)[0];
  console.log('objUserWithMess', objUserWithMess)
  let avatarSrc = objUserWithMess !== undefined ? objUserWithMess.src : '';
  console.log('avatarSrc', avatarSrc)


  return (
    <div className='window-header'>
        
      <div className={`${currentlySelectedMessages.length === 0 ? 'hide' : 'cancel-group'}`}>
        {<IconButtonWithStore src={cross} name='cross' onClick={cancelSelectedMessages}/>}
        <div className={`selected-messages-amount ${messageState !== 'select' ? 'hide' : ''}`}>{currentlySelectedMessages.length}</div>
      </div>
      
      {Boolean(toggleMessageSearching) && 
      <div className={`user-with-avatar`}>
        <div className={`no-avatar avatar avatar-header${(!currentUser) ? 'hide' : ''} ${!(currentlySelectedMessages.length === 0) && 'hide'}`}>
          <img
            src={`${avatarSrc}`}
          />
        </div>

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