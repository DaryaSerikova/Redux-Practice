import { createStore } from 'redux';
import './App.css';
import { ChatWindow } from '../ChatWindow/ChatWindow';
import { Panel } from '../Panel/Panel';

function App() {

  //Reducer
  // const reducer = (state = 0, action) => { // для state === undefined

  //   switch (action.type) {
  //     case 'INC':
  //       return state + 1;

  //     default:
  //       return state;
  //   }
  // };

  // const store = createStore(reducer);
  // console.log(store.getState());

  // store.dispatch({type: 'INC'});

  

  // let state = reducer(undefined, {}); //инициализация

  // state = reducer(state, { type: 'INC' }); //сами вызываем reducer
  // console.log(state);

  // state = reducer(state, { type: 'INC' });
  // console.log(state);


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
