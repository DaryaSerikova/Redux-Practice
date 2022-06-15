import { connect } from 'react-redux';
import { 
  MESSAGE_STATE_IS_CREATE, 
  MESSAGE_STATE_IS_EDIT, 
  REMOVE_MESSAGE_FROM_STORE, 
  UPDATE_TO_NEW_CURRENT_MESSAGE, 
  ADD_TO_FORWARD_MESSAGES,
  UPDATE_TO_NEW_CURRENT_MESSAGE_ID,
  HIDE_SETTINGS,
  CHOOSE_MESSAGE_IN_STORE,
  HIDE_SELECTED_MESSAGE,
  SHOW_SELECTED_MESSAGE,
  MESSAGE_STATE_IS_FORWARD,
  RESET_FORWARD_MESSAGE,
  REMOVE_MESSAGE_FROM_FORWARD_MESSAGE,
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
        addToForwardMessages: (message) => {
      dispatch({
        type: ADD_TO_FORWARD_MESSAGES,
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

    resetForwardMessage: () => {
      dispatch({
        type: RESET_FORWARD_MESSAGE
      })
    },

    removeFromForwardMessage: (id) => {
      dispatch({
        type: REMOVE_MESSAGE_FROM_FORWARD_MESSAGE,
        id
      })
    },

  }
};


const SettingsWithStore = connect(mapStateToProps, mapDispatchToProps)(Settings);
export default SettingsWithStore;