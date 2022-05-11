import './Panel.css';
import { createStore } from 'redux';
import { reducer, reducerMessageStore } from '../../redux/reducer';
import { getCurrentValue, putStoreMessage, resetState } from '../../redux/actions';
import { messageInfo } from '../../utils';



export const Panel = () => {

  const storeCurrentValue = createStore(reducer);
  const storeMessage = createStore(reducerMessageStore);
  
  
  const onChange = (e) => {

    storeCurrentValue.subscribe(() => {
      console.log('storeCurrentValue.getState() (в onChange)', storeCurrentValue.getState());
    });
    storeCurrentValue.dispatch(getCurrentValue(e.target.value))// это нужно отправить в redux в state
    
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('ONSUBMIT!')
    // 1. post на сервер сообщения
    // 2. показ сообщения
    // 3. reset текущего state и textarea
    // 4. добавить в историю сообщений (другой state) объект
    //    { value: 'Привет!', to: 'Оксана', from: 'Дарья', date: '21.08.2022 23:45'}
    messageInfo.value = storeCurrentValue.getState();
    messageInfo.date = new Date();

    console.log('storeMessage.getState()', storeMessage.getState())

    storeMessage.subscribe(() => {
      console.log('storeMessage.getState() (в onSubmit)', storeMessage.getState());
    });
    storeMessage.dispatch(putStoreMessage(messageInfo));
    console.log('storeMessage.getState()', storeMessage.getState())
    console.log('messageInfo.value before reset', messageInfo.value);
    // messageInfo.value = '';
    // store.dispatch(currentValue(messageInfo));


    // store.dispatch(resetState());
    // storeCurrentValue.dispatch(currentValue(''));
    // storeCurrentValue.dispatch(resetState());


    console.log('messageInfo.value after reset', messageInfo.value);

    // store.dispatch(storeMessage())
  }

  return( //Переписать на форму
    <form  className='panel' onSubmit={onSubmit}>
      <textarea 
        className='textarea' 
        placeholder='Напишите сообщение..' 
        value={storeCurrentValue.getState()}
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