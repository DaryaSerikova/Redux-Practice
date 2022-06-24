import { connect } from 'react-redux';
import ChatWindowHeader from '../components/ChatWindowHeader.js/ChatWindowHeader';
import { SEARCHED_MESSAGES, 
  HIDE_MESSAGE_SEARCHING, 
  SHOW_MESSAGE_SEARCHING, 
  RESET_SELECTED_MESSAGES,

  MESSAGE_STATE_IS_EMPTY,
  MESSAGE_STATE_IS_REPLY,
  MESSAGE_STATE_IS_FORWARD,
  REMOVE_GROUP_OF_MESSAGES_FROM_STORE,
  
  // REPLY_ON_MESSAGE_FROM_STORE,
  // REMOVE_MESSAGE_FROM_STORE,

 } from '../redux/actions';



const mapStateToProps = (state) => {
  return { 
    currentlySelectedMessages: state.currentlySelectedMessages,
    messageState: state.messageState,
    allStore: state.allStore,
    currentUser: state.currentUser,
    // searchedMessages: state.messages,
    toggleMessageSearching: state.toggleMessageSearching,
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

    removeGroupOfMessagesFromStore: (arrayForwardIds, name) => {
      dispatch({
        type: REMOVE_GROUP_OF_MESSAGES_FROM_STORE,
        arrayForwardIds,
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

    messageStateIsForward: () => {
      dispatch({
        type: MESSAGE_STATE_IS_FORWARD
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



    // removeMessageFromStore: (id, name) => {
    //   dispatch({
    //     type: REMOVE_MESSAGE_FROM_STORE,
    //     id,
    //     name
    //   })
    // },


    // replyOnMessageFromStore: (value, name, edit, selected, message) => {
    //   dispatch({
    //     type: REPLY_ON_MESSAGE_FROM_STORE, 
    //     value,
    //     name,
    //     edit,
    //     selected,
    //     message
    //   })
    // },
  }
}


const ChatWindowHeaderWithStore = connect(mapStateToProps, mapDispatchToProps)(ChatWindowHeader);
export default ChatWindowHeaderWithStore;