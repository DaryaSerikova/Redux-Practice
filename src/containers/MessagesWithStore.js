import { connect } from 'react-redux';
import { //надо почистить
  ADD_NEW_MESSAGE_TO_STORE, 

  // MESSAGE_STATE_IS_EMPTY, 
  // MESSAGE_STATE_IS_FORWARD,

  CHOOSE_MESSAGE_IN_STORE,//////
  UPDATE_TO_NEW_CURRENT_MESSAGE_ID, 
  HIDE_SETTINGS,
  SHOW_SETTINGS,
  UPDATE_COORDINATES,
  ADD_TO_SELECTED_MESSAGES,

  SEARCHED_MESSAGES,
  HIDE_SELECTED_MESSAGE,
  SHOW_SELECTED_MESSAGE,

  // REMOVE_MESSAGE_FROM_FORWARD_MESSAGE,
  REMOVE_MESSAGE_FROM_SELECTED_MESSAGES,
  } from "../redux/actions/actions";

import {
  MESSAGE_STATE_IS_EMPTY, 
  MESSAGE_STATE_IS_FORWARD,
  } from '../redux/actions/messageState';


import { Messages } from '../components/Messages/Messages';

// clickCoordinates,  
// messageStateIsCreate, 
// messageStateIsEdit,
// updateToNewCurrentMessage, 
// removeMessageFromStore,
// addToForwardMessages,

const mapStateToProps = (state) => {
  return { 
    allStore: state.allStore,
    currentMessage: state.currentMessage,
    currentUser: state.currentUser,
    messageState: state.messageState,
    currentMessageId: state.currentMessageId,
    toggleSettings: state.toggleSettings,
    // clickCoordinates: state.clickCoordinates, //

    // currentForwardMessages: state.currentForwardMessages,
    currentlySelectedMessages: state.currentlySelectedMessages,

    toggleSelectedMessage: state.toggleSelectedMessage,
  }
}

const mapDispatchToProps = (dispatch) => { //надо почистить

  return {
    addNewMessageToStore: (value, name, edit, selected) => {
      dispatch({
        type: ADD_NEW_MESSAGE_TO_STORE,
        value,
        name,
        edit,
        selected
      })
    },
    chooseMessageInStore: (id, 
      // value, name, edit, 
      selected) => {

      dispatch({
        type: CHOOSE_MESSAGE_IN_STORE,
        id,
        // value,
        // name,
        // edit,
        selected
      })
    },
    // removeMessageFromStore: (id, name) => {
    //   dispatch({
    //     type: REMOVE_MESSAGE_FROM_STORE,
    //     id,
    //     name
    //   })
    // },
    // updateToNewCurrentMessage: (value) => {
    //   dispatch({
    //     type: UPDATE_TO_NEW_CURRENT_MESSAGE,
    //     value
    //   })
    // },
    // messageStateIsCreate: () => {//
    //   dispatch({
    //     type: MESSAGE_STATE_IS_CREATE
    //   })
    // }, 
    // messageStateIsEdit: () => {//
    //   dispatch({
    //     type: MESSAGE_STATE_IS_EDIT
    //   })
    // },
    addToSelectedMessages: (message) => { //addToForwardMessages
      dispatch({
        type: ADD_TO_SELECTED_MESSAGES, //ADD_TO_FORWARD_MESSAGES,
        message
      })
    },

    updateToNewCurrentMessageId: (id) => {
      dispatch({
        type: UPDATE_TO_NEW_CURRENT_MESSAGE_ID,
        id
      })
    },

    hideSettings: () => {
      dispatch({
        type: HIDE_SETTINGS
      })
    },
    showSettings: () => {
      dispatch({
        type: SHOW_SETTINGS
      })
    },

    updateCoordinates: (x, y) => {
      dispatch({
        type: UPDATE_COORDINATES,
        x,
        y
      })
    },


    updateSearchedMessages: (messages) => {
      dispatch({
        type: SEARCHED_MESSAGES,
        messages
      })
    },

    hideSelectedMessage: (id) => {
      dispatch({
        type: HIDE_SELECTED_MESSAGE,
        id
      })
    },
    
    showSelectedMessage: (id) => {
      dispatch({
        type: SHOW_SELECTED_MESSAGE,
        id
      })
    },

    messageStateIsForward: () => {
      dispatch({
        type: MESSAGE_STATE_IS_FORWARD
      })
    },

    removeFromSelectedMessages: (id) => { //removeFromForwardMessage
      dispatch({
        type: REMOVE_MESSAGE_FROM_SELECTED_MESSAGES, //REMOVE_MESSAGE_FROM_FORWARD_MESSAGE,
        id
      })
    },

    messageStateIsEmpty: () => {
      dispatch({
        type: MESSAGE_STATE_IS_EMPTY
      })
    },

  }
};


const MessagesWithStore = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesWithStore;