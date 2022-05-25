import UsersWithStore from '../../containers/UsersWithStore';
import { arrUsers } from '../Users/ArrUsers';
import './Sidebar.css';



const Sidebar = ({ updateSearchedUsers }) => {

  const onChange = (e) => {

    if (e.target.value.trim()) {
      const searchedUsers = arrUsers.filter((user) => 
        user.toLowerCase().includes(e.target.value.toLowerCase())
      )
      updateSearchedUsers(searchedUsers);
    } else {
      updateSearchedUsers(arrUsers);
    }
  }

  return (
    <div className="sidebar">
      <input 
        type='text' 
        placeholder='Search...' 
        className='search' 
        onChange={onChange}
      />
      <div className='users'>
        <UsersWithStore/>
      </div>
    </div>
  )
}

export default Sidebar;