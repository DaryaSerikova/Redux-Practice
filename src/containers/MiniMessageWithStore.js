import { connect } from 'react-redux';
import MiniMessage from '../components/MiniMessage.js/MiniMessage';



const mapStateToProps = (state) => {
  return { 
    currentlySelectedMessages: state.currentlySelectedMessages,
    messageState: state.messageState,
  }
}

const MiniMessageWithStore = connect(mapStateToProps, null)(MiniMessage); 
export default MiniMessageWithStore;