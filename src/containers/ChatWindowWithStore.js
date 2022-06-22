import { connect } from 'react-redux';
//connect - это HOC
import ChatWindow from '../components/ChatWindow/ChatWindow'
import { SEARCHED_MESSAGES, 
  HIDE_MESSAGE_SEARCHING, 
  SHOW_MESSAGE_SEARCHING, 
  REMOVE_MESSAGE_FROM_STORE,

  // RESET_FORWARD_MESSAGE,
  RESET_SELECTED_MESSAGES,

  MESSAGE_STATE_IS_EMPTY,
  MESSAGE_STATE_IS_REPLY,
  REMOVE_GROUP_OF_MESSAGES_FROM_STORE,
  REPLY_ON_MESSAGE_FROM_STORE,
  MESSAGE_STATE_IS_FORWARD,

 } from '../redux/actions';


const mapStateToProps = (state) => {
  return { 
    allStore: state.allStore,
    currentUser: state.currentUser,
    searchedMessages: state.messages,
    toggleMessageSearching: state.toggleMessageSearching,

    // currentForwardMessages: state.currentForwardMessages,
    currentlySelectedMessages: state.currentlySelectedMessages,

    messageState: state.messageState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchedMessages: (messages) => {
      dispatch({
        type: SEARCHED_MESSAGES,
        messages
      })
    },

    hideMessageSearching: () => {
      dispatch({
        type: HIDE_MESSAGE_SEARCHING
      })
    },
    
    showMessageSearching: () => {
      dispatch({
        type: SHOW_MESSAGE_SEARCHING
      })
    },

    removeMessageFromStore: (id, name) => {
      dispatch({
        type: REMOVE_MESSAGE_FROM_STORE,
        id,
        name
      })
    },

    resetSelectedMessages: () => { //resetForwardMessage
      dispatch({
        type: RESET_SELECTED_MESSAGES,//RESET_FORWARD_MESSAGE
      })
    },

    messageStateIsEmpty: () => {
      dispatch({
        type: MESSAGE_STATE_IS_EMPTY
      })
    },

    messageStateIsReply: () => {
      dispatch({
        type: MESSAGE_STATE_IS_REPLY
      })
    },

    removeGroupOfMessagesFromStore: (arrayForwardIds, name) => {
      dispatch({
        type: REMOVE_GROUP_OF_MESSAGES_FROM_STORE,
        arrayForwardIds,
        name
      })
    },

    replyOnMessageFromStore: (value, name, edit, selected, message) => {
      dispatch({
        type: REPLY_ON_MESSAGE_FROM_STORE, 
        value,
        name,
        edit,
        selected,
        message
      })
    },
    messageStateIsForward: () => {
      dispatch({
        type: MESSAGE_STATE_IS_FORWARD
      })
    },
    

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);