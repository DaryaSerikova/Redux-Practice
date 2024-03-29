import { Users } from "../components/Users/Users";
import { connect } from "react-redux";
import { 
  updateToNewCurrentUser, 

  updateSearchedMessages,
  hideMessageSearching,
  // addLastSentMessage,
  // resetSelectedMessages,

  mobileStateIsMessages,

 } from "../redux/actions/actions";

import { messageStateIsEmpty } from "../redux/actions/messageState";
import { addNewUserToStore } from "../redux/actions/allStore";
import { resetSelectedMessages } from '../redux/actions/currentlySelectedMessages';





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
    // addLastSentMessage: (name, message) => {
    //   dispatch(addLastSentMessage(name, message))
    // },
    messageStateIsEmpty: () => {
      dispatch(messageStateIsEmpty())
    },
    resetSelectedMessages: () => {
      dispatch(resetSelectedMessages())
    },

    mobileStateIsMessages: () => {
      dispatch(mobileStateIsMessages())
    },

  }
}

const UsersWithStore = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersWithStore;