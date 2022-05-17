import React  from 'react';
import './ChatWindow.css';
import { connect } from 'react-redux';
//connect - это HOC

import { addNewMessageToStore, updateToNewCurrentMessage } from '../../redux/actions'; //{ getCurrentValue, putStoreMessage } 
import * as actions from 'redux';
import { Message } from '../Message/Message';
import '../Message/Message.css'


const ChatWindow = ({ storeMessage, addNewMessageToStore, updateToNewCurrentMessage }) => {


  let arrStoreMessage = storeMessage;
  if (arrStoreMessage === undefined) arrStoreMessage = [];
  // const newMessageSubmit = arrStoreMessage[arrStoreMessage.length - 1]; //берем последний объект (полную информацию о последнем сообщении)


  const Messages = arrStoreMessage.map((message) => {

    return <div className='message'>{message.value}</div>
  })


  return (
    <div className='scroll-window '>
      <div className='chat-window'>
        {Messages}
      </div>
    </div>
  )
}


const mapStateToProps = (state) => { //берет текущий state из store
  return { //возвращает свойства, которые нужны
    storeMessage: state.message_store
  }
}

const mapDispatchToProps = (dispatch) => {

  // const { getCurrentValue, putStoreMessage } = actions.bindActionCreators(actions, dispatch);

  return {
    // getCurrentValue: () => {
    //   const randomValue = 15; // написать нормальную переменную
    //   getCurrentValue(randomValue);
    // },

    addNewMessageToStore: (newMessage) => {
      dispatch({
        type: 'PUT_IN_MESSAGE_STORE',
        payload: newMessage
      })
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);