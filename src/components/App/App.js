import { createStore } from 'redux';
import './App.css';
// import ChatWindow from '../ChatWindow/ChatWindow';
// import Panel from '../Panel/Panel';
import PanelWithStore from '../../containers/PanelWithStore';

import Sidebar from '../Sidebar/Sidebar';
import ChatWindowWithStore from '../../containers/ChatWindowWithStore';

function App() {



  return (
    <div className="App">
      <Sidebar/>
      <div className='wrapper-chat-window'>
        {/* <ChatWindow/> */}
        {/* <Panel/> */}
        <ChatWindowWithStore/>
        <PanelWithStore/>
      </div>
    </div>
  );
}

export default App;
