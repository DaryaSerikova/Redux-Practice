import { connect } from 'react-redux';
import { //надо почистить
  ADD_NEW_MESSAGE_TO_STORE, 
  MESSAGE_STATE_IS_CREATE, 
  MESSAGE_STATE_IS_EDIT, 
  REMOVE_MESSAGE_FROM_STORE, 
  UPDATE_TO_NEW_CURRENT_MESSAGE, 
  UPDATE_TO_NEW_CURRENT_MESSAGE_ID, 
  HIDE_SETTINGS,
  SHOW_SETTINGS,
  UPDATE_COORDINATES,
  ADD_TO_FORWARD_MESSAGES
  } from "../redux/actions";
import { Messages } from '../components/Messages/Messages';



const mapStateToProps = (state) => {
  return { 
    currentMessage: state.currentMessage,
    messageState: state.messageState,
    currentMessageId: state.currentMessageId,
    toggleSettings: state.toggleSettings,
    clickCoordinates: state.clickCoordinates,
    currentForwardMessages: state.currentForwardMessages,
  }
}

const mapDispatchToProps = (dispatch) => { //надо почистить

  return {
    addNewMessageToStore: (value, name, edit) => {
      dispatch({
        type: ADD_NEW_MESSAGE_TO_STORE,
        value,
        name,
        edit
      })
    },
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

    addToForwardMessages: (message) => {
      dispatch({
        type: ADD_TO_FORWARD_MESSAGES,
        message
      })
    }
  }
};


const MessagesWithStore = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesWithStore;