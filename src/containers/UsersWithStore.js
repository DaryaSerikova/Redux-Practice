import { Users } from "../components/Users/Users";
import { connect } from "react-redux";
import { 
  updateToNewCurrentUser, 
  // addNewMessageToStore, 
  addNewUserToStore } from "../redux/actions";


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    allStore: state.allStore,
    users: state.users,
    // edited: state.edited
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentUser: (name) => {
      dispatch(updateToNewCurrentUser(name))
    },
    // addNewMessageToStore: (value, name, edit) => {
    //   dispatch(addNewMessageToStore(value,name, edit))
    // },
    addNewUserToStore: (name) => {
      dispatch(addNewUserToStore(name))
    }

  }
}

const UsersWithStore = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersWithStore;