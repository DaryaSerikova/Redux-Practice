import { connect } from 'react-redux';
//connect - это HOC
import ChatWindow from '../components/ChatWindow/ChatWindow'
import { 
  ADD_NEW_MESSAGE_TO_STORE, 
  MESSAGE_STATE_IS_CREATE, 
  MESSAGE_STATE_IS_EDIT, 
  REMOVE_MESSAGE_FROM_STORE, 
  UPDATE_TO_NEW_CURRENT_MESSAGE, 
  UPDATE_TO_NEW_CURRENT_MESSAGE_ID, 
  HIDE_SETTINGS,
  SHOW_SETTINGS,
  UPDATE_COORDINATES,
  MESSAGE_IS_EDITED} from "../redux/actions";


const mapStateToProps = (state) => { //берет текущий state из store
  return { 
    allStore: state.allStore,
    currentUser: state.currentUser,
    currentMessage: state.currentMessage,
    messageState: state.messageState,
    currentMessageId: state.currentMessageId,
    toggleSettings: state.toggleSettings,
    clickCoordinates: state.clickCoordinates,
    edited: state.edited
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    addNewMessageToStore: (value, name) => {
      dispatch({
        type: ADD_NEW_MESSAGE_TO_STORE,
        value,
        name,
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

    messageIsEdited: () => {
      dispatch({
        type: MESSAGE_IS_EDITED
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);