import React  from 'react';

import MessagesWithStore from '../../containers/MessagesWithStore';
import searchIcon from '../../assets/icon32.png';
import './ChatWindow.css';



const ChatWindow = ({ 
  allStore, 
  currentUser, 
  searchedMessages, 
  updateSearchedMessages,
  toggleMessageSearching,
  hideMessageSearching, 
  showMessageSearching
  }) => {

  let arrStoreMessage = allStore[`${currentUser}`];
  if (arrStoreMessage === undefined) arrStoreMessage = [];
  // updateSearchedMessages(allStore[`${currentUser}`]);
  // let arrSearchedMessages = searchedMessages === [] ? arrStoreMessage : searchedMessages;
  // let arrSearchedMessages = searchedMessages;


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
      hideMessageSearching();
    }
  }


  return (
    <>
      <div className='window-header'>
        <div className='current-user'>
        {currentUser}
        </div>
        <input 
          type='text' 
          placeholder='Search messsage...' 
          className={`search-message ${toggleMessageSearching}`} 
          onChange={onChangeSearchMessage}
        />
        <div 
          onClick={toggleSearching}
        >
          <img
            className={`search-icon ${currentUser === ''&&toggleMessageSearching}`}
            alt="search-icon"
            src={searchIcon}
          />
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
