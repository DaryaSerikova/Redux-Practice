import { Users } from "../components/Users/Users";
import { connect } from "react-redux";
import { updateToNewCurrentUser } from "../redux/actions";


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

// const mapDispatchToProps = { //Это коммент, но РАБОЧИЙ КОД
//   updateCurrentUser: (name) => updateToNewCurrentUser(name)
// }

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentUser: (name) => {
      dispatch(updateToNewCurrentUser(name))
    } 
  }
}

const UsersWithStore = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersWithStore;