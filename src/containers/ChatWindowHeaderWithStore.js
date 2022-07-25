import { connect } from 'react-redux';
import ChatWindowHeader from '../components/ChatWindowHeader.js/ChatWindowHeader';
import { 
  SEARCHED_MESSAGES, 
  HIDE_MESSAGE_SEARCHING, 
  SHOW_MESSAGE_SEARCHING, 

  ANIMATION_STATE_IS_END,
  ANIMATION_STATE_IS_START,

  UPDATE_TO_NEW_CURRENT_MESSAGE_ID,
  UPDATE_TO_NEW_CURRENT_MESSAGE,

  MOBILE_STATE_IS_USERS,
  MOBILE_STATE_IS_MESSAGES,

} from '../redux/actions/actions';

import {
  MESSAGE_STATE_IS_EMPTY,
  MESSAGE_STATE_IS_EDIT,
  MESSAGE_STATE_IS_REPLY,
  MESSAGE_STATE_IS_FORWARD,
  } from '../redux/actions/messageState';

import { REMOVE_GROUP_OF_MESSAGES_FROM_STORE } from '../redux/actions/allStore';
import { RESET_SELECTED_MESSAGES } from '../redux/actions/currentlySelectedMessages';




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

    messageStateIsEdit: () => {
      dispatch({
        type: MESSAGE_STATE_IS_EDIT
      })
    },

    updateToNewCurrentMessage: (value) => {
      dispatch({
        type: UPDATE_TO_NEW_CURRENT_MESSAGE,
        value
      })
    },

    updateToNewCurrentMessageId: (id) => {
      dispatch({
        type: UPDATE_TO_NEW_CURRENT_MESSAGE_ID,
        id
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

    animationStateIsEnd: () => {
      dispatch({
        type: ANIMATION_STATE_IS_END,
      })
    },
    animationStateIsStart: () => {
      dispatch({
        type: ANIMATION_STATE_IS_START,
      })
    },

    mobileStateIsUsers: () => {
      dispatch({
        type: MOBILE_STATE_IS_USERS,
      })
    },
    
    mobileStateIsMessages: () => {
      dispatch({
        type: MOBILE_STATE_IS_MESSAGES,
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