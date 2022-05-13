import './Sidebar.css';
import { Users } from '../Users/Users';




const Sidebar = () => {



  return (
    <div className="sidebar">
      <input type='text' placeholder='Search...' className='search'></input>
      <Users/>
    </div>
  )
}

export default Sidebar;