import React from 'react';

import ChatWindowHeaderWithStore from '../../containers/ChatWindowHeaderWithStore';
import MessagesWithStore from '../../containers/MessagesWithStore';
import MiniMessageWithStore from '../../containers/MiniMessageWithStore';
import './ChatWindow.css';



const ChatWindow = ({ 
  allStore, 
  currentUser,
  messageState, 
  searchedMessages, 
  currentlySelectedMessages,
  }) => {

  const textIfStoreIsEmpty = <div className='wrapper-personal-store-is-empty'>
    <div className='personal-store-is-empty'> Message history is empty. </div>
    <div className='personal-store-is-empty'> Write something to start a conversation... </div>
  </div>;

  //attemp to fix autoscroll
  // const el = document.getElementById('chat-window');

  // if (el) {
  //   el.scrollTop = el.scrollHeight;
  // }


  return (
    <>
      <ChatWindowHeaderWithStore />
      
      {/* <div className='scroll-window' style={(messageState === 'forward') ? {height: 235} : (messageState === 'reply') ? {height: 251} : {height: 313}}> */}
      <div className='scroll-window' style={(messageState === 'forward') ? {height: 401} : (messageState === 'reply') ? {height: 418} : {height: 480}}>

        <div className='not-exist'> 

          <div id='chat-window' className={`chat-window`}>
            {console.log('allStore[`${currentUser}`]:', allStore[`${currentUser}`])}
            {/* {console.log('currentUser:', currentUser)} */}

            {(currentUser !== '' || allStore[`${currentUser}`] !== undefined)
            ? (allStore[`${currentUser}`].length === 0) ? textIfStoreIsEmpty : <MessagesWithStore arrStoreMessage={searchedMessages}/> 
            : <div className='no-user'>Select a user to start chatting</div>}
          </div>

        </div>
      </div>

      {console.log('MESSAGESTATE:', messageState)}
      {console.log('currentlySelectedMessages', currentlySelectedMessages)}

      <MiniMessageWithStore />
    </>
  )
}


export default ChatWindow;