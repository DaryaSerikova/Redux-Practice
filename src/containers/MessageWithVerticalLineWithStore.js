import { connect } from 'react-redux';
import MessageWithVerticalLine from '../components/MessageWithVerticalLine/MessageWithVerticalLine';
import { updateToNewCurrentUnusualMessage } from '../redux/actions/actions';


const mapStateToProps = (state) => {
  return {
    currentUnusualMessage: state.currentUnusualMessage
  }
}

const mapDispatchToProps = {
  updateToNewCurrentUnusualMessage
}

const MessageWithVerticalLineWithStore = connect(mapStateToProps, mapDispatchToProps)(MessageWithVerticalLine);

export default MessageWithVerticalLineWithStore;

// updateToNewCurrentUnusualMessage = (message) => ({
//   type: UPDATE_TO_NEW_CURRENT_UNUSUAL_MESSAGE,
//   message
// }); 