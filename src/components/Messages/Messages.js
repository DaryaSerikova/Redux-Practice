import React, {useState, useEffect, useRef} from "react";
import Message from "../Message/Message";
import checkmark from '../../assets/checkmark32.png';
import './Messages.css';
import SettingsWithStore from "../../containers/SettingsWithStore";


export const Messages = ({ 
  allStore,
  currentUser,
  currentMessageId,
  toggleSettings,
  updateCoordinates,
  updateToNewCurrentMessageId, 
  // clickCoordinates,  
  // messageStateIsCreate, 
  // messageStateIsEdit,
  // updateToNewCurrentMessage, 
  // removeMessageFromStore,
  // addToForwardMessages,
  hideSettings, 
  showSettings,
  arrStoreMessage, //props
  currentForwardMessages,
  chooseMessageInStore,
  updateSearchedMessages, 
  hideSelectedMessage, 
  showSelectedMessage,
  toggleSelectedMessage
 }) => {

  // // const [stateMessage, setStateMessage] = useState({});
  // const [stateWithoutCheckmark, setStateWithoutCheckmark] = useState('');
  // const [stateToggleSelectedMessage, setStateToggleSelectedMessage] = useState('');

  const hideCheckmarkIcon = `hide-checkmark-icon`;


  // useEffect(() => {

  //   if (stateMessage !== {}) {
  //     const message = stateMessage;
  //     if (currentUser !== '') updateSearchedMessages(allStore[`${currentUser}`]);
  //     let toggleCheckmark = !message.selected ? `without-checkmark`: ''
  //     let toggleSelectedMessage = !message.selected ? `hide-checkmark-icon`: ''
  //   }
  // }, [
  //   // chooseMessageInStore
  // ]);


  const onChoose = (message) => {
    return (e) => {
      if (toggleSelectedMessage === 'show') {
        hideSelectedMessage();
      } else {
        showSelectedMessage();
      }
      chooseMessageInStore(message.id, true) //id, selected
    }
  }


  const onClick = (message) => {
    return (e) => {
  
      updateCoordinates(`${e.clientX-130}px`, `${e.clientY+10}px`);
      updateToNewCurrentMessageId(message.id);
  
      if (toggleSettings === 'hide') {
        showSettings();
      } else {
        hideSettings();
      }
    }
  }
  
  
  const Mess = arrStoreMessage.map((message) => {
  // Идея с className работает, но один раз, потому что не отслеживает изменения store
  // Нужен Redux или Hooks

    // // let newMess = message;
    // // setStateMessage(newMess);
    // let toggleCheckmark = !message.selected ? `without-checkmark`: '';
    // setStateWithoutCheckmark(toggleCheckmark);
    // let toggleSelectedMessage = !message.selected ? `hide-checkmark-icon`: '';
    // setStateToggleSelectedMessage(toggleSelectedMessage);

    // // <div className={`wrapper-message ${!message.selected ? `without-checkmark`: ''}`}>
    // // className={`checkmark-icon ${!message.selected ? `hide-checkmark-icon`: ''}`}
    // let toggleMark = stateWithoutCheckmark;
    // let toggleSelect = stateToggleSelectedMessage;

    // <div className={`wrapper-message ${toggleMark}`}>
    // className={`checkmark-icon ${toggleSelect}`}




    // <div className={`wrapper-message ${!message.selected ? `hide-checkmark`: ''}`}>
    // className={`checkmark-icon ${!message.selected ? `hide-checkmark-icon`: ''}`}

    // const messEdited = message.edit ? '(edited)' : '';


    return (
      <>
        <div className={`wrapper-message ${(message.id === currentMessageId) && toggleSelectedMessage}-choised-message`} onClick={onChoose(message)}>
        {console.log('id:', message.id, ' selected:', message.selected)}
          <img
          className={`checkmark-icon ${(message.id === currentMessageId) && toggleSelectedMessage}-checkmark-icon`}
          alt="checkmark-icon"
          src={checkmark}
          />
          <Message
            id={message.id}
            value={message.value} 
            onClick={onClick(message)}
            time={message.time}
            edit={message.edit}
            selected={message.selected}
            toggleSelectedMessage={toggleSelectedMessage}
          />
          {/* <div 
            id={message.id} 
            className={`message`}
            value={message.value} 
            onClick={onClick}
            time={message.time}
            edit={message.edit}
            selected={message.selected}
            >
            {message.value}
            <div className='message-time'>{message.time}{messEdited}</div>
          </div> */}
        </div>
  
        {(message.id === currentMessageId) && <SettingsWithStore message={message}/>}
        {console.log('currentForwardMessages:', currentForwardMessages)}
      </>
    )
  })

  return Mess;
}