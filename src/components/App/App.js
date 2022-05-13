import { createStore } from 'redux';
import './App.css';
import ChatWindow from '../ChatWindow/ChatWindow';
import Panel from '../Panel/Panel';
import Sidebar from '../Sidebar/Sidebar';

function App() {



  return (
    <div className="App">
      <Sidebar/>
      <div className='wrapper-chat-window'>
        <ChatWindow/>
        <Panel/>
      </div>
    </div>
  );
}

export default App;
