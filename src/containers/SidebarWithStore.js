import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar/Sidebar';
import { updateSearchedUsers } from '../redux/actions';


const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = {
  updateSearchedUsers
}

const SidebarWithStore = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarWithStore;