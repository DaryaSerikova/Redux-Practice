import { Users } from "../components/Users/Users";
import { connect } from "react-redux";
import { 
  // updateToNewCurrentMessage, 
  updateToNewCurrentUser, 
  addNewMessageToStore, 
  addNewUserToStore } from "../redux/actions";


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    allStore: state.allStore,
    users: state.users
  }
}

// const mapDispatchToProps = { //Это коммент, но РАБОЧИЙ КОД
//   updateCurrentUser: (name) => updateToNewCurrentUser(name)
// }

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentUser: (name) => {
      dispatch(updateToNewCurrentUser(name))
    },
    addNewMessageToStore: (value, name) => {
      dispatch(addNewMessageToStore(value,name))
    },
    addNewUserToStore: (name) => {
      dispatch(addNewUserToStore(name))
    }

  }
}

const UsersWithStore = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersWithStore;