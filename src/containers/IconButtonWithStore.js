import { connect } from 'react-redux';
import IconButton from '../components/IconButton/IconButton';



const mapStateToProps = (state) => {
  return { 
    currentUser: state.currentUser,
    toggleMessageSearching: state.toggleMessageSearching,
    currentForwardMessages: state.currentForwardMessages,
  }
}

const IconButtonWithStore = connect(mapStateToProps, null)(IconButton)
export default IconButtonWithStore;