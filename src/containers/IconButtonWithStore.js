import { connect } from 'react-redux';
import IconButton from '../components/IconButton/IconButton';



const mapStateToProps = (state) => {
  return { 
    currentUser: state.currentUser,
    toggleMessageSearching: state.toggleMessageSearching,
    // currentForwardMessages: state.currentForwardMessages,
    currentlySelectedMessages: state.currentlySelectedMessages,
  }
}

const IconButtonWithStore = connect(mapStateToProps, null)(IconButton)
export default IconButtonWithStore;