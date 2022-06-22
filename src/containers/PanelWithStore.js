import { connect } from 'react-redux';
import Panel from '../components/Panel/Panel';
import { 
  editMessageInStore,
  updateToNewCurrentMessage, 
  addNewMessageToStore, 
  messageStateIsCreate, 
  messageStateIsEdit,
  messageStateIsEmpty,
  updateSearchedMessages,
  hideMessageSearching,
  // messageStateIsReply,
  replyOnMessageFromStore,
  resetSelectedMessages,
  forwardGroupOfMessagesFromStore,
 } from '../redux/actions';


  
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
}

const PanelWithStore = connect(mapStateToProps, mapDispatchToProps)(Panel);

export default PanelWithStore;