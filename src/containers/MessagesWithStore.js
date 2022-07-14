import { connect } from 'react-redux';
import { //надо почистить
  UPDATE_TO_NEW_CURRENT_MESSAGE_ID, 
  HIDE_SETTINGS,
  SHOW_SETTINGS,
  UPDATE_COORDINATES,

  SEARCHED_MESSAGES,
  HIDE_SELECTED_MESSAGE,
  SHOW_SELECTED_MESSAGE,

  ANIMATION_STATE_IS_END,
  // ANIMATION_STATE_IS_EMPTY,
  ANIMATION_STATE_IS_START,
  } from "../redux/actions/actions";

import {
  MESSAGE_STATE_IS_EMPTY, 
  MESSAGE_STATE_IS_FORWARD,
  } from '../redux/actions/messageState';

import {
  ADD_NEW_MESSAGE_TO_STORE, 
  CHOOSE_MESSAGE_IN_STORE,
  } from '../redux/actions/allStore';

import { 
  ADD_TO_SELECTED_MESSAGES,
  REMOVE_MESSAGE_FROM_SELECTED_MESSAGES,
 } from '../redux/actions/currentlySelectedMessages';

import { Messages } from '../components/Messages/Messages';



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
    animationState: state.animationState,
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

    animationStateIsStart: () => {
      dispatch({
        type: ANIMATION_STATE_IS_START
      })
    },

    animationStateIsEnd: () => {
      dispatch({
        type: ANIMATION_STATE_IS_END,
      })
    },

    // animationStateIsEmpty: () => {
    //   dispatch({
    //     type: ANIMATION_STATE_IS_EMPTY,
    //   })
    // },

  }
};


const MessagesWithStore = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesWithStore;