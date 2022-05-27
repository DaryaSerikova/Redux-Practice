import PanelWithStore from '../../containers/PanelWithStore';
import ChatWindowWithStore from '../../containers/ChatWindowWithStore';
import SidebarWithStore from '../../containers/SidebarWithStore';
import './App.css';



const App = ({ toggleSettings, hideSettings }) => {
  
  const onClick = (e) => {
    if (toggleSettings !== 'hide') {
      hideSettings();
    }
  }

  return (
    <div className="App" onClick={onClick}>
      <SidebarWithStore/>
      <div className='wrapper-chat-window'>
        <ChatWindowWithStore/>
        <PanelWithStore/>
      </div>
    </div>
  );
}

export default App;
