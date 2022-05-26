import { useRef } from 'react';
import { updateToNewCurrentMessage, addNewMessageToStore, editMessageInStore } from '../../redux/actions';
// import { messageInfo } from '../../utils';
import './Panel.css';


const Panel = ({ 
  currentMessage, 
  allStore, 
  currentUser, 
  messageState,
  currentMessageId,
  updateToNewCurrentMessageId,   
  updateToNewCurrentMessage, 
  addNewMessageToStore,
  messageStateIsCreate, 
  messageStateIsEdit,
  editMessageInStore,
  messageIsEdited }) => { 

  const formEl = useRef(null);
  // console.log('currentMessage:', currentMessage);

  const cancelEdit = () => {
    updateToNewCurrentMessage('');
    messageStateIsCreate();
  }

  const submitMessage = () => {

    if (messageState === 'create') {
      addNewMessageToStore(currentMessage, currentUser);
    }
    if (messageState === 'edit') {
      // console.log('id', currentMessageId)
      editMessageInStore(currentMessageId, currentMessage, currentUser);
    }
    // console.log('formEl.current', formEl.current)
    formEl.current.reset();
    messageIsEdited();
    cancelEdit();
  }

  const onKeyPressEnter = (e) => {
    if (e.key === 'Enter'&&e.shiftKey === false) {
      if (currentMessage !== '') {
        e.preventDefault();
        // console.log('Вы нажали Enter');
        submitMessage();
        // console.log('currentUser', currentUser);
        // console.log('allStore', allStore);        
        // console.log('messageStore', allStore[`${currentUser}`])
      }
    }
  }


  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('ONSUBMIT!')

    // console.log('currentMessage', currentMessage);
    // const form = e.target;
    if (currentMessage !== '')  submitMessage();
    // console.log('currentUser', currentUser);
    // console.log('allStore', allStore);   
    // console.log('messageStore', allStore[currentUser]);
  }


  return (
    <form ref={formEl} className='panel' onSubmit={onSubmit}>

      {<div className='edit-group'>
        <span className={`editing-message ${(messageState !== 'edit')&&'hideOpacity'}`}>Editing a message</span>
        <div className={`${(messageState !== 'edit')&&'hide'} cross`} onClick={cancelEdit}>&#9587;</div>
      </div>}

      {(currentUser !== '') &&
      <textarea 
        className={`textarea ${(messageState === 'edit')&&'border-editing'}`}
        placeholder='Write message..' 
        // value={mapStateToProps.currentMessage && mapStateToProps.currentMessage}
        value={currentMessage}
        onChange={(e) => updateToNewCurrentMessage(e.target.value)}
        onKeyPress={onKeyPressEnter}
        autoFocus
      />}

      {(currentUser !== '') && <div className='wrapper-btn'>
        <button 
          type="submit" 
          className='btn btn-success custom-btn'
        > Send </button>
      </div>}

    </form>
  )
}


export default Panel;



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