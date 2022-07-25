import { connect } from 'react-redux';
import App from '../components/App/App';

import { 
  HIDE_SETTINGS,
  } from "../redux/actions/actions";


const mapStateToProps = (state) => {
  return {
    toggleSettings: state.toggleSettings,
    allStore: state.allStore,
    currentUser: state.currentUser,
    mobileState: state.mobileState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideSettings: () => {
      dispatch({
        type: HIDE_SETTINGS
      })
    },
  }
}

const AppWithStore = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppWithStore;