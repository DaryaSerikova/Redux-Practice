import React, {useState} from 'react';
import './ChatWindow.css';
import { reducerMessageStore } from '../../redux/reducer';
import {createStore} from 'redux';
import { connect } from 'react-redux';
//connect - это HOC

import { getCurrentValue, putStoreMessage } from '../../redux/actions'; //{ getCurrentValue, putStoreMessage } 
import * as actions from 'redux';

const ChatWindow = ({ storeMessage, getCurrentValue, putStoreMessage }) => {



  const newMessageSubmit = '';

  // const storeMessage = createStore(reducerMessageStore);
  // storeMessage.subscribe(() => {
  //   console.log('storeMessage.getState() (in ChatWindow)', storeMessage.getState());
    newMessageSubmit = storeMessage.getState()[storeMessage.length - 1].value;
  //   console.log('newMessageSubmit', newMessageSubmit);
  // })



  return (
    <>
      <div className='chat-window'> окошко</div>
      <div>{newMessageSubmit}</div>
    </>
  )
}


const mapStateToProps = (state) => { //берет текущий state из store
  return { //возвращает свойства, которые нужны
    counter: state //наш counter это весь state
  }
}

const mapDispatchToProps = (dispatch) => {

  const { getCurrentValue, putStoreMessage } = actions.bindActionCreators(actions, dispatch);

  return {
    getCurrentValue: () => {
      const randomValue = 15; // написать нормальную переменную
      getCurrentValue(randomValue);
    },
    putStoreMessage: () => {
      const variable = 0; //здесь тоже
      putStoreMessage(variable);
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);