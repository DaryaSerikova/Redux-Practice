import { connect } from 'react-redux';
import Panel from '../components/Panel/Panel';
import { updateToNewCurrentMessage, addNewMessageToStore } from '../redux/actions';

const mapStateToProps = (state) => { //берет текущий state из store
  return { //возвращает свойства, которые нужны
    currentMessage: state.currentMessage,
    messageStore: state.messageStore,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = {
  updateToNewCurrentMessage, 
  addNewMessageToStore
}

const PanelWithStore = connect(mapStateToProps, mapDispatchToProps)(Panel);

export default PanelWithStore;