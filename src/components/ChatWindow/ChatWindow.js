import React, {useState} from 'react';
import './ChatWindow.css';
import { reducerMessageStore } from '../../redux/reducer';
import {createStore} from 'redux';
import { connect } from 'react-redux';
//connect - это HOC

import { getCurrentValue, putStoreMessage } from '../../redux/actions'; //{ getCurrentValue, putStoreMessage } 
import * as actions from 'redux';

const ChatWindow = ({ store: storeMessage, getCurrentValue, putStoreMessage }) => {


  // const newMessageSubmit = '';

  // const storeMessage = createStore(reducerMessageStore);
  // storeMessage.subscribe(() => {
  //   console.log('storeMessage.getState() (in ChatWindow)', storeMessage.getState());
  let arrStoreMessage = storeMessage;
  if (arrStoreMessage === undefined) arrStoreMessage = [];
  const newMessageSubmit = arrStoreMessage[arrStoreMessage.length - 1]; //берем последний объект (полную информацию о последнем сообщении)

  //   console.log('newMessageSubmit', newMessageSubmit);
  // })




  return (
    <>
      <div className='chat-window'></div>
      <div>{newMessageSubmit&&newMessageSubmit.value}</div>
    </>
  )
}


const mapStateToProps = (state) => { //берет текущий state из store
  return { //возвращает свойства, которые нужны
    storeMessage: state //наш counter это весь state
  }
}

const mapDispatchToProps = (dispatch) => {

  // const { getCurrentValue, putStoreMessage } = actions.bindActionCreators(actions, dispatch);

  return {
    // getCurrentValue: () => {
    //   const randomValue = 15; // написать нормальную переменную
    //   getCurrentValue(randomValue);
    // },

    putStoreMessage: (newMessage) => {
      dispatch({
        type: 'PUT_IN_MESSAGE_STORE',
        payload: newMessage
      })
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);