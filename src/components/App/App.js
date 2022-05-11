import { createStore } from 'redux';
import './App.css';
import ChatWindow from '../ChatWindow/ChatWindow';
import { Panel } from '../Panel/Panel';

function App() {



  return (
    <div className="App">
      <div className='wrapper-chat-window'>
        <ChatWindow/>
        <Panel/>
      </div>
    </div>
  );
}

export default App;
