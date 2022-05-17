import './Sidebar.css';
import { Users } from '../Users/Users';
import { arrUsers } from '../Users/ArrUsers';



const Sidebar = () => {

  const onChange = (e) => {

    if (e.target.value.trim()) {
      const searchedUsers = arrUsers.filter((user) => 
        user.toLowerCase().includes(e.target.value.toLowerCase())
      )
      // setSearched(searched)
    } else {
        // setSearched([...users])
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
      <Users/>
    </div>
  )
}

export default Sidebar;