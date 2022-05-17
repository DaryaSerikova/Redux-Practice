import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { updateToNewCurrentMessage, addNewMessageToStore } from '../../redux/actions';
// import { messageInfo } from '../../utils';
import './Panel.css';


const Panel = ({ currentMessage, messageStore, updateToNewCurrentMessage, addNewMessageToStore }) => { //{ store: storeMessage }

  console.log('CHECK! (currentMessage)', currentMessage)
  
  // const onChange = (e) => {
  //   // storeCurrentValue.dispatch(getCurrentValue(e.target.value))// это нужно отправить в redux в state
  //   currentMessage.dispatch(updateToNewCurrentMessage(e.target.value))// это нужно отправить в redux в state 
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('ONSUBMIT!')
    // 1. post на сервер сообщения
    // 2. показ сообщения
    // 3. reset текущего state и textarea
    // 4. добавить в историю сообщений (другой state) объект
    //    { value: 'Привет!', to: 'Оксана', from: 'Дарья', date: '21.08.2022 23:45'}
    // messageInfo.value = storeCurrentValue.getState();
    // messageInfo.date = new Date();

    console.log('currentMessage', currentMessage)
    // const currentValue = currentMessage;
    // storeMessage.dispatch(putStoreMessage(messageInfo));

    addNewMessageToStore(currentMessage);
    console.log('messageStore', messageStore)
  }

  return(
    <form  className='panel' onSubmit={onSubmit}>
      <textarea 
        className='textarea' 
        placeholder='Write message..' 
        value={mapStateToProps.currentMessage && mapStateToProps.currentMessage}
        onChange={(e) => updateToNewCurrentMessage(e.target.value)}
      ></textarea>

      <div className='wrapper-btn'>
        <button 
          type="submit" 
          className='btn btn-success custom-btn'
        >
          Send
        </button>
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
  // onIncrease: bookAddedToCart,

  // onDecrease: bookRemovedFromCart,
  // onDelete: allBooksRemovedFromCart,

  updateToNewCurrentMessage, 
  addNewMessageToStore
}

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


export default connect(mapStateToProps, mapDispatchToProps)(Panel);