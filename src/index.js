import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import App from './components/App/App';
import { createStore } from 'redux';


const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* В Provider уже реализована подписка на изменения store */}
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);
