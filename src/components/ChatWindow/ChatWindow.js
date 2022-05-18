import React  from 'react';
import './ChatWindow.css';
import { connect } from 'react-redux';
//connect - это HOC

import { addNewMessageToStore, updateToNewCurrentMessage } from '../../redux/actions'; //{ getCurrentValue, putStoreMessage } 
import * as actions from 'redux';
import { Message } from '../Message/Message';
import '../Message/Message.css'




// const toggleHide = (elem) => {
//   console.log('elem', elem);
//   // elem.classList.toggle('hide');
//   // if (elem.classList.contains('hide') )
// }

const ChatWindow = ({ storeMessage, addNewMessageToStore, updateToNewCurrentMessage }) => {
  // const elem = document.getElementById('settings');

  let arrStoreMessage = storeMessage;
  if (arrStoreMessage === undefined) arrStoreMessage = [];
  // const newMessageSubmit = arrStoreMessage[arrStoreMessage.length - 1]; //берем последний объект (полную информацию о последнем сообщении)

  const onClick = (e) => {
    console.log('(ChatWindow) onClick!');
    // toggleHide(elem);
  }

  let messageId = -1;

  const Messages = arrStoreMessage.map((message) => {
    messageId++;
    return (
      <>
        <div key={messageId} className='message' onClick={onClick}>{message.value}</div>
        <div id='settings' className='setting-buttons'>
          <div className='setting-btn'>Редактировать</div>
          <div className='setting-btn'>Удалить</div>
        </div>
      </>
    )
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