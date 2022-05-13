import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer';
import App from './components/App/App';
import { createStore } from 'redux';
// import reportWebVitals from './reportWebVitals';

const store = createStore(reducer); //storeMessage и reducerMessageStore

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* В Provider уже реализована подписка на изменения store */}
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);


// reportWebVitals();
