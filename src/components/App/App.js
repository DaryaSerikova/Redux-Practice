import PanelWithStore from '../../containers/PanelWithStore';
import ChatWindowWithStore from '../../containers/ChatWindowWithStore';
import SidebarWithStore from '../../containers/SidebarWithStore';
import './App.css';



function App() {
  return (
    <div className="App">
      <SidebarWithStore/>
      <div className='wrapper-chat-window'>
        <ChatWindowWithStore/>
        <PanelWithStore/>
      </div>
    </div>
  );
}

export default App;
