import { useRef } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { updateToNewCurrentMessage, addNewMessageToStore } from '../../redux/actions';
// import { messageInfo } from '../../utils';
import './Panel.css';


const Panel = ({ currentMessage, messageStore, updateToNewCurrentMessage, addNewMessageToStore }) => { //{ store: storeMessage }

  const formEl = useRef(null);

  console.log('currentMessage:', currentMessage)
  
  // const onChange = (e) => {
  //   // storeCurrentValue.dispatch(getCurrentValue(e.target.value))// это нужно отправить в redux в state
  //   currentMessage.dispatch(updateToNewCurrentMessage(e.target.value))// это нужно отправить в redux в state 
  // }

  const submitMessage = () => {
    addNewMessageToStore(currentMessage);
    formEl.current.reset();
    updateToNewCurrentMessage('');
  }

  const onKeyPressEnter = (e) => {

    if (e.key === 'Enter') { //(e.keyCode == 13 && e.shiftKey == false)

      if (currentMessage !== '') {
        e.preventDefault();
        console.log('Вы нажали Enter');
        submitMessage();
      }
    }
  }


  const onSubmit = (e) => {
    e.preventDefault();
    console.log('ONSUBMIT!')
    // 1. post на сервер сообщения
    // 2. показ сообщения
    // 3. reset текущего state и textarea
    // 4. добавить в историю сообщений (другой state) объект
    //    { id: 1, value: 'Привет!', to: 'Оксана', from: 'Дарья', date: '21.08.2022 23:45'}
    // messageInfo.value = storeCurrentValue.getState();
    // messageInfo.date = new Date();

    console.log('currentMessage', currentMessage)
    // const currentValue = currentMessage;
    // storeMessage.dispatch(putStoreMessage(messageInfo));

    // const form = e.target;

    if (currentMessage !== '')  submitMessage();
    console.log('messageStore', messageStore);
  }


  return (
    <form ref={formEl} className='panel' onSubmit={onSubmit}  >
    
      <textarea 
        
        className='textarea' 
        placeholder='Write message..' 
        value={mapStateToProps.currentMessage && mapStateToProps.currentMessage}
        onChange={(e) => updateToNewCurrentMessage(e.target.value)}
        onKeyPress={onKeyPressEnter}
      ></textarea>

      <div className='wrapper-btn'>
        <button 
          type="submit" 
          className='btn btn-success custom-btn'
        > Send </button>
      </div>

    </form>
  )
}



const mapStateToProps = (state) => { //берет текущий state из store
  return { //возвращает свойства, которые нужны
    currentMessage: state.current_message,
    messageStore: state.message_store
  }
}

const mapDispatchToProps = {

  updateToNewCurrentMessage, 
  addNewMessageToStore
}


export default connect(mapStateToProps, mapDispatchToProps)(Panel);

// const mapDispatchToProps = (dispatch) => {

//   // const { getCurrentValue, putStoreMessage } = actions.bindActionCreators(actions, dispatch);

//   // return {

//   //   putStoreMessage: (newMessage) => {
//   //     dispatch({
//   //       type: 'PUT_IN_MESSAGE_STORE',
//   //       payload: newMessage
//   //     })
//   //   },
//   // }

//   // return {
//   //   //1 способ
//   //   // updateToNewCurrentMessage: (newCurrentMessage) => {
//   //   //   dispatch ({
//   //   //     type: 'current_message/updateToNewCurrentMessage',
//   //   //     payload: newCurrentMessage
//   //   //   })
//   //   // },

//   //   // addNewMessage: (newCurrentMessage) => {
//   //   //   dispatch({
//   //   //     type: 'message_store/addNewMessage',
//   //   //     payload: newCurrentMessage
//   //   //   })
//   //   // },
    
//     // // 2 способ
//     // updateToNewCurrentMessage: (newCurrentMessage) => {
//     //   dispatch (updateToNewCurrentMessage(newCurrentMessage))
//     // },

//     // addNewMessage: (newCurrentMessage) => {
//     //   dispatch(addNewMessage(newCurrentMessage))
//     // },
//   // }

//   return bindActionCreators({
//     updateToNewCurrentMessage, 
//     addNewMessageToStore
//   }, dispatch);

// };