import { connect } from 'react-redux';
import { //надо почистить
  ADD_NEW_MESSAGE_TO_STORE, 
  // MESSAGE_STATE_IS_CREATE, 
  // MESSAGE_STATE_IS_EDIT, 
  CHOOSE_MESSAGE_IN_STORE,//////
  // REMOVE_MESSAGE_FROM_STORE, 
  // UPDATE_TO_NEW_CURRENT_MESSAGE, 
  UPDATE_TO_NEW_CURRENT_MESSAGE_ID, 
  HIDE_SETTINGS,
  SHOW_SETTINGS,
  UPDATE_COORDINATES,
  // ADD_TO_FORWARD_MESSAGES,
  SEARCHED_MESSAGES,
  HIDE_SELECTED_MESSAGE,
  SHOW_SELECTED_MESSAGE,
  } from "../redux/actions";
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
    currentForwardMessages: state.currentForwardMessages,
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
        // addToForwardMessages: (message) => {
    //   dispatch({
    //     type: ADD_TO_FORWARD_MESSAGES,
    //     message
    //   })
    // }
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

    hideSelectedMessage: () => {
      dispatch({
        type: HIDE_SELECTED_MESSAGE
      })
    },
    
    showSelectedMessage: () => {
      dispatch({
        type: SHOW_SELECTED_MESSAGE
      })
    },

  }
};


const MessagesWithStore = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesWithStore;