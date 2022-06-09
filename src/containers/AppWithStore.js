import { connect } from 'react-redux';
import App from '../components/App/App';

import { 
  HIDE_SETTINGS,
  } from "../redux/actions";


const mapStateToProps = (state) => {
  return {
    toggleSettings: state.toggleSettings,
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