import './Panel.css';
import  { createStore } from 'redux';
import { reducer, reducerMessageStore } from '../../redux/reducer';
import { inputValue, putStoreMessage, resetState } from '../../redux/actions';
import { messageInfo } from '../../utils';



export const Panel = () => {

  const store = createStore(reducer);
  const storeMessage = createStore(reducerMessageStore);
  
  
  const onChange = (e) => {

    store.subscribe(() => {
      console.log(store.getState());
    });
    store.dispatch(inputValue(e.target.value))// это нужно отправить в redux в state

  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('ONSUBMIT!')
    // 1. post на сервер сообщения
    // 2. показ сообщения
    // 3. reset текущего state и textarea
    // 4. добавить в историю сообщений (другой state) объект
    //    { value: 'Привет!', to: 'Оксана', from: 'Дарья', date: '21.08.2022 23:45'}
    messageInfo.value = store.getState();
    messageInfo.date = new Date();

    console.log(storeMessage)

    storeMessage.subscribe(() => {
      console.log('storeMessage.getState()', storeMessage.getState());
    });
    storeMessage.dispatch(putStoreMessage(messageInfo));

    
    // store.subscribe(() => {
    //   console.log('store.getState()', store.getState());
    // });
    // store.dispatch(resetState());






    // store.dispatch(storeMessage())
  }

  return( //Переписать на форму
    <form  className='panel' onSubmit={onSubmit}>
      <textarea className='textarea' placeholder='Напишите сообщение..' 
        onChange={onChange}
      ></textarea>

      <div className='wrapper-btn'>
        <button 
          type="submit" 
          className='btn btn-success custom-btn'
          
          >
          Отправить
          </button>
      </div>
    </form>
  )
}