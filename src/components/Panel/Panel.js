import './Panel.css';

// import { createStore } from 'redux';
// import { reducer, reducerMessageStore } from '../../redux/reducer';
// import { getCurrentValue, putStoreMessage, resetState } from '../../redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateToNewCurrentMessage, addNewMessage } from '../../redux/actions';

// import { messageInfo } from '../../utils';



const Panel = (store) => { //{ store: storeMessage }

  const { storeMessage, updateToNewCurrentMessage, addNewMessage } = store;
  console.log('CHECK', storeMessage)

  // const storeCurrentValue = createStore(reducer);
  
  
  const onChange = (e) => {


    

    // storeCurrentValue.dispatch(getCurrentValue(e.target.value))// это нужно отправить в redux в state
    storeMessage.dispatch(updateToNewCurrentMessage(e.target.value))// это нужно отправить в redux в state
    
  }

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

    // console.log('storeMessage.getState()', storeMessage.getState())
    console.log('storeMessage', storeMessage)


    // store.subscribe(() => { //storeMessage.subscribe(() =>
    //   console.log('storeMessage.getState() (в onSubmit)', storeMessage.getState());
    // });

    const currentValue = storeMessage;

    // storeMessage.dispatch(putStoreMessage(messageInfo));
    storeMessage.dispatch(addNewMessage(currentValue));



    // console.log('storeMessage.getState()', storeMessage.getState())
    console.log('storeMessage', storeMessage)


  }

  return( //Переписать на форму
    <form  className='panel' onSubmit={onSubmit}>
      <textarea 
        className='textarea' 
        placeholder='Write message..' 
        value={mapStateToProps.storeMessage && mapStateToProps.storeMessage}
        onChange={onChange}
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
    storeMessage: state.current_message
  }
}

const mapDispatchToProps = (dispatch) => {

  // const { getCurrentValue, putStoreMessage } = actions.bindActionCreators(actions, dispatch);

  // return {

  //   putStoreMessage: (newMessage) => {
  //     dispatch({
  //       type: 'PUT_IN_MESSAGE_STORE',
  //       payload: newMessage
  //     })
  //   },
  // }

  // return {
  //   //1 способ
  //   // updateToNewCurrentMessage: (newCurrentMessage) => {
  //   //   dispatch ({
  //   //     type: 'current_message/updateToNewCurrentMessage',
  //   //     payload: newCurrentMessage
  //   //   })
  //   // },

  //   // addNewMessage: (newCurrentMessage) => {
  //   //   dispatch({
  //   //     type: 'message_store/addNewMessage',
  //   //     payload: newCurrentMessage
  //   //   })
  //   // },
    
    // // 2 способ
    // updateToNewCurrentMessage: (newCurrentMessage) => {
    //   dispatch (updateToNewCurrentMessage(newCurrentMessage))
    // },

    // addNewMessage: (newCurrentMessage) => {
    //   dispatch(addNewMessage(newCurrentMessage))
    // },
  // }

  return bindActionCreators({
    updateToNewCurrentMessage, 
    addNewMessage
  }, dispatch);

};


export default connect(mapStateToProps, mapDispatchToProps)(Panel);