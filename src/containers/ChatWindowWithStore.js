import { connect } from 'react-redux';
//connect - это HOC
import { ADD_NEW_MESSAGE_TO_STORE } from "../redux/actions";
import { updateToNewCurrentMessage, addNewMessageToStore } from '../redux/actions';
import ChatWindow from '../components/ChatWindow/ChatWindow'


const mapStateToProps = (state) => { //берет текущий state из store
  return { //возвращает свойства, которые нужны
    messageStore: state.messageStore,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {

  // const { getCurrentValue, putStoreMessage } = actions.bindActionCreators(actions, dispatch);

  return {
    // getCurrentValue: () => {
    //   const randomValue = 15; // написать нормальную переменную
    //   getCurrentValue(randomValue);
    // },

    // addNewMessageToStore: (newMessage) => {
    //   dispatch({
    //     type: 'PUT_IN_MESSAGE_STORE',
    //     payload: newMessage
    //   })
    // },

    addNewMessageToStore: (newMessage) => {
      dispatch({
        type: ADD_NEW_MESSAGE_TO_STORE,
        payload: newMessage
      })
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);