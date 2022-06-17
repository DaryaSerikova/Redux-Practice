import React, {useEffect} from "react";
import SettingsWithStore from "../../containers/SettingsWithStore";
import ReplyMessage from "../ReplyMessage.js/ReplyMessage";
import Message from "../Message/Message";

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
      if (messageState === 'forward') { //Здесь рассматривать currentMessageId как предыдущее значение, message.id - текущее значение.

        updateToNewCurrentMessageId(message.id);
        let res = toggleSelectedMessage.filter((selectMess) => selectMess.id === message.id)[0]; //message.id или currentMessageId?
        let toggleSelectedState = res !== undefined ? res.toggleState : 'hide';


        if (toggleSelectedState === 'show') { // to do HIDE
        
          console.log('(Initial: SHOW)', 'Й', 'currentMessageId:', currentMessageId, 
          ', message.id:', message.id, ', currentMessageId === message.id', currentMessageId === message.id)

          if (currentForwardMessages.length === 1) messageStateIsEmpty();
          hideSelectedMessage(message.id);
          chooseMessageInStore(message.id, false) //id, selected
          removeFromForwardMessage(message.id);

        } else { // to do SHOW
          console.log('(Initial: HIDE) | to do SHOW', 'currentMessageId:', currentMessageId, 
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
  
      // updateCoordinates(`${e.clientX-130}px`, `${e.clientY+10}px`); // for rus
      updateCoordinates(`${e.clientX-88}px`, `${e.clientY+10}px`);
      updateToNewCurrentMessageId(message.id);

      if (messageState !== 'forward' && currentForwardMessages.length === 0) {
        if (toggleSettings === 'hide') {
          showSettings();
        } else {
          hideSettings();
        }
      }

    }
  }
  
  
  const Mess = arrStoreMessage.map((message) => {

//// Здесь должно быть разделение на message это обычный или message в message.value = messageReply

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


    // Идея с className работает, но один раз, потому что не отслеживает изменения store
    // Нужен Redux или Hooks

    // console.log('message.message === undefined', message.message === undefined);

    const messageGeneralProps = {
      id: message.id,
      value: message.value,
      time: message.time,
      edit: message.edit,
      selected: message.selected,

      toggleSelectedState: toggleSelectedState,
      isSelect: isSelect,
      onClick: onClick(message)
    }


    return (
      <>
        <div className={`wrapper-message ${(messageState === 'forward') ? 'space-between' : ''} ${(isSelect) ? toggleSelectedState : 'hide'}-choised-message`} onClick={onChoose(message)}>
          {/* {'console.log(messageState) === "forward"', console.log(messageState === 'forward')} */}
          <img
          className={`checkmark-icon ${(isSelect) ? toggleSelectedState : 'hide'}-checkmark-icon`}
          alt="checkmark-icon"
          src={checkmark}
          />
          {/* {console.log('(!isSelect && (messageState === "forward")', (!isSelect && (messageState === 'forward')) )} */}
          <div className={`${(messageState === 'forward') && 'space-between'} ${(!isSelect && (messageState === 'forward'))? '' : 'hide'}`}>
            <div className="circle-instead-checkmark"></div>
          </div>

          { (message.message === undefined) ?
            <Message {...messageGeneralProps} />
            : <ReplyMessage {...messageGeneralProps} replyMessage={message.message} />}

        </div>
  
        {(message.id === currentMessageId) && <SettingsWithStore message={message}/>}
        {/* {console.log('currentForwardMessages:', currentForwardMessages)} */}
      </>
    )

  })

  return Mess;
}