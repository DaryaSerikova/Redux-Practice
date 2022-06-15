import { connect } from 'react-redux';
//connect - это HOC
import ChatWindow from '../components/ChatWindow/ChatWindow'
import { SEARCHED_MESSAGES, 
  HIDE_MESSAGE_SEARCHING, 
  SHOW_MESSAGE_SEARCHING, 
  REMOVE_MESSAGE_FROM_STORE,
  RESET_FORWARD_MESSAGE,
  MESSAGE_STATE_IS_EMPTY,
  REMOVE_GROUP_OF_MESSAGES_FROM_STORE,
 } from '../redux/actions';


const mapStateToProps = (state) => {
  return { 
    allStore: state.allStore,
    currentUser: state.currentUser,
    searchedMessages: state.messages,
    toggleMessageSearching: state.toggleMessageSearching,
    currentForwardMessages: state.currentForwardMessages,
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

    removeMessageFromStore: (id, name) => {
      dispatch({
        type: REMOVE_MESSAGE_FROM_STORE,
        id,
        name
      })
    },

    resetForwardMessage: () => {
      dispatch({
        type: RESET_FORWARD_MESSAGE
      })
    },

    messageStateIsEmpty: () => {
      dispatch({
        type: MESSAGE_STATE_IS_EMPTY
      })
    },

    removeGroupOfMessagesFromStore: (arrayForwardIds, name) => {
      dispatch({
        type: REMOVE_GROUP_OF_MESSAGES_FROM_STORE,
        arrayForwardIds,
        name
      })
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);