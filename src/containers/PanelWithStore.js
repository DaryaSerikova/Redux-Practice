import { connect } from 'react-redux';
import Panel from '../components/Panel/Panel';
import { 
  updateToNewCurrentMessage, 

  updateSearchedMessages,
  hideMessageSearching,
  hideSelectedMessage,

  addLastSentMessage,
  // resetSelectedMessages,
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

  import { resetSelectedMessages } from '../redux/actions/currentlySelectedMessages';





  
const mapStateToProps = (state) => { //берет текущий state из store
  return {
    currentMessage: state.currentMessage,
    allStore: state.allStore,
    currentUser: state.currentUser,
    messageState: state.messageState,
    currentMessageId: state.currentMessageId,
    currentlySelectedMessages: state.currentlySelectedMessages,
    lastSentMessages: state.lastSentMessages,
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
  addLastSentMessage,
}

const PanelWithStore = connect(mapStateToProps, mapDispatchToProps)(Panel);

export default PanelWithStore;