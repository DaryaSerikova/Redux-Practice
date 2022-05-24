import { connect } from 'react-redux';
//connect - это HOC
import { ADD_NEW_MESSAGE_TO_STORE, MESSAGE_STATE_IS_CREATE, MESSAGE_STATE_IS_EDIT, UPDATE_TO_NEW_CURRENT_MESSAGE, UPDATE_TO_NEW_CURRENT_MESSAGE_ID } from "../redux/actions";
import { updateToNewCurrentMessage, addNewMessageToStore } from '../redux/actions';
import ChatWindow from '../components/ChatWindow/ChatWindow'


const mapStateToProps = (state) => { //берет текущий state из store
  return { //возвращает свойства, которые нужны
    allStore: state.allStore,
    currentUser: state.currentUser,
    currentMessage: state.currentMessage,
    messageState: state.messageState,
    currentMessageId: state.currentMessageId
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
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);