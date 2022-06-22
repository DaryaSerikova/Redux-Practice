import { Users } from "../components/Users/Users";
import { connect } from "react-redux";
import { 
  updateToNewCurrentUser, 
  addNewUserToStore,
  updateSearchedMessages,
  hideMessageSearching,
  addLastSentMessage,
  messageStateIsEmpty,
  resetSelectedMessages,
  currentlySelectedMessages,
 } from "../redux/actions";


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    allStore: state.allStore,
    users: state.users,
    lastSentMessages: state.lastSentMessages,
    messageState: state.messageState,
    currentlySelectedMessages: state.currentlySelectedMessages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentUser: (name) => {
      dispatch(updateToNewCurrentUser(name))
    },
    addNewUserToStore: (name) => {
      dispatch(addNewUserToStore(name))
    },
    updateSearchedMessages: (messages) => {
      dispatch(updateSearchedMessages(messages))
    },
    hideMessageSearching: () => {
      dispatch(hideMessageSearching())
    },
    addLastSentMessage: (name, message) => {
      dispatch(addLastSentMessage(name, message))
    },
    messageStateIsEmpty: () => {
      dispatch(messageStateIsEmpty())
    },
    resetSelectedMessages: () => {
      dispatch(resetSelectedMessages())
    },

  }
}

const UsersWithStore = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersWithStore;