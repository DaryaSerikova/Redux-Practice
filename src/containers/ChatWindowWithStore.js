import { connect } from 'react-redux';
//connect - это HOC
import ChatWindow from '../components/ChatWindow/ChatWindow'
import { SEARCHED_MESSAGES, 
  HIDE_MESSAGE_SEARCHING, 
  SHOW_MESSAGE_SEARCHING } from '../redux/actions';


const mapStateToProps = (state) => {
  return { 
    allStore: state.allStore,
    currentUser: state.currentUser,
    searchedMessages: state.messages,
    toggleMessageSearching: state.toggleMessageSearching,
    currentForwardMessages: state.currentForwardMessages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchedMessages: (messages) => {
      dispatch({
        type: SEARCHED_MESSAGES,
        messages
      })
    },

    hideMessageSearching: () => {
      dispatch({
        type: HIDE_MESSAGE_SEARCHING
      })
    },
    
    showMessageSearching: () => {
      dispatch({
        type: SHOW_MESSAGE_SEARCHING
      })
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);