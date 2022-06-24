import React, {useEffect} from "react";

import SettingsWithStore from "../../containers/SettingsWithStore";
import Message from "../Message/Message";
import ReplyMessage from "../ReplyMessage.js/ReplyMessage";
import ForwardedMessages from "../ForwardedMessages/ForwardedMessages";

import checkmark from '../../assets/checkmark_blue32.png';
import './Messages.css';



export const Messages = ({ 
  allStore,
  currentUser,
  messageState,
  currentMessageId,
  toggleSettings,
  updateCoordinates,
  updateToNewCurrentMessageId, 
  addToSelectedMessages,

  hideSettings, 
  showSettings,
  arrStoreMessage, //props
  currentlySelectedMessages,
  chooseMessageInStore,
  updateSearchedMessages, 
  hideSelectedMessage, 
  showSelectedMessage,
  toggleSelectedMessage,
  messageStateIsForward,
  removeFromSelectedMessages,
  messageStateIsEmpty,
 }) => {

  const hideCheckmarkIcon = `hide-checkmark-icon`;

  useEffect(() => {
    console.log('currentlySelectedMessages ИЗМЕНИЛСЯ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

  }, [currentlySelectedMessages]); // [currentForwardMessages]  //allStore, currentUser, updateSearchedMessages 
  

  const onChoose = (message) => {
    return (e) => {

      if (messageState === 'select') { //Здесь рассматривать currentMessageId как предыдущее значение, message.id - текущее значение.

        updateToNewCurrentMessageId(message.id);
        let res = toggleSelectedMessage.filter((selectMess) => selectMess.id === message.id)[0]; //message.id или currentMessageId?
        let toggleSelectedState = res !== undefined ? res.toggleState : 'hide';


        if (toggleSelectedState === 'show') { // to do HIDE

          if (currentlySelectedMessages.length === 1) messageStateIsEmpty();

          hideSelectedMessage(message.id);
          chooseMessageInStore(message.id, false) //id, selected
          removeFromSelectedMessages(message.id);

        } else { // to do SHOW

          showSelectedMessage(message.id);
          chooseMessageInStore(message.id, true) //id, selected
          addToSelectedMessages(message);
        }

      }
    }
  }


  const onClick = (message) => {
    return (e) => {
  
      // updateCoordinates(`${e.clientX-130}px`, `${e.clientY+10}px`); // for rus
      updateCoordinates(`${e.clientX-88}px`, `${e.clientY+10}px`);
      updateToNewCurrentMessageId(message.id);

      if (messageState !== 'select' && currentlySelectedMessages.length === 0) {
        if (toggleSettings === 'hide') {
          showSettings();
        } else {
          hideSettings();
        }
      }

    }
  }
  
  
  const Mess = arrStoreMessage.map((message) => {

    let arrId = currentlySelectedMessages.map((forwardMess) => {
      return forwardMess.id
    })

    let selectedId = arrId.find(id => id === message.id);
    if (selectedId === undefined) selectedId = false;
    let isSelect = (selectedId !== false) ? true : false;

    let res = toggleSelectedMessage.filter((selectMess) => selectMess.id === message.id)[0];
    let toggleSelectedState = res !== undefined ? res.toggleState : 'hide';


    const messageGeneralProps = {
      id: message.id,
      value: message.value,
      time: message.time,
      edit: message.edit,
      selected: message.selected,

      toggleSelectedState: toggleSelectedState,
      isSelect: isSelect,
      onClick: onClick(message),
      messageState: messageState
    }


    return (
      <>
        <div className={`wrapper-message ${(messageState === 'select') ? 'space-between' : ''} ${(!isSelect) ? 'hide' : (messageState==='reply'||messageState==='forward') ? 'hide' : toggleSelectedState }-choised-message`} onClick={onChoose(message)}>
          <img
          className={`checkmark-icon ${(!isSelect) ? 'hide' : (messageState==='reply'||messageState==='forward') ? 'hide' : toggleSelectedState}-checkmark-icon`}
          alt="checkmark-icon"
          src={checkmark}
          />

          <div className={`${(messageState === 'select') && 'space-between'} ${(!isSelect && (messageState === 'select')) ? '' : 'hide'}`}>
            <div className="circle-instead-checkmark"></div>
          </div>
          
          { (message.message === undefined)&&(message.messages === undefined) ?
            <Message {...messageGeneralProps} />
            : (message.messages === undefined) ? 
              <ReplyMessage {...messageGeneralProps} replyMessage={message.message} />
              : <ForwardedMessages {...messageGeneralProps} forwardedMessages={message.messages}/>}

        </div>
  
        {(message.id === currentMessageId) && <SettingsWithStore message={message}/>}
      </>
    )

  })

  return Mess;
}