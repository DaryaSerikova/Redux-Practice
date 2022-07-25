import React, { useEffect } from 'react';
import IconButtonWithStore from '../../containers/IconButtonWithStore';


import search from '../../assets/search_blue32.png';
import right from '../../assets/right_blue32.png';
import left from '../../assets/left_blue32.png';
import bin from '../../assets/bin_blue32.png';
import cross from '../../assets/cross-in-circle_blue32.png';
import edit from '../../assets/edit_blue32.png';
import back from '../../assets/back_blue32.png';


import {arrUsers} from '../Users/ArrUsers.js';
import classnames from 'classnames';
import { cancelGroup, selectedMessagesAmount } from './cnChatWindowHeader';




const ChatWindowHeader = ({
  allStore,
  currentUser, 
  updateSearchedMessages, 
  removeGroupOfMessagesFromStore, 
  resetSelectedMessages, 
  currentlySelectedMessages, 
  messageState, 
  messageStateIsEmpty,
  messageStateIsEdit,
  messageStateIsReply,  
  messageStateIsForward, 
  toggleMessageSearching, 
  showMessageSearching, 
  hideMessageSearching,

  animationStateIsEnd,
  animationStateIsStart,
  updateToNewCurrentMessage,
  updateToNewCurrentMessageId,
  mobileStateIsUsers,
  mobileStateIsMessages,

}) => {

  let arrStoreMessage = allStore[`${currentUser}`];
  if (arrStoreMessage === undefined) arrStoreMessage = [];
  
  useEffect(() => {
    console.log('useEffect связанный с updateSearchedMessage(null)')
    updateSearchedMessages(null); ///////////////////////////////////////////////////////
  }, []);

  let screenWidth = document.body.clientWidth;


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
    let arrSelectedIds = currentlySelectedMessages.map((selectedMessage) => selectedMessage.id);

    removeGroupOfMessagesFromStore(arrSelectedIds, name);
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

  const editMessage = () => {

    let messForEdit = currentlySelectedMessages[0]
    console.log('EDIT MESSAGE IN HEADER!!! ID:' , messForEdit);
    resetSelectedMessages();

    updateToNewCurrentMessageId(messForEdit.id);
    updateToNewCurrentMessage(messForEdit.value);
    messageStateIsEdit();
  }

  const backToUsers = () => {
    console.log('BACK TO USERS');
    mobileStateIsUsers();
  }



  let objUserWithMess = arrUsers.filter((elem) => elem.name === currentUser)[0];
  let avatarSrc = objUserWithMess !== undefined ? objUserWithMess.src : '';



  return (
    <div className='window-header'>
        
      <div className={cancelGroup(currentlySelectedMessages)}>
        {<IconButtonWithStore src={cross} name='cross' onClick={cancelSelectedMessages}/>}
        <div className={selectedMessagesAmount(messageState)}>{currentlySelectedMessages.length}</div>
      </div>
      
      {Boolean(toggleMessageSearching) && 
      <div className={ classnames('user-with-avatar', { 'hide': !currentUser} )}>

        {(screenWidth < 900)&&<IconButtonWithStore src={back} name='back' onClick={backToUsers}/>}

        <div className={`no-avatar avatar avatar-header${(!currentUser) ? 'hide' : ''} ${!(currentlySelectedMessages.length === 0) && 'hide'}`}>
        {/* <div className={classnames('no-avatar', 'avatar', 'avatar-header', {'hide': !currentUser} `${!(currentlySelectedMessages.length === 0) && 'hide'}`)}> */}
          <img
            src={`${avatarSrc}`}
          />
        </div>

        {/* <div className={classnames('current-user', {'hide': !(messageState !== 'select')})}> */}
        <div className={classnames('current-user', {'hide': messageState === 'select'})}>
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
        <IconButtonWithStore src={edit} name='edit' onClick={editMessage}/>
        <IconButtonWithStore src={left} name='left' onClick={replyMessages}/>
        <IconButtonWithStore src={bin} name='bin' onClick={removeMessages}/>
        <IconButtonWithStore src={right} name='right' onClick={forwardMessages}/>
        <IconButtonWithStore src={search} name='search' onClick={toggleSearching}/>
      </div>
    </div>
  )
}

export default ChatWindowHeader;