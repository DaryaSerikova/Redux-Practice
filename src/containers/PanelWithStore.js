import { connect } from 'react-redux';
import Panel from '../components/Panel/Panel';
import { 
  updateToNewCurrentMessage, 

  updateSearchedMessages,
  hideMessageSearching,
  hideSelectedMessage,
  resetSelectedMessages,


  // replyOnMessageFromStore,
  // forwardGroupOfMessagesFromStore,
  
 } from '../redux/actions/actions';

import {
  messageStateIsCreate, 
  messageStateIsEdit,
  messageStateIsEmpty,
 } from '../redux/actions/messageState';

import {
  editMessageInStore,
  addNewMessageToStore, 

  replyOnMessageFromStore,
  forwardGroupOfMessagesFromStore,
  } from '../redux/actions/allStore';



  
const mapStateToProps = (state) => { //берет текущий state из store
  return {
    currentMessage: state.currentMessage,
    allStore: state.allStore,
    currentUser: state.currentUser,
    messageState: state.messageState,
    currentMessageId: state.currentMessageId,
    currentlySelectedMessages: state.currentlySelectedMessages,
  }
}

const mapDispatchToProps = {
  updateToNewCurrentMessage, 
  addNewMessageToStore,
  messageStateIsCreate, 
  messageStateIsEdit,
  // messageStateIsReply,
  messageStateIsEmpty,
  editMessageInStore,
  updateSearchedMessages,
  hideMessageSearching,
  replyOnMessageFromStore,
  resetSelectedMessages,
  forwardGroupOfMessagesFromStore,
  hideSelectedMessage,
}

const PanelWithStore = connect(mapStateToProps, mapDispatchToProps)(Panel);

export default PanelWithStore;