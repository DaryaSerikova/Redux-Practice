import React  from 'react';

import MessagesWithStore from '../../containers/MessagesWithStore';
import searchIcon from '../../assets/icon32.png';
import right from '../../assets/right32.png';
import left from '../../assets/left32.png';
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
          // value
        />

        {/* <img
          className={`search-icon`}
          alt="left-icon"
          src={left}
        />
        <img
          className={`search-icon`}
          alt="right-icon"
          src={right}
        /> */}

        <div onClick={toggleSearching}>
          <img
            className={`search-icon ${currentUser === '' && toggleMessageSearching}`}
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
