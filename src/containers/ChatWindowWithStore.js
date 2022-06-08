import { connect } from 'react-redux';
//connect - это HOC
import ChatWindow from '../components/ChatWindow/ChatWindow'
import { SEARCHED_MESSAGES } from '../redux/actions';


const mapStateToProps = (state) => {
  return { 
    allStore: state.allStore,
    currentUser: state.currentUser,
    searchedMessages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchedMessages: (messages) => {
      dispatch({
        type: SEARCHED_MESSAGES,
        messages
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);