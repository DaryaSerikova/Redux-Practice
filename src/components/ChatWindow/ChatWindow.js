import React  from 'react';

import MessagesWithStore from '../../containers/MessagesWithStore';
import searchIcon from '../../assets/icon32.png';
import right from '../../assets/right32.png';
import left from '../../assets/left32.png';
import bin from '../../assets/bin32.png';
import './ChatWindow.css';



const ChatWindow = ({ 
  allStore, 
  currentUser, 
  searchedMessages, 
  updateSearchedMessages,
  toggleMessageSearching,
  hideMessageSearching, 
  showMessageSearching,
  currentForwardMessages,
  removeMessageFromStore,
  resetForwardMessage,
  messageStateIsEmpty,
  }) => {

  let arrStoreMessage = allStore[`${currentUser}`];
  if (arrStoreMessage === undefined) arrStoreMessage = [];
  // updateSearchedMessages(allStore[`${currentUser}`]);

    const handleValue = () => {
      //update
    }


  const onChangeSearchMessage = (e) => {

    if (e.target.value.trim()) {

      const searchedMess = arrStoreMessage.filter((message) => 
        message.value.toLowerCase().includes(e.target.value.toLowerCase())
      )

      console.log('searchedMess', searchedMess)
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
      updateSearchedMessages(arrStoreMessage);
      hideMessageSearching();
    }
  }

  const forwardMessages = () => {
    console.log('Forward messages to ..');

    resetForwardMessage();
    messageStateIsEmpty();
  }

  const replyMessages = () => {
    console.log('Reply on messages ..')

    resetForwardMessage();
    messageStateIsEmpty();
  }

  const removeMessages = (forwMessageId, name) => {
    name = currentUser;
    console.log('Remove messages ..');
    // console.log('currentForwardMessages', currentForwardMessages, 'currentForwardMessages.length', currentForwardMessages.length, 'currentForwardMessages.length === 1', currentForwardMessages.length === 1)
    if (currentForwardMessages.length === 1) {
      forwMessageId = currentForwardMessages[0].id
      console.log('currentForwardMessages[0].id', currentForwardMessages[0].id);
      console.log('currentUser', name)
      removeMessageFromStore(forwMessageId, name) //id, name
    }

    resetForwardMessage();
    messageStateIsEmpty();
  }


  return (
    <>
      <div className='window-header'>

        {Boolean(toggleMessageSearching) && 
        <div className='current-user'>
          {currentUser}
        </div>}

        <input 
          type='text' 
          placeholder='Search messsage...' 
          className={`search-message ${toggleMessageSearching}`} 
          onChange={onChangeSearchMessage}
          // value
        />


        <div className={`group-buttons`}>

          <div onClick={replyMessages}>
            <img
                className={`search-icon ${currentUser === '' && toggleMessageSearching} ${currentForwardMessages.length !== 1 && 'hide'}`}
                alt="left-icon"
                src={left}
              />
          </div>

          <div onClick={removeMessages}>
            <img
                className={`search-icon ${currentUser === '' && toggleMessageSearching} ${currentForwardMessages.length === 0 && 'hide'}`}
                alt="bin"
                src={bin}
              />
          </div>

          <div onClick={forwardMessages}>
            <img
              className={`search-icon ${currentUser === '' && toggleMessageSearching} ${currentForwardMessages.length === 0 && 'hide'}`}
              alt="right-icon"
              src={right}
            />
          </div>

          <div onClick={toggleSearching}>
            <img
              className={`search-icon ${currentUser === '' && toggleMessageSearching}`}
              alt="search-icon"
              src={searchIcon}
            />
          </div>

        </div>
      </div>
      

      <div className='scroll-window '>
        <div className='not-exist'> 

          <div className={`chat-window`}>
            {currentUser !== '' 
            ? <MessagesWithStore arrStoreMessage={searchedMessages}/> 
            : <div className='no-user'>Select a user to start chatting</div>}
          </div>

        </div>
      </div>
    </>
  )
}


export default ChatWindow;
