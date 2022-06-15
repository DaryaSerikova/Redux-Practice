import React, {useEffect} from "react";
import Message from "../Message/Message";
// import checkmark from '../../assets/checkmark32.png';
// import checkmark from '../../assets/checkmark_blue32.png';
import checkmark from '../../assets/checkmark_blue64.png';

import './Messages.css';
import SettingsWithStore from "../../containers/SettingsWithStore";


export const Messages = ({ 
  allStore,
  currentUser,
  messageState,
  currentMessageId,
  toggleSettings,
  updateCoordinates,
  updateToNewCurrentMessageId, 
  // clickCoordinates,  
  // messageStateIsCreate, 
  // messageStateIsEdit,
  // updateToNewCurrentMessage, 
  // removeMessageFromStore,
  addToForwardMessages,
  hideSettings, 
  showSettings,
  arrStoreMessage, //props
  currentForwardMessages,
  chooseMessageInStore,
  updateSearchedMessages, 
  hideSelectedMessage, 
  showSelectedMessage,
  toggleSelectedMessage,
  messageStateIsForward,
  removeFromForwardMessage,
  messageStateIsEmpty,
 }) => {

  const hideCheckmarkIcon = `hide-checkmark-icon`;

  useEffect(() => {
    // if (currentUser !== '') updateSearchedMessages(allStore[`${currentUser}`]);
    // if (currentMessageId === message.id) {}
    console.log('currentForwardMessages ИЗМЕНИЛСЯ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  }, [currentForwardMessages]); //allStore, currentUser, updateSearchedMessages 


  const onChoose = (message) => {
    return (e) => {
      if(messageState === 'forward') {

        updateToNewCurrentMessageId(message.id);
        let res = toggleSelectedMessage.filter((selectMess) => selectMess.id === message.id)[0]; //message.id или currentMessageId?
        let toggleSelectedState = res !== undefined ? res.toggleState : 'hide';

        if (toggleSelectedState === 'show') { 
        // if (toggleSelectedMessage === 'show') { 
        
          console.log('Первый if. (Initial: SHOW)', 'Й', 'currentMessageId:', currentMessageId, 
          ', message.id:', message.id, ', currentMessageId === message.id', currentMessageId === message.id)

          if (currentMessageId === message.id) { // to do HIDE
            console.log('Второй if. (Initial: SHOW) to do HIDE, curMessId === mess.id', 'Й HIDING');

            // Это 'hide' для className один статус на всех
            hideSelectedMessage(message.id);// возможно именно эта фигня отвечает за скрытие всех сообщений разом

            // chooseMessageInStore(message.id, false) //id, selected
            chooseMessageInStore(currentMessageId, false) //id, selected

            // if (currentForwardMessages.length === 1) messageStateIsEmpty();
            removeFromForwardMessage(message.id);

          } else { // to do SHOW
            console.log('Второй else. (Initial: SHOW) to do SHOW , curMessId !== mess.id', 'Й SHOWING');

            // Это 'show' для className один статус на всех
            showSelectedMessage(message.id); // возможно именно эта фигня отвечает за показ всех сообщений разом

            // chooseMessageInStore(message.id, true) //id, selected
            chooseMessageInStore(currentMessageId, true) //id, selected
            addToForwardMessages(message);
          }


        } else { // to do SHOW
          console.log('Первый else. (Initial: HIDE) | to do SHOW', 'currentMessageId:', currentMessageId, 
          ', message.id:', message.id, ', currentMessageId === message.id', currentMessageId === message.id)
          showSelectedMessage(message.id);
          chooseMessageInStore(message.id, true) //id, selected
          addToForwardMessages(message);
        }
      }
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


    let arrId = currentForwardMessages.map((forwardMess) => {
      return forwardMess.id
    })

    let selectedId = arrId.find(id => id === message.id);
    // if (selectedId)
    if (selectedId === undefined) selectedId = false;
    let isSelect = (selectedId !== false) ? true : false;
    
    // console.log('arrId:', arrId);
    console.log('message.id', message.id,'isSelect:', isSelect, '|', 'arrId:', arrId);


    let res = toggleSelectedMessage.filter((selectMess) => selectMess.id === message.id)[0];
    let toggleSelectedState = res !== undefined ? res.toggleState : 'hide';
    console.log('res:', res, 'toggleSelectedState', toggleSelectedState) 

    // var s = new Set(['foo', window]);
    // Array.from(s);


    // Идея с className работает, но один раз, потому что не отслеживает изменения store
    // Нужен Redux или Hooks

    // <div className={`wrapper-message ${!message.selected ? `hide-checkmark`: ''}`}>
    // className={`checkmark-icon ${!message.selected ? `hide-checkmark-icon`: ''}`}

    // const messEdited = message.edit ? '(edited)' : '';



    // <div className={`wrapper-message ${(message.id === currentMessageId || message.selected ) && toggleSelectedMessage}-choised-message`} onClick={onChoose(message)}>
    // className={`checkmark-icon ${(message.id === currentMessageId) && toggleSelectedMessage}-checkmark-icon`}
    // console.log('message.id', message.id, 'message.selected:', message.selected);


    // <div className={`wrapper-message ${(isSelect) ? toggleSelectedMessage : 'hide'}-choised-message`} onClick={onChoose(message)}>
    // className={`checkmark-icon ${(isSelect) ? toggleSelectedMessage : 'hide'}-checkmark-icon`}



    return (
      <>
        {/* {console.log('isSelect:', isSelect, ', toggleSelectedMessage:', toggleSelectedMessage, ', isSelect && toggleSelectedMessage ', isSelect && toggleSelectedMessage)} */}
        <div className={`wrapper-message ${(isSelect) ? toggleSelectedState : 'hide'}-choised-message`} onClick={onChoose(message)}>
        {/* {console.log('message.id:', message.id, ' message.selected:', message.selected)} */}
          <img
          className={`checkmark-icon ${(isSelect) ? toggleSelectedState : 'hide'}-checkmark-icon`}
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
            // toggleSelectedMessage={toggleSelectedMessage}
            toggleSelectedState={toggleSelectedState}
            isSelect={isSelect}
          />
        </div>
  
        {(message.id === currentMessageId) && <SettingsWithStore message={message}/>}
        {console.log('currentForwardMessages:', currentForwardMessages)}
      </>
    )
  })

  return Mess;
}