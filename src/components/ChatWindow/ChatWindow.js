import React, {useState} from 'react';
import './ChatWindow.css';
import { reducerMessageStore } from '../../redux/reducer';
import {createStore} from 'redux';



export const ChatWindow = () => {



  const newMessage = '';

  const storeMessage = createStore(reducerMessageStore);
  storeMessage.subscribe(() => {
    console.log('storeMessage.getState()', storeMessage.getState());
    newMessage = storeMessage.getState()[storeMessage.length - 1].value;
    console.log('newMessage', newMessage);
  })



  return (
    <>
      <div className='chat-window'> окошко</div>
      <div>{newMessage}</div>
    </>
  )
}