import { connect } from 'react-redux';
import { Message } from '../components/Message/Message';
// import { messageIsEdited } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    // edited: state.edited,
    // currentMessageId: state.currentMessageId
  }
}

const mapDispatchToProps = {
  // messageIsEdited
}

const MessageWithStore = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageWithStore;
