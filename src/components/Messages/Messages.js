import React, {useEffect} from "react";

import SettingsWithStore from "../../containers/SettingsWithStore";
import Message from "../Message/Message";
import ReplyMessage from "../ReplyMessage.js/ReplyMessage";
import ForwardedMessages from "../ForwardedMessages/ForwardedMessages";
import { getIsSelect } from "../../utils/getIsSelect";
import { getMessageType } from "../../utils/getMessageType";

import classnames from 'classnames';
// import { wrapperMessage } from "./MessagesClassnames";
import { wrapperMessage, checkmarkIcon, wrapperCircle } from "./MessagesClassnames";
import checkmark from '../../assets/checkmark-edit_blue32.png';


import './Messages.css';
// import { animationStateIsEnd } from "../../redux/actions/actions";



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
  animationStateIsEnd,
  // animationStateIsEmpty,
  animationStateIsStart,
  animationState,
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

          hideSelectedMessage(message.id);
          chooseMessageInStore(message.id, false) //id, selected
          removeFromSelectedMessages(message.id);

          // animationStateIsEmpty();

          if (currentlySelectedMessages.length === 1) {
            console.log("XEQ")
            console.log('(conditional for currentlySelectedMessages.length === 1) before messageStateIsEmpty');
            // animationStateIsEnd();

            console.log("ANIMATION STATE", animationState)
            // messageStateIsEmpty(); //// ТУТ ПОЛОМКА с forward (решена)
            animationStateIsStart();
            messageStateIsEmpty(); //// ТУТ ПОЛОМКА с forward (решена)

          }

        } else { // to do SHOW
          if (currentlySelectedMessages.length === 1) animationStateIsEnd();
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
    let isSelect = getIsSelect(arrId, message);

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
      messageState: messageState,
      // animationState: animationState
    }

    let messageType = getMessageType(message);

    const getCertainMessage = (messageType) => {

      switch(messageType) {
        case 'message':
          return <Message {...messageGeneralProps} />

        case 'reply':
          return <ReplyMessage {...messageGeneralProps} replyMessage={message.message} />

        case 'forward':
          return <ForwardedMessages {...messageGeneralProps} forwardedMessages={message.messages}/>
        
        // нужен нормальный UI для других вариаций
        case 'reply(reply)':
        case 'reply(forward)':
          return <ReplyMessage {...messageGeneralProps} replyMessage={message.message} />
        
        default:
          return <Message {...messageGeneralProps}/>

      }
    }

    let certainMessage = getCertainMessage(messageType);



    // console.log('currentlySelectedMessages', currentlySelectedMessages)

    let oneMessage = ((currentlySelectedMessages !== undefined) && (currentlySelectedMessages !== [])) ? currentlySelectedMessages[0] : '';
    let currentUserWithSelectedMessages = (oneMessage !== undefined) ? oneMessage.name : '';



    return (
      <>
        <div 
          // className={`wrapper-message ${(messageState === 'select') ? 'space-between' : ''} ${(!isSelect) ? 'hide' : (messageState==='reply'||messageState==='forward') ? 'hide' : toggleSelectedState }-choised-message`}
          className={wrapperMessage(messageState, isSelect, toggleSelectedState)}
          onClick={onChoose(message)}>

          <div className={`wrapper-checkmark-icon ${(!isSelect) ? 'hide' : (messageState==='reply'||messageState==='forward') ? 'hide' : toggleSelectedState}-checkmark-icon`}>
          
            <img
            // className={`checkmark-icon ${(!isSelect) ? 'hide' : (messageState==='reply'||messageState==='forward') ? 'hide' : toggleSelectedState}-checkmark-icon`}
            className={checkmarkIcon(messageState, isSelect, toggleSelectedState)}
            alt="checkmark-icon"
            src={checkmark}
            />

          </div>

          <div className={wrapperCircle(animationState, messageState, isSelect)}>
            <div className="circle-instead-checkmark"></div>
          </div>
          
          {certainMessage}

        </div>
  
        {(message.id === currentMessageId) && <SettingsWithStore message={message}/>}
      </>
    )

  })

  return Mess;
}