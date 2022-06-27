import { connect } from 'react-redux';
import { 
  MESSAGE_STATE_IS_CREATE, 
  MESSAGE_STATE_IS_EDIT, 
  REMOVE_MESSAGE_FROM_STORE, 
  UPDATE_TO_NEW_CURRENT_MESSAGE, 

  // ADD_TO_FORWARD_MESSAGES,
  ADD_TO_SELECTED_MESSAGES,

  UPDATE_TO_NEW_CURRENT_MESSAGE_ID,
  HIDE_SETTINGS,
  CHOOSE_MESSAGE_IN_STORE,
  HIDE_SELECTED_MESSAGE,
  SHOW_SELECTED_MESSAGE,
  MESSAGE_STATE_IS_FORWARD,

  // RESET_FORWARD_MESSAGE,
  RESET_SELECTED_MESSAGES,

  // REMOVE_MESSAGE_FROM_FORWARD_MESSAGE,
  REMOVE_MESSAGE_FROM_SELECTED_MESSAGES,
  
  MESSAGE_STATE_IS_SELECT,
  MESSAGE_STATE_IS_EMPTY
  } from "../redux/actions";
import { Settings } from '../components/Settings/Settings';



//Messages.js and Settings.js

// clickCoordinates,  
// messageStateIsCreate, 
// messageStateIsEdit,
// updateToNewCurrentMessage, 
// removeMessageFromStore,
// addToForwardMessages,

// updateToNewCurrentMessageId
// toggleSettings
// chooseMessageInStore



const mapStateToProps = (state) => {
  return { 
    clickCoordinates: state.clickCoordinates,
    toggleSettings: state.toggleSettings,

  }
}

const mapDispatchToProps = (dispatch) => {

  return {

    removeMessageFromStore: (id, name) => {
      dispatch({
        type: REMOVE_MESSAGE_FROM_STORE,
        id,
        name
      })
    },
    updateToNewCurrentMessage: (value) => {
      dispatch({
        type: UPDATE_TO_NEW_CURRENT_MESSAGE,
        value
      })
    },
    messageStateIsCreate: () => {
      dispatch({
        type: MESSAGE_STATE_IS_CREATE
      })
    }, 
    messageStateIsEdit: () => {
      dispatch({
        type: MESSAGE_STATE_IS_EDIT
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

    messageStateIsSelect: () => {
      dispatch({
        type: MESSAGE_STATE_IS_SELECT
      })
    },

    resetSelectedMessages: () => { //resetForwardMessage
      dispatch({
        type: RESET_SELECTED_MESSAGES, //RESET_FORWARD_MESSAGE
      })
    },

    removeFromSelectedMessages: (id) => { //removeFromForwardMessage
      dispatch({
        type: REMOVE_MESSAGE_FROM_SELECTED_MESSAGES, // REMOVE_MESSAGE_FROM_FORWARD_MESSAGE,
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


const SettingsWithStore = connect(mapStateToProps, mapDispatchToProps)(Settings);
export default SettingsWithStore;