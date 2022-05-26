import { connect } from 'react-redux';
import Panel from '../components/Panel/Panel';
import { 
  editMessageInStore,
  updateToNewCurrentMessage, 
  addNewMessageToStore, 
  messageStateIsCreate, 
  messageStateIsEdit } from '../redux/actions';


  
const mapStateToProps = (state) => { //берет текущий state из store
  return {
    currentMessage: state.currentMessage,
    allStore: state.allStore,
    currentUser: state.currentUser,
    messageState: state.messageState,
    currentMessageId: state.currentMessageId,
  }
}

const mapDispatchToProps = {
  updateToNewCurrentMessage, 
  addNewMessageToStore,
  messageStateIsCreate, 
  messageStateIsEdit,
  editMessageInStore,
}

const PanelWithStore = connect(mapStateToProps, mapDispatchToProps)(Panel);

export default PanelWithStore;